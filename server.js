const express = require('express');
const app = express();
const { exec } = require("child_process");
const port = "3000";

app.get('/', function (req, res) {
    res.json({
        "msg": "running"
    })
})

app.get('/stream', function (req, res) {
    exec("node ./streamAndBuffers/read.js", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    res.end();
})

const server = app.listen(port, function () {
   const host = "localhost";
   
   console.log(`Listening at http://${host}:${port}`);
})