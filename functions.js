

// function
function sum(a, b) {
  sum = a + b;
  console.log(sum);
  return sum;
}
document.write(sum(23, 99));

// function expression
let num = function expo(a, b) {
  return a * b;
  console.log("Hi"); //test
};
console.log(num(9, 9));

//tempalte lietral
function greet(user) {
  return `Hello ${user}`;
}

let user = "Dilip";
let mess = greet(user);
console.log(mess);
document.write(mess);

//Anonymous Function

mult = function (a, b) {
  console.log(a, b);
  return a * b;
  console.log("Hi");
};

res = mult(12, 12);
console.log(res);

//IIFE

(function welcome() {
  console.log("Hi, Welcome to my world");
})();

//welcome();

//Arrow function

let arrw = (n1, n2) => {
  return n1 % n2;
};

let arw = (n1, n2) => n1 - n2;
console.log(arw(10, 5));
document.writeln(arrw(34, 8));
console.log(arrw(290, 89));

//deafult parameter

//parameters

mult = function (a, b, c = 1) {
  return a * b * c;
};

console.log(mult(9, 19, 10)); //arguments

// Rest Parameters

function product(a = 1, b = 1, ...arr) {
  var res = a * b;
  console.log(arr);

  for (const c of arr) {
    res = res * c;
  }

  console.log(res);

  return res;
}

document.writeln(product(10, 2, 1, 8));

let numbers = [20, 30, 2, 3, 10, 1];

numbers.forEach((number, i) => {
  console.log(number);
  numbers[i] = number * 10;
});
console.log(numbers);

numbers.forEach(function (number, i) {
  console.log(number);
  numbers[i] = number * 20;
});

console.log(numbers);

numbers.forEach(tripplet);

function tripplet(number, i) {
  numbers[i] = number * 3;
}

console.log(numbers);
