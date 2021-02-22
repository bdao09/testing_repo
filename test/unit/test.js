var assert = require("chai").assert; // imports assertion tool
//var insurance = require('../../src') // imports file testing

var numbers = [1, 2, 3]; // example array

describe("Array", () => {
  describe("included elements", () => {
    it("should contain 1", () => {
      assert.include(numbers, 1, "array contains 1");
    });
    it("should contain 2", () => {
      assert.include(numbers, 2, "array contains 2");
    });
    it("should contain 3", () => {
      assert.include(numbers, 3, "array contains 3");
    });
    it("should not contain 4", () => {
      assert.notInclude(numbers, 4, "array contains 4");
    });
  });
  describe("expect to fail:", () => {
    it("should include 0 ", () => {
      assert.include(numbers, 0, "array contains 0: FAIL");
    });
    it("should include 7 ", () => {
      assert.include(numbers, 7, "array contains 7: FAIL");
    });
  });
});
