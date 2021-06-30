let reg = /harish/;

console.log(reg);

let a = "This is the programmer guy harish vithal";

let result = reg.exec(a)
console.log(result);

// FUNCTION 2 test ===> RETURNS TRUE OR FALSE
let result2 = reg.test("harish");
console.log(result2);

// FUNCTION 3 MATCH ===> IT WILL RETURN AN ARRAY OR NULL

// let result3 = reg.match(a) ===> this is wrong syntax
// let result3 = a.match(reg) ===> this is right syntax
let result3 = a.match(reg)
console.log(result3);