class Company{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
     work(){
        console.log(`${this.name} can do work here `);
    }
}
class Employee extends Company{
    constructor(name,age,deprt){
        super(name,age);
        this.deprt=deprt;
    }
    done(){
        console.log(`work is done by ${this.deprt} guy name is ${this.name} and age  ${this.age}`)
    }
}
let emp=new Employee('sai',22,'CSE');
emp.work();
emp.done();
