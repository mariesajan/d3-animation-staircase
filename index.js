const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', function(res, req, next){
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(){
  console.log('Server is listening to port 3000');
});
