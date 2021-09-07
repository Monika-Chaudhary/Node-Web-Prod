const express=require('express')
const app=express()
const path=require('path')
const port=3000
var ehb=require('express-handlebars')

app.engine('handlebars',ehb())
app.set('view engine','handlebars')

app.use(express.static(path.join(__dirname,"static")))

app.use('/',require(path.join(__dirname,'routes/blog')))

app.listen(port,()=>{
    console.log('running...')
})