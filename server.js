const http= require('http');
const fs = require('fs');

const server= http.createServer((req,res)=>{
    
    //======= request object===========

    //console.log(req.url, req.method);

    // =======sending response 3 steps==========

    // res.setHeader('Content-Type', 'text/html');
    // res.write('<p>hello world!</p>');
    // res.end();  


    //================basic routing==========
    
    let path = './views';
    switch(req.url){
        case '/':
            path+= '/index.html';
            res.statusCode= 200;
            break;
        case '/about':
            path+='/about.html';
            res.statusCode= 200;
            break;

        // redirecting to a particular page

        case '/about-me':
            res.statusCode= 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path+='/404.html';
            res.statusCode= 404;
            break;
    }

    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path, (err,data)=>{
        if(err) {
            console.log(err);
            res.end();
        }
        else {
            //res.write(data);
            
            res.end(data); //data can be passed here if there is only one write statement
        }
    })

});



server.listen(3000, 'localhost',()=>{
    console.log('listening on 3000');
}); 