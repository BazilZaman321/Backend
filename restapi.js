const fs= require('fs');

for(let i=0 ; i<=10 ; i++){
    const filename = `file${i}.txt`;
    const content=`this is file number ${i}`
    fs.writeFileSync(filename,content);
}
console.log("created");
