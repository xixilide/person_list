var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var babyparser = require('./routes');

app.use(cors());
app.use(babyparser.json());
mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost:27017/babel')

var db = mongoose.connection;
db.on('error', function(err){
  console.log(err);
});
db.once('open',function(){
  console.log('connect success');
});

routes(app);

app.listen(8000,function(){
  console.log('listen at port 8000');
})
