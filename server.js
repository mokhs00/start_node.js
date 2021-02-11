const express = require('express');
const app = express();

const server = app.listen(3000, () =>{
    console.log('Start Server : localhost:3000');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)


app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/about', function (req, res) {
    res.send('about page');    
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'test'
});



app.get('/db', function (req, res) {

    // connection.connect();

    connection.query('SELECT * from test', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
    });
    
    // connection.end();
    
});

