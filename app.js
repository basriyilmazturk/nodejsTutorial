// var http=require('http')
// var server=http.createServer((function(request,response)
// {
//     response.writeHead(200,
//         {"Content-Type" : "text/plain"});
//     response.end("Hello World\n");
// }));
// server.listen(3000);

var express=require('express');
var app=express();
app.get('/',function(req,res)
{
    res.send('Hello World!');
});

app.route('/Node').get(function(req,res)
{
    res.send("Tutorial on Node");
});
app.route('/Angular').get(function(req,res)
{
    res.send("Tutorial on Angular");
});
app.get('/',function(req,res){
    res.send('Welcome to Guru99 Tutorials');
});

var server=app.listen(3000,function() {});