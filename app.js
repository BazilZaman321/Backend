/////////////////                      NODE BASIC




const http= require('http');
const port = 4000;

const server= http.createServer(function (req , res ) {
    if(req.url==='/'){
        res.write('man')
    }else if(req.url==='/contact'){
        res.write('contact')
    }res.end();
    
});



server.listen(port, function (error) {
    if (error) {
        console.log('something went wrong', error);

    } else {
        console.log('good' + port);

    }

});