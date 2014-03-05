'use strict';
(function() {
	suite('TDD time...', function() {
		suiteSetup(function() {
			this.yo = function() {
				return 'Yo mama...';
			};
		});
		suiteTeardown(function() {
			this.yo = null;
		});
		test('I am expecting a particular string result', function() {
			assert.isString(this.yo());
			assert.strictEqual(this.yo(), 'Yo mama...');
		});
	});
}());