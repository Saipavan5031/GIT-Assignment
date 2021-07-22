//encapsulation
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    add_number(num){
        this.num=num;
    }
    getDetails(){
        console.log(`name is ${this.name} and number is ${this.num}`);
    }
}
let per=new Person('sai',22);
per.number(8499978440);
per.getDetails();