var mysql = require('mysql');

console.log('Get conected');
var conn = mysql.createConnection({
    host: "localhost",
    database:'server_valuty',
    user:'valuta',
    password:'102938'
})

conn.connect(function(err){
if (err) throw err;
console.log('Connected')
});
let query = 'SELECT * from user';

conn.query(query, (err, result) => {
    console.log(err);
    console.log(result);
});

conn.end(function(err) {
    if (err) throw err;
    console.log('Close')
});

