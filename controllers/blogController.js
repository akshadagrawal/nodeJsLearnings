const Blog= require('../models/blog');

const blog_index = (req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then(result=>{
        res.render('index', {title: 'All Blogs' , blogs: result}); //send dynamic contet through {} curly braces
    })
    .catch(err=>console.log(err));
}
const blog_details= (req,res)=>{
    const id= req.params.id;
    Blog.findById(id)
    .then(result=>res.render('details',{blog: result, title: "Blog details"}))
    .catch(err=>res.render('404',{title: 'Blog not found'}));
}

const blog_create_get =  (req,res)=>{  
    res.render('create', {title: 'Create'});
}
const blog_create_post =(req,res)=>{
    //console.log(req.body);
    const blog =  new Blog(req.body);
    blog.save()
    .then(result=>res.redirect('/blogs'))
    .catch(err=>console.log(err));
}

const blog_delete=  (req,res)=>{
    const id=req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result=> {
        res.json({redirect: '/blogs'});
    })
    .catch(err=>res.render('404',{title: 'Blog not found'}));
}

module.exports= {
    blog_index,
    blog_details,
    blog_create_post,
    blog_create_get,
    blog_delete
}