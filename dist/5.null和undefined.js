"use strict";
var x = undefined;
var y = null;
function doSth(x) {
    if (x === null) {
        // ...
    }
    else {
        console.log(x.toUpperCase());
    }
}
