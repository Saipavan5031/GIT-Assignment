class Animal
{
    constructor(name)
    {
        this.name=name;
    }
    speak()
    {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal
{
    constructor(name)
    {
        super(name);// calling the super class constructor and pass in the parameter
    }
    barks()
    {
        console.log(`${this.name} barks.`);
    }
}
let d=new Dog('pug');
d.speak();
d.barks();