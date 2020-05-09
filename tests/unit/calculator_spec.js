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

  it('should be able to subtract two numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.strictEqual(3, calculator.runningTotal)
  })

  it('should be able to multiply two numbers', function(){
    calculator.previousTotal = 5;
    calculator.multiply(3)
    assert.strictEqual(15, calculator.runningTotal)
  })

  it('should be able to divide two numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(3, calculator.runningTotal)
  })

  it('should be able to recognise what number is clicked', function(){
    calculator.numberClick(9);
    assert.strictEqual(9, calculator.runningTotal)
  })

  it('should be able to chain multiple operations together', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.strictEqual(10, calculator.runningTotal);
  })

  it('should be able to clear the running total without affecting the calculation', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.clearClick();
    calculator.numberClick(6);
    calculator.operatorClick('=');
    const previousTotal = calculator.previousTotal;
    assert.equal(11, previousTotal)
  })


  
});
