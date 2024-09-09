// console.log("Server file is running")
// function add(a,b)
// {
//     return a+b;
// }
// there are many other ways to declare  functions in javascript not just the one specified above
// so here is another way of declaring or using a function in javascript
// var add=function(a,b)
// {
//     return a+b;
// }
//  by using arrow function
// var  add=(a,b)=>{return a+b;}
// another way of using arrow function
// var add=(a,b)=>a+b;
// var result=add(2,10)
// console.log(result)
// // another of using function in javascript

// (function(){
//     console.log('Anshika is added');
// })();

var _=require('lodash')
var data=["person","person",1,2,1,2,1,"2"]
var filter=_.uniq(data)
console.log(filter)
console.log(_.isString(3))
// const notes=require('./notes.js');
// console.log('server file is loaded')
// var age=notes.age
// console.log(age)
// var result=notes.addNumber(age,18)
// console.log('result is :'+result)
