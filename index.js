const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/db')
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const fs = require('fs');


// Аппын тохиргоог process.env рүү ачаалах
dotenv.config({path: './config/config.env'});

const app = express();
app.use(fileUpload({
    createParentPath: true,
    // limits: { 
    //     fileSize: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
    // },
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes"));
app.use("/uploads", express.static('uploads'));

//audio file g awah

const server = http.createServer(function(req, res){
    let wav = __dirname + "/uploads/prince2.wav";

    fs.access(wav, fs.constants.F_OK, err => {
        console.log(`${wav} ${err ? "does not exist": "exists"}`);
    });
    fs.readFile(wav, function(err, content){
        if(err){
            res.writeHead(404, {"Content-type" : "multipart/form-data"});
            res.end(content);
        }
    });
});

connectDB();


app.listen(process.env.PORT, console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа...`))
server.listen(8080, function() {
    console.log('Server running on port 1234')
})