var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var myquery = {};
  var newvalues = { $set: {average:{}} };
  dbo.collection("studentmarks").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 field updated");
    db.close();
  });
});
