//1
let num1 = toString(100000);
let num2 = toString(100000000);
console.log(num1.length + num2.length);


//2
let text = 'Hello World';
let new_text = text.slice(6, 11) + ' ' +text.slice(0, 5);
console.log(new_text);

//3
let text = "Test string, .., -- string test";
console.log(text.replaceAll(',', '').replaceAll('.', '').replaceAll('-', '').replaceAll('   ', ' '));