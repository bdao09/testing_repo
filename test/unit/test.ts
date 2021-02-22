var assert = require('chai').assert; // imports assertion tool
//var insurance = require('../../src') // imports file testing

var numbers = [1,2,3]; // example array

// sample test
//assert.include(numbers, 0, 'array contains 0');
assert.include(numbers, 1, 'array contains 1');
assert.include(numbers, 2, 'array contains 2');
assert.include(numbers, 3, 'array contains 3');
assert.include(numbers, 4, 'array contains 4');
assert.include(numbers, 7, 'array contains 7');
