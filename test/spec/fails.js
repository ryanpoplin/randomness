'use strict';
(function() {
	describe('Standard fails...', function() {
		describe('Here we go...', function() {
			it('should fail on expectation...', function() {
				expect('hi').to.equal('goodbye');
			});
			it('should just fail...', function() {
				throw new Error();
			});
		});
	});
}());