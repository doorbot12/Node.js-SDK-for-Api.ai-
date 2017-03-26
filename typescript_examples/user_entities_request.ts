/// <reference path="./../index.d.ts" />

"use strict";

import * as apiai from "../";

const app = apiai("wnSEoGyt8FGC6wpwEs5Mnb3xqeuKLWbtr1tNtEEiyTjf0cm/rIrjAff3JzZkMDY8Di87XAMMZlbGKHym/DvJxBMbTgfMx6Kvg9itSXDrmMhz4J1VUu5nA5y3xB4n1IcRHf4F3OLqe21tMeRuLs167QdB04t89/1O/w1cDnyilFU=");

const sessionId = " 	1503638187";

let user_entities_request = app.userEntitiesRequest({
    sessionId: sessionId,
    entities: [
        {
            name: "Application",
            extend: false,
            entries: [
                {
                    value: "Firefox",
                    synonyms: ["Firefox", "fox"]
                },
                {
                    value: "XCode",
                    synonyms: ["XCode", "xcode"]
                }
            ]
        }
    ]
});

user_entities_request.on("response", function (response) {
    let text_request = app.textRequest("Open XCode", {sessionId: sessionId});

    text_request.on("response", function (response) {
        console.log("response: " + JSON.stringify(response, null, "  "));
    });

    text_request.on("error", function (error) {
        console.log("error: " + JSON.stringify(error, null, "  "));
    });

    text_request.end();
});

user_entities_request.on("error", function(error) {
    console.log("error: " + JSON.stringify(error, null, "  "));
});

user_entities_request.end();
