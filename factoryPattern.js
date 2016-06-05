function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.toString = function () {
        return this.model + " has done " + this.miles + " miles";
    };
}

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);
console.log(civic.toString());
console.log(mondeo.toString())

function vehicleFactory(){
    vehicleFactory.prototype.vehicleClass = Car;
    vehicleFactory.prototype.getVehicle = function(options){
        return new this.vehicleClass(options);
    };
}

var carFactory = new vehicleFactory();
var car = carFactory.getVehicle({color: "blue", turbo: true});
console.log(car instanceof Car);

carFactory.vehicleClass = Truck;

var mover = carFactory.getVehicle({enclosedCargo: true, length: 26});
console.log(mover instanceof Truck);

function truckFactory(){
    truckFactory.prototype = new truckFactory();
    truckFactory.prototype.vehicleClass = Truk;
}

var truckFactory = new truckFactory();
var bigFoot = truckFactory.getVehicle({monster: true, cylinders: 12});
console.log(bigFoot instanceof Truck);