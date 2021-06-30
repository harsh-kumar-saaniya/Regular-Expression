let reg = /harish/;

console.log(reg);

let a = "This is the programmer guy harish vithal";

let result = reg.exec(a)
console.log(result);

// FUNCTION 2 test ===> RETURNS TRUE OR FALSE
let result2 = reg.test("harish");
console.log(result2); 