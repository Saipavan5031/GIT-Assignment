//ES6

//forEach
const animals=["cat","dog","goat","lion"];

animals.forEach((animal)=>{
    console.log(animal);
});

console.log("==========for each index==========");
animals.forEach((animal,index)=>{
    console.log(`animal index ${index} and name ${animal}`);
});

//map
console.log("==================map================");

const newAnimals=animals.map(item=>item+'new');
console.log(newAnimals);

//filter
console.log("===============filter====================");

const filterAnimal=animals.filter(animal=>animal=='dog');
console.log(filterAnimal);

const filterAnimals=animals.filter(animal=>animal!='dog');
console.log(filterAnimals);
