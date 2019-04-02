const Decorator = function(stock) {
  this.stock = [];
};

Decorator.prototype.addPaint = function(can) {
  this.stock.push(can);
};

module.exports = Decorator;
