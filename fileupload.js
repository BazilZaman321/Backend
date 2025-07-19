const express= require('express');
const app = express();
const multer = require('multer');


const storage = multer.diskStorage({
    destination:'./upload',
    filename:(req,file,cb)=>cb(null,Date.now()+'-'+file.originalname)
});

const uploader= multer({storage});

app.post('/upload',uploader.single('file'),(req,res)=>{
    res.send('good');
});

app.listen(3000,()=>{
    console.log("man");
    
});


