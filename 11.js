var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var myquery = {name:"Raam"};
    var newvalues = {$unset:{science_marks:88}};
  dbo.collection("studentmarks").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 field delete");
    db.close();
  });
});
