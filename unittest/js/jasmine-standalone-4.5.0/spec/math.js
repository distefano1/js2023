describe("helloWorld", () =>{
    it("returns hello world", ()=>{
        var actual = hello();
        expect(actual).toBe("hello world");
    });
});



describe("Suma intregi", ()=>{
    it("return sum 5 si 3 = 8", () => {
        expect(add(5,3)).toEqual(8);
    });
});

describe("Suma reale", ()=>{
    it("return sum 1.4 si 0.7 = 2.1", () => {
        expect(add(1.4,0.7)).toEqual(2.1);
    });
});
describe("Inmultire intregi", ()=>{
    it("return sum inm 5 si 3 = 15", () => {
        expect(inm(5,3)).toEqual(15);
    });
});