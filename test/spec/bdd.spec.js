'use strict';
(function() {
	describe('Just a BDD test...', function() {
		before(function() {
			this.sup = function() {
				return 'What is up?';
			};
		});
		after(function() {
			this.sup = null;
		});
		it('should return expected result...', function() {
			expect(this.sup()).to.be.a('string').and.equal('What is up?');
			// expect(this.sup()).to.equal(null);
		});
	});
}());