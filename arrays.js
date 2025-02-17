

let arr = [1,2,'3',4,5]

console.log(arr[2]);

console.log(arr, arr.length);

console.log(arr[6]);

arr[5] = 6;

arr[10] = 11;

console.log(arr, arr.length);

let dob = [9, 'July', 1990, 'Mon', {month: 'July', Date: 9}, function(){console.log("Hi My name is Dilip");}]
console.log(dob)
dob.pop();
console.log(dob)
console.log(dob.pop())

let values = new Array('5');

values.push(10);
console.log(values);


let data = [1,2,'3',4,5]
data.push(6);
console.log(data);

console.log(data.push(7));
console.log(data);

data.shift();
console.log(data);

data.unshift(1);
console.log(data);

data.splice(2, 2);
console.log(data);

data.splice(2, 2, 3, 4, 5, 6);
console.log(data);


console.log(data.indexOf(6));
console.log(data.slice(2, 6));

console.log((data).reverse());
console.log(data.sort());

console.log(data.toSorted());
console.log((data).toReversed());

// for (const i of data) {
//     console.log(data);
// }

// for (const i in data) {
//     if (Object.hasOwnProperty.call(data, i)) {
//         const element = data[i];
//         console.log(element);
        
//     }
// }

// data.forEach(element => {
//     console.log(data)
// });

// for (let index = 0; index < data.length; index++) {
//     const element = data[index]*2;
//     console.log(element);
    
// }

// let rollNos = [1216,1203,1210,1213]

// rollNos.forEach(function(num, index, rollNos){
//     console.log(rollNos.sort());
// });

// rollNos.forEach(element => {
//     console.log(element);
//     console.log(rollNos.reverse());
    
// });


let rolls = [1216,1203,1210,1213,1218,1220]

// let [a,b,,d] = rolls;

// console.log(a,b,d);

let string = "S T R I N G"

let arry = string.split(' ');

console.log(arry);

let [a,b,,...d] = rolls

console.log(a,b,d);


//Method of Array

let arr1 = [12,13,14,15,16,17,18,19,20]



arr1.forEach((num)=>{
    if (num%2==0) {
        console.log(num);
    }

   
});

//map

let even =arr1.map(num=>{
    return num*2;
});

console.log(even);

//filter

let odd = arr1.filter(num=>num%2!==0)

console.log(odd);

//reduce 

let sum =arr1.reduce((num1, num2)=>num1+num2);
console.log(arr1)
console.log(sum);

//set 

let s1 = new Set("4,5,6");
s1.add(1)
s1.add(2)
s1.add(3)
console.log(s1);
