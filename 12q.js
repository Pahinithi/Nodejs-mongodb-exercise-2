var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var myobj = {name:"John",maths_marks:87,english_marks:23};
  dbo.collection("studentmarks").insertOne(myobj,{upsert:false}, function(err, res) {
    if (err) throw err;
    console.log("1 document upsrted");
    db.close();
  });
});
