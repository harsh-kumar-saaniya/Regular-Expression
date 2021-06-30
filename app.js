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

// FUNCTION 4 SEARCH ===> RETURN INDEX OF FIRST MATCH OR ELSE
// let result4 = reg.search(a) ===> this is wrong syntax
// let result4 = a.search(reg) ===> this is right syntax
let result4 = a.search(reg)
console.log(result4);

// FUNCTION 5 REPLACE ===> RETURNS NEW STRING WITH ALL REPLACEMENTS
let result5 = a.replace(reg, "kumar");
console.log(result5)