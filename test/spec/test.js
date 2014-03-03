'use strict';
(function () {
    describe('Testing Setup...', function () {
        describe('Chai.js', function () {
            it('should be equal using "expect"', function () {
            		expect(hello()).to.equal('Hello World...');
            });
        });
        describe('Sinon.js', function() {
        	it('should report spy called', function() {
        		var helloSpy;
        		helloSpy = sinon.spy(window, 'hello');
        		expect(helloSpy.called).to.be.false;
        		hello();
        		expect(helloSpy.called).to.be.true;
        		hello.restore();
        	});
        });
    });
})();