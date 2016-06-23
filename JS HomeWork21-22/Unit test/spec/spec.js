var pow = require('../js/script.js');

describe("pow", function() {
  it("raising a number 2 to the power 2", function() {
    var result;
    result = pow(2, 2);
    expect(result).toBe(4);
  });

  it("raising a number 10 to the power 5", function() {
    var result;
    result = pow(10, 5);
    expect(result).toBe(100000);
  });

  it("raising a number 2 to the power 2", function() {
    var result;
    result = pow(7, 8);
    expect(result).toBe(5764801);
  });
});
