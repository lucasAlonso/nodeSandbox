const fs = require('fs');
const moment = require('moment');
const coolImages = require('cool-images');

arrayImages = coolImages.many(600, 800, 5);

let timeStamp = moment().format('YY MM DD, hh:mm:ss ') + '\n'
fs.appendFileSync('log.txt', timeStamp, function(err) {
    if (err) throw err;
   
});

for (let index = 0; index < arrayImages.length; index++) {  
        fs.appendFileSync('log.txt', arrayImages[index]+ '\n' )
          
    
}

