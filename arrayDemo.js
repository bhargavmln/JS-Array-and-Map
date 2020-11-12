let origDogs = ["Bulldog","Beagle","Labrador"];
let cats = new Array("Curl,Bengal");
let birds = new Array("Falcon","Duck","Swan");

//Array copy elements
let slicedDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//Stack functions (LIFO) push and pop
let pushDog = dogs.push("golden retriever");
let popDog = dogs.pop();
dogs[dogs.length] = "poddle";

//Add or remove from first
let addFirst  = dogs.unshift("golden retriever");
let  shiftDog = dogs.shift();

//Atomic add and remove elements
dogs.splice(2,1,"Pug","Boxer");

//Array functions-concat,slice,sort
let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first,second]){
    console.log("Scan: "+first+" "+second);
}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for(let animal of animals) allAnimals += animal + " ";

console.log("Animals: "+allAnimals);