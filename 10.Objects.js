/* OLD 
const user={
    name:'sai',
    age:25,
    sayName:function()
    {
        console.log('hai my name is '+this.name);
        var that=this;
        var fullname=function()
        {
            console.log('hai my name is '+ that.name +' and age is ' +that.age);

        };
        fullname();
    }
};
user.sayName();
*/


//ES6

const user={
    name:'sai',
    age:22,
    sayName:function()
    {
        console.log(`My name is ${this.name}`);
        const fullname=()=>{
            console.log(`my name is ${this.name} and my age is ${this.age}`);
        };
        fullname();
    }
};
console.log(user);
user.sayName();