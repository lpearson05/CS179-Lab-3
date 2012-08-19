/*
 * IGNORE!! Calls your function and passes object from JSON to it
 */
$(document).ready(function(){

    $.getJSON('JSObjects.json',function(data){
        parseAndDisplayJS();            // call JS function
        parseAndDisplayJSON(data);     // call JSON function
        if($("div.object").length < 7) {       // quick check
        
            $("#exercise-sandbox").prepend(
                $("<h3 style='color:yellow;'>Something's missing...</h3>")
            );
            
        } else if ($("div").length == 1) {
        
            $("#instructions").toggle();
        
        }
    });

});

function displayObject(prop1Val, prop2Val) {

    $("#exercise-sandbox").append(                // append to the main content area
        $("<div>").append(                  // a new div, and to it append
            $("<h4>").text("Title "+prop1Val), // a header containing the value of the first property
            $("<p>").text(prop2Val)            // a paragraph containing the value of the second property
        ).addClass("object")
    );

}