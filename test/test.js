const chai = require('chai');
const expect = chai.expect;
const algorithms = require('../algorithms');
//1.ReturnSum
describe("Sum of Two Numbers", function() {
    it("should return the sum of num1 and num2", function() {
        let num1 = 1;
        let num2 = 2;
        let sum = algorithms.sum;
        expect(sum(num1,num2)).to.equal(3);
    });
});

//2.double
describe("Double the array value", function() {
    it("should return a new array where each value in the original has been doubled", function() {
        let arr = [1,2,3];
        let double = algorithms.double;
        expect(double(arr)).to.eql([2,4,6]);
    });
});

//3.celciusToFahrenheit
describe("Convert Celcius To Fahrenheit", function() {
    it("should return the exact value of temperature in fahrenheit", function() {
        let cDegrees = 100;
        let fareinheit = algorithms.celciusToFahrenheit;
        expect(fareinheit(cDegrees)).to.equal(212);
    });
});

//4.clockHandAngles
describe("Angles in Degrees of Hour, Minute, and Second", function() {
    it("should return the angles (in degrees) of the hour, minute and second hands", function() {
        let seconds = 3600;
        let clock = algorithms.clockHandAngles;
        expect(clock(seconds)).to.eql([30,0,0]);
    });
});

//5.isPrime
describe("Prime Numbers", function() {
    it("should return whether a given integer is prime", function() {
        let num = 3;
        let isPrime = algorithms.isPrime;
        expect(isPrime(num)).to.equal(true);
    });
});

//6.extractDigit
describe("Prime Numbers", function() {
    it("should return the numeral value of a given a number and a digit number", function() {
        let num = 1824;
        let digitNum = 2;
        let extractDigit = algorithms.extractDigit;
        expect(extractDigit(num, digitNum)).to.equal(8);
    });
});

//7.secondToLast
describe("Second to the last", function() {
    it("should return the second-to-last element of an array", function() {
        let arr = [42,true,4,"Kate",7];
        let secondToLast = algorithms.secondToLast;
        expect(secondToLast(arr)).to.equal('Kate');
    });
});

//8.nToLast
describe("N-from-array’s-end", function() {
    it("should return the element that is N-from-array’s-end", function() {
        let arr = [5,2,3,6,4,9,7];
        let n = 3;
        let nToLast = algorithms.nToLast;
        expect(nToLast(arr, n)).to.equal(4);
    });
});

//9.twoDimensional
describe("Two Dimensional Array", function() {
    it("should return a two dimensional array containing bunch of zeros", function() {
        let row = 2;
        let column = 5;
        let twoDimensional = algorithms.twoDimensional;
        expect(twoDimensional(row, column)).to.eql([[0,0,0,0,0],[0,0,0,0,0]]);
    });
});

//9.swapTowardCenter
describe("Swap Array", function() {
    it("should return a swapped array", function() {
        let arr = [true, 42, "Ada", 2, "pizza"];
        let swapTowardCenter = algorithms.swapTowardCenter;
        expect(swapTowardCenter(arr)).to.eql(["pizza", 2, "Ada", 42, true]);
    });
});