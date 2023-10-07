const express = require('express')
const app = express();
const port = 3030

app.get("/", (req,res)=>{
    res.send("Hola Mundo")
} )

app.get("/vista",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/vista2",(req,res)=>{
    res.sendFile(__dirname+"/vista2.html")
})

app.use(express.static(__dirname))

app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`))
