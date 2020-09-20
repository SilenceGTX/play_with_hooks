var express = require('express');
var cors = require('cors');

var app = express();

var corsOptions = {
  credentials:true,
  origin:'http://localhost:3000',
  optionsSuccessStatus:200
};
app.use(cors(corsOptions));

app.use(express.urlencoded({extended: true})); // 必须要加
app.use(express.json()); // 必须要加

app.post('/', function (req, res) {
  let p = req.body.name
  res.send(`${p}很有精神`)
});

app.listen(5000, function() {
  console.log('App listening on port 5000...')
});