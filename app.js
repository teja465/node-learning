const express=require("express")
const app=express()
app.get("/",(req,resp)=>{
    console.log("here")
    resp.send("Hello world 7,pm2")
})
app.get("/api/courses",(req,resp)=>{
    resp.send(JSON.stringify(['dbms,operating systems,networking,python',2]))
})
app.get("/api/courses/:id",(req,resp)=>{
    resp.send(JSON.stringify(req.params))
})
const portNo=process.env.PORT ||3000
//"./node_modules/.bin/nodemon" ,pm2 start app.js --watch
app.listen(portNo,()=>{
    console.log(`listening on port ${portNo} nodemon   `)
})