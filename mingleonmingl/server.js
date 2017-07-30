var bodyParser = require('body-parse');
var msql = require('mysql');
var http = require('http').Server(app);

app.use(require("express").static('data'));
app.use(bodyParser.urllencoded({
  extended: true
}));
app.use(bodyParser.json());

// creating mysql connection
var con = mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'test'
})

app.get("/", function(req, res) {
  res.sendFile(_dirname + '/index.html');
});

app.post('/get_data', function (req, res) {
  var key=req.body.name;
  con.getConnection(function(err,connection) {
    if(err) {
      connection.release();
    }else {
      var query="select * from user where name like '%"+key+"%'";
      con.query(String(query),function(err,rows){
        connection.release();
        if(!err) {
          if(rows.length > 0){
              res.write(JSON.stringify(rows));
              res.end();
          }else{
              rows=[];
              res.write(JSON.stringify(rows));
              res.end();
          }
        } else {
          console.log("Query failed");
        }
      });
    }
  });
});

http.listen(8080,function(){
    console.log("Listening on http://127.0.0.1:8080/");
});
