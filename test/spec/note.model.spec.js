'use strict';
(function() {
	describe('App.Models.Note', function() {
		it('has default vals...', function() {
			var model;
			model = new App.Models.Note();
			expect(model).to.be.ok;
			expect(model.get('title')).to.equal('');
			expect(model.get('text')).to.equal('Edit this note...');
			expect(model.get('createdAt')).to.be.a('Date');
		});
		it('has set vals...', function() {
			var model;
			model = new App.Models.Note({
				title: 'Master Node.js',
				text: 'Get badass at it...'
			});
			expect(model.get('title')).to.equal('Master Node.js');
			expect(model.get('text')).to.equal('Get badass at it...');
		});
	});
}());