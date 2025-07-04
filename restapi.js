// const fs= require('fs');

// for(let i=0 ; i<=10 ; i++){
//     const filename = `file${i}.txt`;
//     const content=`this is file number ${i}`
//     fs.writeFileSync(filename,content);
// }
// console.log("created");




// const fs = require('fs');

// for (let i = 1; i <= 10; i++) {
//   fs.unlinkSync(`file${i}.txt`);
//   console.log(`Deleted file${i}.txt`);
// }

const http = require('http');
const port =5000;
const server = http.createServer((req,res)=>{
  
})