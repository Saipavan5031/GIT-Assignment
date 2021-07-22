/* OLD

const sayName=function(){
    console.log('hello my name is saipavan');

};
sayName();
*/

//======   ES6   ========

const sayName=()=>console.log('helo my name is sai');//no parameters

const saySName=name=>console.log('helo my name is  '+name);//single parameter

//more than one parameter with more than one statement
const sayFullname=(name,age)=>{

    console.log('hello my name is  '+name);
    console.log('hello my age is  '+age);

};


sayName();

saySName('saiii');

sayFullname('saipavan',23);

//DEFAULT PARAMETER
//OLd
function mul(x,y){
 var a=x || 1;
 var b=y || 1;
  console.log(a*b);  
};
mul(2,5);
mul();

//ES6
const add=(c=1,d=1)=>{
    console.log(c+d);
}
add(5,5);
add();