const assert = require('assert')
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')

describe("Decorator", function(){

  let paint;
  let decorator;

  beforeEach(function() {
    paint = new Paint(5);
    paint2 = new Paint(5);
    decorator = new Decorator([]);
  });

  it("should start with an empty paint stock", function(){
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [])
  });

  it("should be able to add can to stock", function(){
    decorator.addPaint(paint);
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 1);
  });

  it("should calculete total litres paint in stock", function(){
    decorator.addPaint(paint2)
    const actual = decorator.totalLitres;
    assert.strictEqual(actual, )
  });


});
