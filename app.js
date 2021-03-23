//============express app=================================================

// const express = require('express');

// //express app
// const app= express();


// //listen for requests
// app.listen(3000, (err)=>{
//     console.log('listening to 3000');
// });

// app.get('/', (req,res)=>{  
//     //res.send('<p>Hello guys!!</p>')
//     res.sendFile('./veiws/index.html', {root: __dirname});
// });
// app.get('/about', (req,res)=>{  
//     res.sendFile('./veiws/about.html', {root: __dirname});
// });


// //redirects

// app.get('/about-me', (req,res)=>{
//     res.redirect('/about');
// })


// //404 pages //this needs to be at the end of all others since it is default and used in every case

// app.use((req,res)=>{
//     res.status(404).sendFile('./veiws/404.html', {root: __dirname})
// })



//================express app along with view engines


const express = require('express');

//express app
const app= express();

//register view engine
app.set('view engine', 'ejs');

//app.set('views','some another name for views')


//listen for requests
app.listen(3000, (err)=>{
    console.log('listening to 3000');
});

app.get('/', (req,res)=>{  
    const blogs=[
        {title: 'Akshad ', snippet: 'Lorem  nubj,ey bkdjc dbjcfh bhjcxz'},
        {title: 'Abhishek ', snippet: 'Lorem  nubj,ey bkdjc dbjcfh bhjcxz'},
        {title: 'Anant ', snippet: 'Lorem  nubj,ey bkdjc dbjcfh bhjcxz'}
    ];

    res.render('index', {title: 'Home' , blogs}); //send dynamic contet through {} curly braces
});
app.get('/about', (req,res)=>{  
    res.render('about', {title: 'About'});
});
app.get('/blogs/create', (req,res)=>{  
    res.render('create', {title: 'Create'});
});

app.use((req,res)=>{
    res.render('404', {title: 'Error'});
}) 