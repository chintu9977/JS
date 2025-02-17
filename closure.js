function outerFunction(outervarible) {
  
   function innerFunction(innervariable) {
    console.log(innervariable);
    console.log(outervarible);
    return outervarible;
    return innervariable;
  };
}



let a = outerFunction(1);
let b = innerFunction(2);

console.log(a);
console.log(b);
