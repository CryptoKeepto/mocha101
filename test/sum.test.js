const expect = require("chai").expect;
const Calculater = require("../src/sum");

describe("test class Calculater", () => {

    let cal = undefined;

    before(() => {
        cal = new Calculater();
    });
    
    it("should be success when value1 = 10, value2 = 15, expected == 25", () => {
        // arrange
        const value1 = 10;
        const value2 = 15;

        // act
        const total = cal.plus(value1, value2);

        // assert
        expect(25).to.be.equal(total);

    });

    it("should be success when value1 = 50, value2 = 25, expected == 25", () => {
        // arrange
        const value1 = 50;
        const value2 = 25;

        // act
        const total = cal.minus(value1, value2);

        // assert
        expect(25).to.be.equal(total);

    });
});




// describe('คำอธิบายว่าเราจะ Test เรื่องอะไร', () => {
//     beforeEach(() => {
//       // beforeEach ทุก Test case เราจะเข้า function นี้ก่อนเสมอ
//     });
    
//     before(() => {
//       // before คือ เราจะทำ function นี่ก่อนทำ Test case ครั้งแรกครั้งเดียว
//     });
//     afterEach(() => {
//       // afterEach เมื่อจบ Test case แต่ละ Test case เราจะทำ function นี้
//     });
//     after(() => {
//       // after เมื่อจบทุก Test case ถึงจะทำ function นี้
//     });
//     it('คำอธิบาย Test case', () => {
//       // test case
//     });
//   });
