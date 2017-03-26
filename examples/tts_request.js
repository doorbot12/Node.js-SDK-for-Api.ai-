/* tts_request example */

'use strict';

// var apiai = require("../module/apiai");
var fs = require("fs");
var apiai = require("apiai");

var app = apiai("wnSEoGyt8FGC6wpwEs5Mnb3xqeuKLWbtr1tNtEEiyTjf0cm/rIrjAff3JzZkMDY8Di87XAMMZlbGKHym/DvJxBMbTgfMx6Kvg9itSXDrmMhz4J1VUu5nA5y3xB4n1IcRHf4F3OLqe21tMeRuLs167QdB04t89/1O/w1cDnyilFU=");


var file = fs.createWriteStream('hello-world-tts.wav');

file.on('finish',function() {
    console.log('wav file ready');
});

file.on('error', function(err) {
    console.log(err);
});

var tts_request_options = {
    language: 'en-US',
    writeStream: file
};

var tts_request = app.ttsRequest('Hello world!', tts_request_options);

tts_request.end();
