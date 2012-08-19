$(document).ready(function() {  // wait for the document to load

/*
 * JS object creation examples
 *
 * Check the output in Chrome's inspector, in the console tab.
 */
 
 // Example #0: pass a nameless JS object to a function
 console.log("JS Object Example #0",{field1:1,field2:2});
 
 // Example #1: explicitly express fields as strings,
 //             conforming to JavaScript Object Notation (JSON)
 // note: You have to enclose field names with spaces in quotes,
 //         even if you are not trying to conform to JSON format.
 var obj1 = {"field1":1,"field2":2};
 console.log("JS Object Example #1",obj1);
 
 // Example #2: Use the new constructor
 // note: Functions are just top-level objects
 var obj2 = new Object();
 obj2.field1 = 1;
 obj2.field2 = 2;
 console.log("JS Object Example #2",obj2);
 
 // Example #3: Create an empty object and add fields later.
var obj3 = {};
obj3.field1 = 1;
obj3["field2"] = 2;
console.log("JS Object Example #3",obj3);

// Example #4: Create object from JSON written as text with JSON.parse
// note: Code written in HTML, unless embedded in tags (i.e., <script>)
//       is interpreted as text.
var JSONString = document.getElementById("json00").innerHTML;

var obj4 = JSON.parse(JSONString);
console.log("JS Object Example #4",obj4);

// Example #5: Print out the JSON string of obj0
var obj0 = {field1:1,field2:2};
console.log("JS Object Example #5",JSON.stringify(obj0));

// Example #*: Create new type of Object with fields: field1 and field2
//              and instantiate it
function NewTypeObject(f1,f2) {
    this.field1 = f1;
    this.field2 = f2;
}
// ...which is equivalent to
/*function NewTypeObject(f1,f2) {
    field1:f1,
    field2:f2
}*/
var objS = new NewTypeObject(1,2);
console.log("JS Object Example #*",objS);


/*
 * Object field access examples
 */

// Example #0: Print out all fields in an object to the console
// not you cannot do this with the traditional for
// loop because objects are not arrays, although
// they seem simlar to associative arrays
console.log("JS Field Access Example #0");
for(var field in objS) console.log(field,objS[field]);

// Example #1: Print fields you know are in the object.
console.log("JS Field Access Example #1");
console.log("field1",objS.field1);
console.log("field1",objS.field2);

// Example #2: Access fields in a different way and do the same as in #1
console.log("JS Field Access Example #2");
console.log("field1",objS["field1"]);
console.log("field1",objS["field2"]);

// Example #3: Check if field exists in an object
// note: 'undefined' is not a JS keyword, it just has not yet been defined.
console.log("JS Field Access Example #3", objS["field3"] !== undefined);

});