
const express =  require('express');
const fileUpload =  require('express-fileupload');

// Constant
const port = process.env.port || 4000;

// Instance

const app = express();


// Endpoints

app.get('/', (req,res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Landing route');
});


// Server listen
app.listen(port , () => console.log(`Server running on ${port}`))