// const fs= require('fs');

// for(let i=0 ; i<=10 ; i++){
//     const filename = `file${i}.txt`;
//     const content=`this is file number ${i}`
//     fs.writeFileSync(filename,content);
// }
// console.log("created");




// const fs = require('fs');

// for (let i = 1; i <= 10; i++) {
//   fs.unlink(`file${i}.txt`, (err) => {
//     if (err) {
//       console.error(`Error deleting file${i}.txt: ${err.message}`);
//     } else {
//       console.log(`Deleted file${i}.txt`);
//     }
//   });
// }










// const arr=[{name:"abc",mark:10},{name:"bca",mark:20,age:18},{name:"abc",mark:30},]

// const man =arr.map(item=>({
//    ...item,
//    mark:item.mark*10
// }));
// console.log(man);

// setTimeout(() => {
//     console.log(`timer: settimeoout`) 
// }, 0);
// setImmediate(()=>{
//     console.log(`check : setimmedatte`) 
// })
// process.nextTick(()=>{
//     console.log(`microtask :process.nextTick`) 
// })
// Promise.resolve().then(()=>{
//     console.log(`microstask:promise`) 
// })
// console.log(`main`) 







// console.log('start')
// setTimeout(()=>{
//     console.log('first')
// },100)
// setTimeout(()=>{
//     console.log(`secomd`)
// },0)
// Promise.resolve().then(()=>{
//     console.log(`promise`)
//     setTimeout(()=>{
//         console.log(`inside promise settimeout`)
//     },0)
// })
// setTimeout(()=>{
//     console.log(`third`)
// },0)
// setImmediate(()=>
//     console.log(`Inside immediate`)
// )
// console.log('end')

