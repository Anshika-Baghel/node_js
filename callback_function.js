// function callback(){
//     console.log('Anshika is calling a callback function')
//     console.log('Now adding is successfully completed')

// }

// const add=function(a,b,callback){
//     var result=a+b
//     console.log('result :'+result)
//     callback();
// }
// add(3,4,callback)
// we can make the above function short

const add=function(a,b,callback){
  var result=a+b
 console.log('result :'+result)
 callback();
 }
//  add(2,3,function(){
//     console.log('add completed')
//  });
 add(2,3,()=>console.log('add completed'))  //inline function  

