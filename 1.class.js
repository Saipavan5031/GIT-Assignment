//creating class & constructor
class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }  
}
var car1=new car('ford',2022);
var car2=new car('audi',2021);
console.log(car1);

/*
class Myclass1
{
     name_ = "" ;

     constructor(name)
     {
         this.name_ = name;
     }

    sayHi()
    {
        console.log(this.name_);
    }
}
var obj = new Myclass1("saipavan hai!!!!");
obj.sayHi();
*/