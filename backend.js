
const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
const url =
  "mongodb+srv://ayushayush:Ayushmom123@cluster0.uvf7jom.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });


  
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("NxtGen");
    dbo.createCollection("Admin", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });

  
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("NxtGen");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

  

run().catch(console.dir);
