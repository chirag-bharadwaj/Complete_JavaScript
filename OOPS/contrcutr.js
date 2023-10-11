function Jsp(staff_name, behaviour) {
    this.staff_name = staff_name;
    this.behaviour = behaviour;

    this.work = function () {
        console.log("All Good Teachers...!");
    }
}
let person = new Jsp('Pooja', 'stright forward');
let person1 = new Jsp('Niranjan', 'Boyish');
let person2 = new Jsp('sumaiya', 'too lil...');

console.log(person, '\n', person1, '\n', person2);
console.log(person1.work());