/*!
 * apiai
 * Copyright(c) 2017 http://api.ai/
 * Apache 2.0 Licensed
 */

'use strict';

var apiai = require("apiai");

var app = apiai("wnSEoGyt8FGC6wpwEs5Mnb3xqeuKLWbtr1tNtEEiyTjf0cm/rIrjAff3JzZkMDY8Di87XAMMZlbGKHym/DvJxBMbTgfMx6Kvg9itSXDrmMhz4J1VUu5nA5y3xB4n1IcRHf4F3OLqe21tMeRuLs167QdB04t89/1O/w1cDnyilFU=");

var options = {
    sessionId: ' 	1503638187'
};

var request = app.deleteContextsRequest(options);

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();