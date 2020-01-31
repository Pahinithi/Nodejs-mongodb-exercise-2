var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  dbo.collection("studentmarks").find({$and:[{maths_marks:{$lt:40}},
                {science_marks:{$lt:40}} ]} ,
                { projection:{name:true,_id:false}}).toArray(function(err, result){
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
