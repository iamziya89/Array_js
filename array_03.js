let names = ['vasanth', 'madan','ziya','madan',{
    name:'ranji'
},];

let name='vasanth';
let age=30;
let location = 'chennai';

let rajniFamily ={
    name : 'ranji',
    age : 75,
    daughters:{
        name:'Aishwarya',
        age:40
    }
}
console.log(rajniFamily);
console.log(rajniFamily.name);
console.log(rajniFamily.age);
console.log(rajniFamily.daughters.name);
console.log(rajniFamily.daughters.age);
// console.log(typeof rajniFamily);
// console.log(typeof names);
console.log(rajniFamily['daughters']['name']);
