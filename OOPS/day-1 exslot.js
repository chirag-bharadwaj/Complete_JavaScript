class Google {
    constructor(name1, name2, name3, sal1, sal2, sal3) {
        this.name1 = name1;
        this.name2 = name2;
        this.name3 = name3;
        this.sal1 = sal1;
        this.sal2 = sal2;
        this.sal3 = sal3;
    }
    getSalary() {
        console.log('Employee is', this.name1, 'Salary', this.sal1);
        console.log('Employee is', this.name2, 'Salary', this.sal2);
        console.log('Employee is', this.name3, 'Salary', this.sal3);
    }
}
var res2 = new Google('Raghav', 'Ayushi', 'Havish', '30000', '2000', '1000');
console.log(res2.getSalary());
console.log(typeof (Google));