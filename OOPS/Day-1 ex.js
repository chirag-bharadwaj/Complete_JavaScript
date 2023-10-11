class Google {
    constructor(name1, sal) {
        this.name1 = name1;
        this.sal = sal;
    }
    getSalary() {
        return ` ${this.name1} is an employee of google with ${this.sal}`
    }
    getSalary2() {
        return ` ${this.name1} is an employee of google with ${this.sal}`
    }
    getSalary3() {
        return ` ${this.name1} is an employee of google with ${this.sal}`
    }
}
var res2 = new Google('raghav', '30000');
console.log(res2.getSalary());
var res3 = new Google('Ayushi', '20000');
console.log(res3.getSalary2());
var res4 = new Google('Daiwik', '10000');
console.log(res4.getSalary3());



