'use strict';
(function() {
	describe('Namespace Testing...', function() {
		describe('Here we go...', function() {
			it('"App" object...', function() {
				expect(App).to.be.an('object');
			});
			it('"App" should have keys...', function() {
				expect(App).to.include.keys('Config', 'Models', 'Collections', 'Views', 'Routers', 'Templates');
			});
			it('"app" object...', function() {
				expect(app).to.be.an('object');
			});
		});
	});
}());