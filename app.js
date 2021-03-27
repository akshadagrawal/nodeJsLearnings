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


// const express = require('express');

// //express app
// const app= express();

// //register view engine
// app.set('view engine', 'ejs');

// //app.set('views','some another name for views')


// //listen for requests
// app.listen(3000, (err)=>{
//     console.log('listening to 3000');
// });

// app.get('/', (req,res)=>{  
//     const blogs=[
//         {title: 'Akshad ', snippet: 'Lorem  nubj,ey bkdjc dbjcfh bhjcxz'},
//         {title: 'Abhishek ', snippet: 'Lorem  nubj,ey bkdjc dbjcfh bhjcxz'},
//         {title: 'Anant ', snippet: 'Lorem  nubj,ey bkdjc dbjcfh bhjcxz'}
//     ];

//     res.render('index', {title: 'Home' , blogs}); //send dynamic contet through {} curly braces
// });
// app.get('/about', (req,res)=>{  
//     res.render('about', {title: 'About'});
// });
// app.get('/blogs/create', (req,res)=>{  
//     res.render('create', {title: 'Create'});
// });

// app.use((req,res)=>{
//     res.render('404', {title: 'Error'});
// }) 

// ===============middleware and static files=================

// const express = require('express');
// const morgan =  require('morgan');

// //express app
// const app= express();

// //register view engine
// app.set('view engine', 'ejs');

// //app.set('views','some another name for views')


// //listen for requests
// app.listen(3000, (err)=>{
//     console.log('listening to 3000');
// });


// // app.use((req,res,next)=>{   // code is evaluated top to botttom so even if /about is request made first app.use() middleware will be used and then the rest
// //     console.log('in middleware 1');
// //     next();  /// this next function tells the code to send response ehich is requested or else broser hangs and nothin didplayed
// // });
// app.use(morgan('tiny'));

// app.use(express.static('public')); // automatically looks in public folder need not to do public/styles.css



// app.get('/', (req,res)=>{  
//     const blogs=[
//         {title: 'Akshad ', snippet: 'Lorem  nubj,ey bkdjc dbjcfh bhjcxz'},
//         {title: 'Abhishek ', snippet: 'Lorem  nubj,ey bkdjc dbjcfh bhjcxz'},
//         {title: 'Anant ', snippet: 'Lorem  nubj,ey bkdjc dbjcfh bhjcxz'}
//     ];

//     res.render('index', {title: 'Home' , blogs}); //send dynamic contet through {} curly braces
// });
// app.get('/about', (req,res)=>{  
//     res.render('about', {title: 'About'});
// });
// app.get('/blogs/create', (req,res)=>{  
//     res.render('create', {title: 'Create'});
// });

// app.use((req,res)=>{
//     res.render('404', {title: 'Error'});
// }) 


///============Mongo DB===========

// const express = require('express');
// const morgan =  require('morgan');
// const mongoose = require('mongoose');
// const Blog= require('./models/blog')




// //express app
// const app= express();

// //connect to db
// const dbURI='mongodb+srv://akshad5054:Akshad@123@cluster0.8war2.mongodb.net/node-tuts?retryWrites=true&w=majority';
// mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
// .then((result)=> console.log('connected to db'))
// .catch((err)=> console.log(err));

// //register view engine
// app.set('view engine', 'ejs');

// //app.set('views','some another name for views') 


// //listen for requests
// app.listen(3000, (err)=>{
//     console.log('listening to 3000');
// });


// // app.use((req,res,next)=>{   // code is evaluated top to botttom so even if /about is request made first app.use() middleware will be used and then the rest
// //     console.log('in middleware 1');
// //     next();  /// this next function tells the code to send response ehich is requested or else broser hangs and nothin didplayed
// // });
// app.use(morgan('tiny'));

// app.use(express.static('public')); // automatically looks in public folder need not to do public/styles.css




// app.get('/add-blog', (req,res)=>{
//     const blog = new Blog ({
//         title:'new Blog 2',
//         snippet: 'about my new blog',
//         body: 'more about new blog'
//     });

//     blog.save()
//     .then(result=> res.send(result))
//     .catch(err=>console.log(err));
// })


// app.get('/all-blog', (req,res)=>{
    
//     Blog.find()
//     .then(result=> res.send(result))
//     .catch(err=>console.log(err));
// })


// app.get('/', (req,res)=>{  
//     res.redirect('/blogs');
// });
// app.get('/about', (req,res)=>{  
//     res.render('about', {title: 'About'});
// });


// app.get('/blogs',(req,res)=>{
//     Blog.find().sort({createdAt: -1})
//     .then(result=>{
//         res.render('index', {title: 'All Blogs' , blogs: result}); //send dynamic contet through {} curly braces
//     })
//     .catch(err=>console.log(err));
// });


// app.get('/blogs/create', (req,res)=>{  
//     res.render('create', {title: 'Create'});
// });

// app.use((req,res)=>{
//     res.render('404', {title: 'Error'});
// }) 


//========handling post requests==========

const express = require('express');
const morgan =  require('morgan');
const mongoose = require('mongoose');
const Blog= require('./models/blog')




//express app
const app= express();

//connect to db
const dbURI='mongodb+srv://akshad5054:Akshad@123@cluster0.8war2.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=> console.log('connected to db'))
.catch((err)=> console.log(err));

//register view engine
app.set('view engine', 'ejs');

//app.set('views','some another name for views') 


//listen for requests
app.listen(3000, (err)=>{
    console.log('listening to 3000');
});


// app.use((req,res,next)=>{   // code is evaluated top to botttom so even if /about is request made first app.use() middleware will be used and then the rest
//     console.log('in middleware 1');
//     next();  /// this next function tells the code to send response ehich is requested or else broser hangs and nothin didplayed
// });
app.use(morgan('tiny'));

app.use(express.static('public')); // automatically looks in public folder need not to do public/styles.css
app.use(express.urlencoded()); //for handling post requests



app.get('/add-blog', (req,res)=>{
    const blog = new Blog ({
        title:'new Blog 2',
        snippet: 'about my new blog',
        body: 'more about new blog'
    });

    blog.save()
    .then(result=> res.send(result))
    .catch(err=>console.log(err));
})


app.get('/all-blog', (req,res)=>{
    
    Blog.find()
    .then(result=> res.send(result))
    .catch(err=>console.log(err));
})


app.get('/', (req,res)=>{  
    res.redirect('/blogs');
});
app.get('/about', (req,res)=>{  
    res.render('about', {title: 'About'});
});


app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then(result=>{
        res.render('index', {title: 'All Blogs' , blogs: result}); //send dynamic contet through {} curly braces
    })
    .catch(err=>console.log(err));
});
app.get('/blogs/:id', (req,res)=>{
    const id= req.params.id;
    Blog.findById(id)
    .then(result=>res.render('details',{blog: result, title: "Blog details"}))
    .catch(err=>console.log(err));
})

app.delete('/blogs/:id', (req,res)=>{
    const id=req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result=> {
        res.json({redirect: '/blogs'});
    })
    .catch(err=>consol.log(err));
})
app.post('/blogs',(req,res)=>{
    //console.log(req.body);
    const blog =  new Blog(req.body);
    blog.save()
    .then(result=>res.redirect('/blogs'))
    .catch(err=>console.log(err));
})


app.get('/blogs/create', (req,res)=>{  
    res.render('create', {title: 'Create'});
});

app.use((req,res)=>{
    res.render('404', {title: 'Error'});
}) 