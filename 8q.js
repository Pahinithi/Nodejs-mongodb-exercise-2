var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  dbo.collection("studentmarks").find({$and:[{maths_marks:{$gt:50}},
                {science_marks:{$gt:50}},{english_marks:{$gt:50}} ]} ,
                { projection:{name:true,_id:false}}).toArray(function(err, result){
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
