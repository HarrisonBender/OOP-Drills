// Object Literals, Pseudo Classes and Methods 

let person1 = {
    myName: 'Harrison', 
    sayHello() {
        console.log(`Hello my name is ${this.myName}`)
    }
}

let person2 = {
    myName: 'Olivia', 
    sayHello() {
        console.log(`Hello my name is ${this.myName}`)
    }
}

let person3 = {
    myName: 'Thomas', 
    sayHello() {
        console.log(`Hello my name is ${this.myName}`)
    }
}

let person4 = {
    myName: 'Michael', 
    sayHello() {
        console.log(`Hello my name is ${this.myName}`)
    }
}

let person5 = {
    myName: 'Drew', 
    sayHello() {
        console.log(`Hello my name is ${this.myName}`)
    }
}

// person1.sayHello()
// person2.sayHello()
// person3.sayHello()
// person4.sayHello()
// person5.sayHello()


function Person(name, city, age) {
this.name = name;
this.city = city;
this.age = age;
}

Person.prototype.Introduction = function() {
    console.log(`${this.name}`)
}



let Harrison = new Person('Harrison', 'Birmingham', 30);


Harrison.Introduction()





class Friend {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
         this.age = age;
    }
   
    Introduction = () => {
        console.log(`Hi my name is ${this.name}, i live in ${this.city}, and i am ${this.age} years old!`)
    }
    
}


let Harrison1 = new Friend('Harrison', 'Birmingham', 30);

Harrison1.Introduction()

// Inheritance

class Vehicle {
    constructor(typeOfVehicle, wheels, manufacturer) {
        this.wheels = wheels;
        this.typeOfVehicle = typeOfVehicle
        this.manufacturer = manufacturer;
    }
    aboutVehicle() {
        console.log(`This vehicle is an ${this.typeOfVehicle} made by ${this.manufacturer}. it has ${this.wheels} wheels.`)
    }
}


let HarrisonCar = new Vehicle('IS300', 4, 'Lexus')

HarrisonCar.aboutVehicle()

class Car extends Vehicle {
    constructor(typeOfVehicle, wheels, manufacturer, doors, truckBed) {
        super(typeOfVehicle, wheels, manufacturer)
        this.doors = doors;
        this.truckBed = truckBed
    }
    aboutVehicle() {
        if (this.truckBed == true) {
        console.log(`This vehicle is an ${this.typeOfVehicle} made by ${this.manufacturer}. it has ${this.wheels} wheels and ${this.doors} doors. and it does have a truck bed!`)
    } else {
        console.log(`This vehicle is an ${this.typeOfVehicle} made by ${this.manufacturer}. it has ${this.wheels} wheels and ${this.doors} doors. and it does not have a truck bed!`)
    }
}
}

let OliviaCar = new Car('SUV', 4, 'Buick', 4, false)
let Ridgeline = new Car('Truck', 4, 'Honda', 4, true)

Ridgeline.aboutVehicle()
OliviaCar.aboutVehicle()


class Sedan extends Vehicle {
    constructor(typeOfVehicle, wheels, manufacturer, doors, size, mpg) {
        super(typeOfVehicle, wheels, manufacturer)
        this.doors = doors;
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This vehicle is a ${this.typeOfVehicle} made by ${this.manufacturer}. it has ${this.wheels} wheels and ${this.doors} doors. it is a ${this.size} ${this.typeOfVehicle}, and gets ${this.mpg} Miles per gallon! `)
    }
}

let HarrisonsCar = new Sedan('Sedan', 4, 'Lexus', 4, 'Small', 25);

HarrisonsCar.aboutVehicle()

class Motorcycle extends Vehicle {
    constructor (typeOfVehicle, wheels, manufacturer, handlebars, doors) {
        super(typeOfVehicle, wheels, manufacturer)
        this.handlebars = handlebars;
        this.doors = doors;
    }
    aboutVehicle() {
        if (this.handlebars == true) {
            console.log(`This vehicle is a ${this.typeOfVehicle} made by ${this.manufacturer}. it has ${this.wheels} wheels and ${this.doors} doors. it does have handlebars`)
        } else {
            console.log(`This vehicle is a ${this.typeOfVehicle} made by ${this.manufacturer}. it has ${this.wheels} wheels and ${this.doors} doors. it does not have handlebars`)
        }
    }
}


let ducatti = new Motorcycle('Motorcycle', 2, 'Ducatti', true, 0)
let no = new Motorcycle('Motorcycle', 2, 'Ducatti', false, 0)


ducatti.aboutVehicle()
no.aboutVehicle()