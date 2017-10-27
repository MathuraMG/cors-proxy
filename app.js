const express = require('express'); // Web Framework
const app = express();
const request = require('request');
var cors = require('cors');
app.use(cors());

var server = app.listen(process.env.PORT || 8081, function() {
  var host = server.address().address
  var port = server.address().port

  console.log("app listening at http://%s:%s", host, port)
});

app.get("/", function(req, res) {
  url = req.query.url;
  request(url, function(error, response, body) {
    res.json(JSON.parse(body));
  });
})
