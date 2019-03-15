const port = 3000;
const ip = "localhost";
var app = require('./config/server')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.listen(port, ip);
console.log('Server running at http://' +ip+ ":" +port+ "/");
