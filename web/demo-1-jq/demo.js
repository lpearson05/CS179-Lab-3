jQuery(function($) {    // wait until DOM loads

// grab reference to sandbox (beneath code box)
var sandBox = $("#demo-sandbox");

/*
 * selector examples
 */
function toggleParagraphHighlight() {
    $("p").toggleClass("highlight");
}
function toggleDivParagraphHighlight() {
    $("div p").toggleClass("highlight");
}
function toggleFirstParagraphHighlight() {
    $("p:first").toggleClass("highlight");
}

/*
 * DOM Manimpulation examples
 */
function addAnotherParagraph() {
    var p = $("<p>another paragraph</p>");
    $(document.body).append(p);
}
function addAnotherParagraphToDiv() {
    var p = $("<p></p>").text("another div paragraph");
    $("div").append(p);
}

/*
 * Event handling
 */
function addParagraphWithHighlightOnClick() {
    var p = $("<p>click me to toggle highlight class</p>");
    sandBox.append(p);
    p.click(function() {
        $(this).toggleClass('highlight');
    });
}
function makeAllNewParagraphsHighlightOnClick() {
    sandBox.bind('p','click',function() {
        $(this).toggleClass('highlight');
    });
}

/*
 * Ajax
 */
 function doPointlessAjaxCall() {
    $.ajax({
        url: "test.php",                            // target url
        type: "post",                               // data send method (i.e., post or get)
        data: {test_string:"do nothing"},           // data target takes (format is targetVarName:value)
                                                    // ex: for a PHP file expecting "url" send {url:"someURL"}
        success: function(data) { alert(data); },   // callback function to run in case of success
        dataType: 'text'                            // tells browser how to process data
                                                    // other options are 'json', 'jsonp', 'html', 'xml', 'script'
                                                    // JSON will automaticlaly be converted into a JS object
    });
 }

});