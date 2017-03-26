/// <reference path="./../index.d.ts" />

"use strict";

import * as apiai from "../";

const app = apiai("wnSEoGyt8FGC6wpwEs5Mnb3xqeuKLWbtr1tNtEEiyTjf0cm/rIrjAff3JzZkMDY8Di87XAMMZlbGKHym/DvJxBMbTgfMx6Kvg9itSXDrmMhz4J1VUu5nA5y3xB4n1IcRHf4F3OLqe21tMeRuLs167QdB04t89/1O/w1cDnyilFU=");

let request = app.textRequest("Hello", {sessionId: " 	1503638187"});

request.on("response", function (response) {
    console.log("response: " + JSON.stringify(response, null, "  "));
});

request.on("error", function(error) {
    console.log("error: " + error);
});

request.end();
