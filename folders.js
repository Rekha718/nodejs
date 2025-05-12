const fs = require('fs');
function folders_creating(){
    fs.mkdir("tutorial", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Directory created successfully");
    }

  })
}

function folders_deleting(){
    fs.rmdir("tutorial", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Directory deleted successfully");
        }
    })
}

module.exports.folders_creating = folders_creating;
module.exports.folders_deleting = folders_deleting;