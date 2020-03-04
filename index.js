const fs = require('fs');
const moment = require('moment');
const coolImages = require('cool-images');
const asciify = require('asciify-image');
arrayImages = coolImages.many(600, 800, 10);
let options = {
        fit: 'box',
        width: 200,
        height: 100
    }
    /* asciify(arrayImages[0], options).then(function(asciified) {
        // Print asciified image to console
        console.log(asciified);
    }).catch(function(err) {
        // Print error to console
        console.error(err);
    }); */
let timeStamp = moment().format('YY MM DD, hh:mm:ss ') + '\n'
fs.appendFileSync('log.txt', timeStamp, function(err) {
    if (err) throw err;
    console.log('Saved!');
});
arrayImages.forEach(element => {
    asciify(element, options).then(function(asciified) {
        fs.appendFileSync('log.txt', element + '\n' + asciified, function(err) {
            if (err) throw err;
            console.log('Saved!');
        });
        // fs.writeFileSync('log.txt', element);
    });
})