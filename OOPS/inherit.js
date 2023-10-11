class Car {
    setName(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    stratEngine() {
        console.log('started', this.name);
    }
    stopEngine() {
        console.log('stopped', this.name);
    }
}
class DB9 extends Car {
    top_speed() {
        console.log('top speed of', this.name, 'is', this.speed);
    }
}
class Lancer extends Car {
    avg_speed(speed1) {
        this.speed1 = speed1;
        console.log('top speed of ', this.name, 'is', this.speed1);
    }
}
let obj = new DB9();
obj.setName('Galordo');
obj.stratEngine();
obj.top_speed('250kmph')
obj.stopEngine();
console.log("----------------------");
let obj1 = new Lancer();
obj1.setName('Lancer');
obj1.stratEngine()
obj1.avg_speed('200kmph');
obj1.stopEngine()