// const {readfileSync, writeFileSync} = require('fs')
const {readFile, writeFile,readFileSync}=require('fs')

const first = readFileSync('./co/subfolder/text1.txt','utf8')
readFile('./co/subfolder/text1.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
})







// const person = {
//     name: 'Alice',
//     age: 25,
//     city: 'New York'
//   };
  
//   // Destructuring assignment
//   const { name, age, city } = person;
  
//   console.log(name); // Output: Alice
//   console.log(age);  // Output: 25
//   console.log(city); // Output: New York //Destructuring Objects