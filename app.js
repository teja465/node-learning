const http=require("http")

const server=http.createServer(function(req,resp){
    if(req.url==="/"){
        resp.write(JSON.stringify([1,2,3,4,5,"home"]))
        resp.end()
    }
    console.log("current url is ",req.url)
    if(req.url==="/courses"){
        resp.write(JSON.stringify([1,2,3,4,5,"courses"]))

        resp.end()
        return

    }

    console.log("here at end of switches")

})







server.listen(3000);

console.log("listening at port 3000")
