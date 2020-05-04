var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add two numbers', function(){
    calculator.previousTotal = 1;
    calculator.add(4)
    assert.strictEqual(5, calculator.runningTotal)
  })

  it('should be able to subtratc two numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.strictEqual(3, calculator.runningTotal)
  })
  
});
