//arrays can be created by using 2 ways
let arr=new Array();
let arr1=[];

//mostly we use 2nd way
let names=['sai','pavan','saipavan'];

console.log(names[0]);//sai
console.log(names[2]);//saipavan

//we can replace the array elments
names[2]='naveen';

console.log(names[2]+'\n');//naveen

//we can add elements to array
names[3]='saipavan'; //now [sai,pavan,naveen,saipavan]


//to know the length of the array
console.log('length of the array is '+names.length+'\n');


console.log('before deletion:   '+names+'\n');

//we can add or delete the elements in an array by using push(),pop(),shift(),unshift() at beggening and ending

names.pop();//deleting last element in array i.e 'saipavan'

console.log('when we pop:   '+names+'\n');//['sai','pavan','naveen']

names.push('spavan');//inserting element at last

console.log('when we push:  '+names+'\n');//['sai','pavan','naveen','spavan']

names.shift();//deleting first element in array i.e 'sai'

console.log('when we shift:     '+names+'\n');//['pavan','naveen','spavan']

names.unshift('ssai');//addind element at first index

console.log('when we unshift:   '+names+'\n');//['sai','pavan','naveen','spavan']

//we can add multiple elments using these operations
names.push('ram','rithvik');

console.log(names);

names.unshift('roshi','reva');

console.log(names);
 
let fname=names;//copy by reference two variables have ref same array

console.log(names==fname);//true


//loops in array
let fnames=['sai','pavan','saipavan'];

//here we CAN retrive elements at particular index & we can iterate from last index
for(let i=0;i<fnames.length;i++)
{
    console.log(fnames[i]);
}

//another way using for..of 
//but in this we can't get array at particular index
//here we CAN NOT retrive elements at particular index
for(let name of fnames)
{
    console.log(name);
}
let a=[1,2,3,4,5];

a.length=3//truncate elements

console.log(a); //[1,2,3]

a.length=5;//we can not retrive elements 

console.log(a);//[ 1, 2, 3, <2 empty items> ] undefined
//simplest way to clear the array is a.length=0

//another syntax to create array
let arr2=new Array("sai",'saipavan','naveen');
console.log(arr2);