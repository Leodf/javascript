const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c}}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) // SyntaxError: Unexpected token ' in JSON at position 2
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // SyntaxError: Unexpected token ' in JSON at position 2
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [], "f": 1.7 }'))