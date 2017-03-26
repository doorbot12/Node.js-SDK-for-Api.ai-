/*!
 * apiai
 * Copyright(c) 2015 http://api.ai/
 * Apache 2.0 Licensed
 */

'use strict';

// var apiai = require("../module/apiai");
var apiai = require("apiai");

var app = apiai("wnSEoGyt8FGC6wpwEs5Mnb3xqeuKLWbtr1tNtEEiyTjf0cm/rIrjAff3JzZkMDY8Di87XAMMZlbGKHym/DvJxBMbTgfMx6Kvg9itSXDrmMhz4J1VUu5nA5y3xB4n1IcRHf4F3OLqe21tMeRuLs167QdB04t89/1O/w1cDnyilFU=");

var sessionId = "Some unique sessionId";

var user_entities = [{
    name: 'Application',
    extend: false,
    entries: [
        {
            value: 'Firefox',
            synonyms: ['Firefox']
        },
        {
            value: 'XCode',
            synonyms: ['XCode']
        },
        {
            value: 'Sublime Text',
            synonyms: ['Sublime Text']
        }
    ]
}];

var user_entities_body = {
    sessionId: sessionId,
    entities: user_entities
};

var user_entities_request = app.userEntitiesRequest(user_entities_body);

user_entities_request.on('response', function(response) {
    console.log('User entities response: ');
    console.log(JSON.stringify(response, null, 4));

    var request = app.textRequest('open XCode', {sessionId: sessionId});

    request.on('response', function(response) {
        console.log('Query response: ');
        console.log(JSON.stringify(response, null, 4));
    });

    request.on('error', function(error) {
        console.log(error);
    });

    request.end();
});

user_entities_request.on('error', function(error) {
    console.log(error);
});

user_entities_request.end();
