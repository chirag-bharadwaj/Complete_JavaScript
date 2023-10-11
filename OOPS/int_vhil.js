class Vehicle {
    carName(name, model) {
        this.name = name;
        this.model = model;
        console.log('Car name is', this.name, 'company is', this.model);
    }
    horsePower(hp) {
        this.hp = hp;
        console.log('Horse Power is', this.hp);
    }
}
class Bike extends Vehicle {
    topSpeed(speed) {
        this.speed = speed;
        console.log('top is of', this.name, 'is', this.speed);
    }
    gear() {
        console.log('gear....');
    }
}
class Car extends Vehicle {
    topSpeed(speed) {
        this.speed = speed;
        console.log('top speed of', this.name, 'is', this.speed);
    }
    break(abs) {
        this.abs = abs;
        console.log('the ABS of', this.name, 'is', this.abs);
    }
}
class Bus extends Vehicle {
    wheels() {
        console.log('top speed  of', this.name, 'is', this.speed);
    }
}
let obj = new Bike();
obj.topSpeed('230kmph');
obj.gear();
let obj1 = new Vehicle();
obj1.carName('MeClern', 'Benze')
obj1.horsePower('700Watts')