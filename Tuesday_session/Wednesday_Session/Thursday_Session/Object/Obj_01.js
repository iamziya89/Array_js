// OBJECT
let circle={
    radius:1,
    location:{
          x:2,
          y:2,
    },
    draw:function(){

        return "drawing Circle";
    },
};
// console.log(circle["radius"]);
// // console.log(circle["location"]);
// console.log(circle.radius);
// console.log(circle["location"]["x"]);
// console.log(circle.draw); //Output is [Function:draw]

console.log(circle.draw(),circle.radius);

let circle2={
    radius:5,
    location:{
          x:7,
          y:6,
    },
    draw:function(){
     return "drawing Circle";
    },
};
console.log(circle2.draw(),circle2.radius);