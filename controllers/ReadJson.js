const fs = require('fs');

ReadJson = (file) =>{
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if(err){
                reject(err);
            }else{
                resolve(JSON.parse(data));
            }
        });
    });

}

module.exports = ReadJson;