
const express =  require('express');
const bodyParser = require('body-parser');
const fileUpload =  require('express-fileupload');
const cors = require('cors');

// Constant
const port = process.env.PORT || 4000;

// Instance
const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({defer: true}));
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static('public'));

// Endpoints
app.get('/', (req,res) => {
    res.send('We are on home page');
});
app.post('/upload', (req , res) => {

    if(req.files == null){
        return res.status(400).json({message: 'No file uploaded'})
    }

    const file = req.files.file;
    file.mv(`${__dirname}/public/uploads/${file.name}`, err => {
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({fileName:file.name, filePath:`/uploads/${file.name}`});
    });
});


// Server listen
app.listen(port , () => console.log(`Server running on ${port}`))