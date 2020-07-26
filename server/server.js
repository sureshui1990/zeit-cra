
const express =  require('express');
const bodyParser = require('body-parser');
const fileUpload =  require('express-fileupload');

// Constant
const port = process.env.PORT || 4000;

// Instance
const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(fileUpload());

// Endpoints
app.get('/', (req,res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Landing route');
});

app.post('/upload', (req,res) => {
    console.log('req',req.body);
    if(req.files == null){
        return res.status(400).json({message: 'No file uploaded', name:'ben10'})
    }
    return res.status(200).write('test');
});


// Server listen
app.listen(port , () => console.log(`Server running on ${port}`))