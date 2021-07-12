const express = require('express'); //import express
const server= express();// initialiase

server.get('/', function(request,response){

    console.log(request,response);
    response.send('Hello World');

});
server.listen(4000,function(){
    console.log('server started .........');
})