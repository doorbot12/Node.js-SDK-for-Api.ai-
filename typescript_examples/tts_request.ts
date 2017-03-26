/// <reference path="./../index.d.ts" />
/// <reference types="node" />

"use strict";

import * as apiai from "../";
import * as fs from "fs";

const app = apiai("wnSEoGyt8FGC6wpwEs5Mnb3xqeuKLWbtr1tNtEEiyTjf0cm/rIrjAff3JzZkMDY8Di87XAMMZlbGKHym/DvJxBMbTgfMx6Kvg9itSXDrmMhz4J1VUu5nA5y3xB4n1IcRHf4F3OLqe21tMeRuLs167QdB04t89/1O/w1cDnyilFU=");

let file = fs.createWriteStream("hello-world-tts.wav");

file.on("finish", function() {
    console.log("wav file ready");
});

file.on("error", function(err) {
    console.log(err);
});

let request = app.ttsRequest("Hello world", {writeStream: file});

request.end();
