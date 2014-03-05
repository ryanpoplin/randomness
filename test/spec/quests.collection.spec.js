'use strict';
(function() {
	describe('App.Collections.Quests', function() {
		before(function() {
			this.quests = new App.Collections.Quests();
			console.log(this.quests);
			this.quests.localStorage._clear();
		});
		after(function() {
			this.quests = null;
		});
		describe('creation...', function() {
			it('has default values...', function() {
				expect(this.quests).to.be.ok;
				expect(this.quests).to.have.length(0);
			});
			it('should be empty on fetch...', function(done) {
				var quests;
				quests = this.quests;
				expect(quests).to.be.ok;
				expect(quests).to.have.length(0);
				quests.once('reset', function() {
					expect(quests).to.have.length(0);
					done();
				});
				quests.fetch({reset:true});
			});
		});
		describe('modification...', function() {
			beforeEach(function() {
				this.quests.create({
					title: 'Test Quest...',
					text: 'Pre quest from beforeEach...'
				});
			});
			afterEach(function() {
				this.quests.localStorage._clear();
				this.quests.reset();
			});
			it('has a single quest...', function(done) {
				var quests = this.quests, quest;
				quests.once('reset', function() {
					expect(quests).to.have.length(1);
					quest = quests.at(0);
					expect(quest).to.be.ok;
					expect(quest.get('title')).to.contain('Quest...');
					expect(quest.get('text')).to.contain('Pre');
					done();
				});
				quests.fetch({reset:true});
			});
			it('can delete a quest...', function(done) {
				var quests = this.quests, quest;
				quests.once('remove', function() {
					expect(quests).to.have.length(0);
					done();
				});
				quest = quests.shift()();
				expect(quest).to.be.ok;
			});
			it('can create a second quest...', function(done) {
				var quests, quest;
				quests = this.quests;	
				quest = quests.create({
					title: 'Test quest 2...',
					text: 'A new quest...'
				});
				quests.once('reset', function() {
					expect(quests).to.have.length(2);
					quest = quests.at(1);
					expect(quest).to.be.ok;
					expect(quest.get('title')).to.contain('2...');
					expect(quest.get('text')).to.contain('quest...');
					done();
				});
				quests.fetch({reset:true});
			});
		});
	});	
}());