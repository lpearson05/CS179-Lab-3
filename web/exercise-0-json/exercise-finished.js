/**
 * objectsFromJS is an array of JS objects
 */
objectsFromJS = [
        {
            h4:"JS object",
            p: "I was created in a JavaScript file."
        },
        {
            h4:"JS object",
            p: "I was created in a JavaScript file."
        }
    ];


/**
 * parseAndDisplayJSON parses JSON found in JSObjects.json and displays them
 * The argument 'objectsFromJSON' is corresponding parsed JS object.
 */
function parseAndDisplayJSON(objectsFromJSON) {

    // iterate over objectsFromJSON
    for(var i = 0, len = objectsFromJSON.length; i < len; i++) {
        // pass both fields of the object to displayObject
        displayObject(
            objectsFromJSON[i].title,
            objectsFromJSON[i].description
        );
        // check to see if the object contains children
        if(objectsFromJSON[i]['children'] != undefined) {
            // call this function on the array of children
            parseAndDisplayJSON(objectsFromJSON[i]['children']);
        }
    }

}


/**
 * parseAndDisplayJS iterates over objectsFromJS and displays each object
 * The 'objectsFromJS' is declared near the top of this file.
 */
function parseAndDisplayJS() {

    // iterate over objectsFromJS
    for(var i in objectsFromJS) {
        // pass both fields of the object to displayObject
        displayObject(objectsFromJS[i].h4, objectsFromJS[i]["p"]);
    }

}