/**
 * displayTweets displays tweets in the given array in the list view #tweet-list
 */
function displayTweets(tweets) {

    // select the tweet list
    var list = $("#tweet-list");

}

/**
 * buildTweet processes a tweet object and returns a corresponding LI
 */
function buildTweet(tweetObject) {
    
    // create an empty list item
    var li = $("<li data-theme='c'>");
    
    // see http://jquerymobile.com/test/docs/lists/docs-lists.html
    
    // return the newly constructed list item
    return li;
    
}

/**
 * saveQuery stores user's queries in '#recent' on '#page_1'
 * When the stored items are clicked, it resubmits 'form#query-form'
 * after changing the value of it's input 'input#query-input' to
 * the saved query string.
 */
function saveQuery(query_string, doStoreQuery) {

    // get a reference to ul#recent
    var recent = $('ul#recent');
    
    // store size of recent
    var size = recent.children().size();
        
    // if list is too long, remove the last item
    if(size > 4) {
        recent.children(":last").remove();
        if(!(doStoreQuery == false))
            deleteOldestQueryFromStorage();
    }
    
    // store the query by default
    if(!(doStoreQuery == false))
        storeQuery(query_string);
    
}

/**
 * storeQuery stores puts the query string in client-side storage
 */
function storeQuery(query_string) {

    // check to see if the browser has local storage
    if(sessionStorage != undefined) {
    
        var key = "demo3-queries";
        
    } else {
        console.log("Session storage is not available.");
    }
    
}

/**
 * deleteOldestQueryFromStorage
 */
function deleteOldestQueryFromStorage() {

    // check to see if the browser has local storage
    if(sessionStorage != undefined) {
    
        var key = "demo3-queries";
        
    } else {
        console.log("Session storage is not available.");
    }
    
}

/**
 * restoreQueries restores queries from client-side storage
 * to the recent list, by calling storeQuery.
 */
function restoreQueries() {

    // check to see if the browser has local storage
    if(sessionStorage != undefined) {
    
        var key = "demo3-queries";
        
    } else {
        console.log("Session storage is not available.");
    }
    
}