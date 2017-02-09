var person = require('./modle/index');

module.exports = function(app){
  app.get('/all',function(req,res){
    person.find(function(err,people){
      if (err) {return console.log(err)}
      res.json({people})
    })
  });

  app.delete('/del/:id',function(req,res){
    var _id = req.params._id;
    person.findByIdAndRemove(_id,function(err){
      if (err) {return console.log(err)};
      res.json({status:'success'})
    })
  });

  app.post('/new',function(req,res){
    var person = new person(req.body);
    person.save(function(err,person){
      if (err) {return console.log(err)};
      res.json({person})
    }
  });

  app.put('/edit/:_id',function(req,res){
    var _id = req.params._id;
    person.findByIdAndUpdate(_id,req.body, function(err,people){
      if (err) {return console.log(err)}
      //返回未更新的文档
      res.json({person})
    })
  });

}
