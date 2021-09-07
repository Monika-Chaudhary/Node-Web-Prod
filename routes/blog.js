const express=require('express')
const path=require('path')
const router=express.Router()
const blogs=require('../data/blogs')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})

router.get('/blog',(req,res)=>{
    blogs.forEach(e => {
        console.log(e.title)
    });
    res.sendFile(path.join(__dirname,'../templates/blogHome.html'))
})

router.get('/blogPost/:slug',(req,res)=>{
    console.log(req.params.slug)
    myBlog=blogs.filter((e)=>{
        return e.slug==req.params.slug
    })
    console.log(myBlog)
    res.sendFile(path.join(__dirname,'../templates/blogPage.html'))
})

router.get('/welcome',(req,res)=>{
    res.render('home')
})

router.get('/blogHpage',(req,res)=>{
    res.render('blogHome',{
        blogs: blogs
    });
})

router.get('/blogLink/:slug',(req,res)=>{
    console.log(req.params.slug)
    myBlog=blogs.filter((e)=>{
        return e.slug==req.params.slug
    })
    console.log(myBlog)
    res.render('blogPage',{
        title: myBlog[0].title,
        content: myBlog[0].content
    });
})

module.exports=router