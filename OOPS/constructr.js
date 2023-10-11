function Car(name, company) {
    this.name = name;
    this.company = company;
}
let cars = new Car('DB9', 'Astro Martin');
let cars2 = new Car('supra', 'Toyota');
let cars3 = new Car('Galardo', 'lambhorgini');
let cars4 = new Car('Maruti 800', 'Maruti');
let cars5 = new Car('McLeren', 'Benze');

console.log(cars, '\n', cars2, '\n', cars3, '\n', cars4, '\n', cars5);
