// conversion of json string to an object

const jsonString='{"name":"Jhon","age":28,"city":"New York"}';
const jsonObject=JSON.parse(jsonString);  //convert json string to object
console.log(jsonObject.name);

// conversion of json object to json string
const objectToConvert={
    name:"Alice",
    age:25
};
const json=JSON.stringify(objectToConvert);  // convert json object to string
console.log(json);
console.log(typeof json)