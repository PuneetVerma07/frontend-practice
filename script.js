let num1 = Number(prompt("Enter first number"))
let operator = prompt("Enter operation ( + - * / ) : ")
let num2 = Number(prompt("Enter second number"))

let result;

if (operator == "+") result = num1 + num2;
else if (operator == "-") result = num1 - num2
else if (operator == "*") result = num1 * num2;
else if (operator == "/") result = num2 !== 0 ? num1/num2 : "Can not divided by zero"
else "Invalid operator"

console.log(result)