let object = {

};

console.log(object);
console.log(typeof object);


//Object literals
let car = {
brand: 'Hyundai',

model: 'creta',
year: '2021',
specs: {
'vehilce type': 'SUV',
vehilce_color: 'white',
transamisson: "manual"
}

};

car.engine = "Diesel"

console.log(car);
console.log(car.model);
console.log(car.specs);
console.log(car.specs['vehilce type']);
console.log(car.specs['vehilce_generation']?.length);


let driver = new Object();

driver.name="Ramesh";
driver.age=25;

console.log(driver);

//Constuctor function
function cust (n, p, a) {
    this.name = n;
    this.phone = p;
    this.address = a;
    this.login = function (){
        console.log(`Hi ${this.name} has login sucess `)
    }

}

let customer1 = new cust ('Dilip',9052982820,'Hyderabad')
let customer2 = new cust ('Durga',9032076276,'Hyderabad')


//for-in loop

for (const key in customer1) {
    if (Object.hasOwnProperty.call(customer1, key)) {
        const element = customer1[key];
        console.log(element);
        
    }
}

for (const key in customer2) {
   console.log(key,":", customer2[key]);
}

console.log(Object.keys(customer1));

customer1.age = 34
customer2.age = 34

console.log(customer1);
console.log(customer1.name);
console.log(customer1.age);
console.log(customer2);
console.log(customer2.name);
console.log(customer2.age);


customer1.login();
customer2.login();
//customer3.login();


//Object create method

let customer3 = Object.create(cust, {
    name: {value: 'Snehan'},
    phone: {value: 9866667788},
    address: {value: 'Hyderabad'},
   
});

customer3.age = 34

console.log(customer3);

let mycar = {
    brand: 'Hyundai',
    model: 'Creta',
    year: '2021',
    specs: {
    'vehilce type': 'SUV',
    vehilce_color: 'white',
    transamisson: "manual",
    engine: "diesel"
    }
    
    };

    let {brand, model, specs:{engine}} = mycar;

    console.log(brand, model, engine);