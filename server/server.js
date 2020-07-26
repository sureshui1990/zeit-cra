
const express =  require('express');
const bodyParser = require('body-parser');

// Constant
const port = process.env.PORT || 4000;

// Instance
const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Endpoints
app.get('/', (req,res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Landing route');
});

// Server listen
app.listen(port , () => console.log(`Server running on ${port}`))