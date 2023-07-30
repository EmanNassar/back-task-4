const express = require("express")

const app =express()

const port = process.env.PORT || 3000

const path = require("path")
const publicDirect = path.join(__dirname,"../public")
app.use(express.static(publicDirect)) 

/////////////////////////////////////////////////////////

app.set("view engine", "hbs")

const viewsDirect = path.join(__dirname,"../temp1/views")
app.set("views",viewsDirect)

app.get('/',(req,res)=>{
    res.render('index',{
        title:"Home",
        desc:"'Welcome Back'"
    })
})

app.get("/checkWeather",(req,res)=>{
    res.render("check weather",{
        title:"Check Weather",
        country:"Egypt",
        latitude:26.4941838299718,
        longitude:29.871903452398,
        currentWeather:"Sunny",
        temp:"38.4°C"
    })
})

const hbs = require("hbs")
const partialsDirectorty = path.join(__dirname,"../temp1/partials")
hbs.registerPartials(partialsDirectorty)

app.listen(port,()=>{
    console.log(`on port ${port}`)
})