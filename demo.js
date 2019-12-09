/*
const square ={
    area : (a) => (a*a),
    two : (a) => (4*a)
 }
*/
//exported from square.js
//(function  (exports,required,modual,_filename,_dirname){}

const square =require("./square")

 const me = (a) => {
    console.log(`${a}and area is` + square.area(a))
     console.log(`${a}and area is` + square.two(a))
}
console.log(__filename)
console.log(__dirname)
 me(10)