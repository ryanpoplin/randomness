'use strict';
(function() {
	describe('App.Models.Quest', function() {
		it('has default vals...', function() {
			var model;
			model = new App.Models.Quest();
			console.log(model);
			expect(model).to.be.ok;
			expect(model.get('title')).to.equal('');
			expect(model.get('text')).to.equal('Edit this quest...');
			expect(model.get('createdAt')).to.be.a('Date');
		});
		it('has set vals...', function() {
			var model;
			model = new App.Models.Quest({
				title: 'Master Node.js',
				text: 'Get badass at it...'
			});
			expect(model.get('title')).to.equal('Master Node.js');
			expect(model.get('text')).to.equal('Get badass at it...');
		});
	});
}());