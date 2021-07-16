const express = require('express');
const bodyParser = require('body-parser'); //to process request body
const service = require('./service');
const server = express();
server.use(bodyParser.json());

server.get('/form', function(req, res) {  //   http://localhost:3001/form +post
res.sendFile(__dirname + '/ajaxpost.html');
  });
server.post('/postdata', function (request, response) { ////becoz req and res is an argument dynamic value
    console.log(request.body);
    response.send(new Date());
})
server.listen(3001, function () {
    console.log('server started');
});