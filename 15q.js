var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  dbo.collection("studentmarks").find({$or:[{name:"Kala"},{name:"Aruli"} ]} ,
                { projection:{name:true,_id:false,maths_marks:true,
                  science_marks:true}}).toArray(function(err, result){
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
