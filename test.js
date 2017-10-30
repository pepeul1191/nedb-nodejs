var Datastore = require('nedb');  
var users = new Datastore({ filename: 'db/users.db', autoload: true });  

var scott = {  
    name: 'Pepe',
    twitter: '@pepeul1191'
};

users.insert(scott, function(err, doc) {  
    console.log('Inserted', doc.name, 'with ID', doc._id);
});

users.findOne({ twitter: '@ScottWRobinson' }, function(err, doc) { 
    console.log(doc);
    console.log('Found user:', doc.name);
});