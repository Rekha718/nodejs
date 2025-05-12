// const file_operations = require('./file'); 
// const folders = require('./folders');
// // file_operations.writing();  
// // file_operations.reading();
// // file_operations.renaming();
// // file_operations.appending();
// //file_operations.deleting();

// folders.folders_creating();
// folders.folders_deleting();

// const fs = require('fs');
// const rs = fs.createReadStream('demo.txt');
// const ws = fs.createWriteStream('output.txt');

// rs.on('data', function(chunk) {
//     ws.write(chunk);
// });

// rs.pipe(ws);


/* =================Compressiong and writing
const fs = require('fs');
const zlib = require('zlib');

const rs = fs.createReadStream('input.txt');
const zip = zlib.createGzip();
const ws = fs.createWriteStream('input.txt.gz');

rs.pipe(zip).pipe(ws); // chaining: read -> compress -> write
/*
/*========================Decompression======================*/
const fs = require('fs');
const zlib = require('zlib');

const rs = fs.createReadStream('input.txt.gz');
const unzip = zlib.createGunzip();
const ws = fs.createWriteStream('input1.txt');

rs.pipe(unzip).pipe(ws);


