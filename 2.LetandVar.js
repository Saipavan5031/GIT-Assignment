var x=1;
let y=1;

if(true)
{
   var x=2;
   let y=2;
}

console.log(x);
//expected o/p 2

console.log(y);
//expected o/p 2

/*
var--------->global variable(scope anyware in prgrm)

let--------->local variable(scope with in the block)

constant------>fixed variable(we can declare it anyware)

*/
