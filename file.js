const fs = require('fs');
const data = "This is a demo file created"

function writing() {
    fs.writeFile("demo.txt", data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File written successfully");
        }
    });
}

function reading(){
    fs.readFile('demo.txt',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data.toString());
        }
    })
}

function renaming(){
    fs.rename("demo.txt","demo1.txt",(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File renamed successfully");
        }
    })
}
function appending(){
    fs.appendFile("demo1.txt", "This is appended data", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File appended successfully");
        }
    });
}

function deleting(){
    fs.unlink("demo1.txt",(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File deleted successfully");
        }
    })
}
module.exports.writing = writing;  
module.exports.reading = reading;
module.exports.renaming = renaming;
module.exports.appending = appending;
module.exports.deleting = deleting;



