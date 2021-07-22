//====================================================================================
//array creation way-------1

var array1 = new Array();
array1[0]   =   'sai';
array1[1]   =   22;

//we can create functions in arrays
array1[2]   =   function(name){
    console.log("hello  "+name);
} ;

//we can create objects in array
array1[3]   =   {course:"HTML,CSS & JS"};

console.log(array1);

console.log(array1[1]);

array1[2]('pavan');

array1[2](array1[0]);

console.log(array1[3].course);

//====================================================================================
//array creation way--------2
var names = ['sai','pavan','ammu'];
//console.log(names);

/*for(var i=0;i<names.length;i++)
{
    console.log('hello  '+names[i]);
}*/

var myobj={
    name:'sai',
    age:22,
    course:'html'
};

for(var prop in myobj)
{
    console.log(prop+': '+myobj[prop]);
}
//arrays are objects so we can do same thing with arrays

for(var n in names)
{
    console.log('helo '+ names[n]);
}
