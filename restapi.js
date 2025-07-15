// const fs= require('fs');

// for(let i=0 ; i<=10 ; i++){
//     const filename = `file${i}.txt`;
//     const content=`this is file number ${i}`
//     fs.writeFileSync(filename,content);
// }
// console.log("created");




const fs = require('fs');

for (let i = 1; i <= 10; i++) {
  fs.unlink(`file${i}.txt`, (err) => {
    if (err) {
      console.error(`Error deleting file${i}.txt: ${err.message}`);
    } else {
      console.log(`Deleted file${i}.txt`);
    }
  });
}

