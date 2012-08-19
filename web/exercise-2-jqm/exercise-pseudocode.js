/**
 * displayTweets displays tweets in the given array in the list view #tweet-list
 */
function displayTweets(tweets) {

    // select the tweet list
    var list = $("#tweet-list");

    // iterate over tweets
    // check the order in which you should print them
    // by examining the tweet objects in the console or
    // debugging with console.log
        
        // add the tweet to the top of the list
        
        // remove the oldest tweet if the list is longer than SOME_SIZE size
    
    // update the list view to have jQM transform the
    // new list items
    list.listview('refresh');

}

/**
 * buildTweet processes a tweet object and returns a corresponding LI
 */
function buildTweet(tweetObject) {
    
    // create an empty list item
    var li = $("<li data-theme='c'>");
    
    // see http://jquerymobile.com/test/docs/lists/docs-lists.html
    
    // create an anchor with href '#'
    
    // add text (and other things) to it
    
    // add the anchor to the list item
    
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
    
    // create a list item to prepend to it
    
        // give the list item class "ui-btn" to make it appear clickable
        // set its text to 'query_string'
        // bind to its 'click' event the form submission
        
            // grab a reference to 'form#query-form'
            // change the value of 'input#query-input' to 'query_string'
            // submit the form

    // prepend the new item to recent
        
    // if list is too long, remove the last item
    if(size > 4) {
        recent.children(":last").remove();
        if(!(doStoreQuery == false))
            deleteOldestQueryFromStorage();
    }
    
     // refresh the list to apply jQM transformations
    
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
        var queries;
    
        // unserialize (parse) queries array, if it exists
        
            // get the array
            
            // push the new value onto it
            
        } else {    // define a new array with 'query_string'
        
        }
    
        // reencode and store the array of query strings
        
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
    
        // unserialize queries array, if it exists
        
            // get stored queries array
            
            // remove the last item
            
            // store the array again
            
        }
        
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
    
        // unserialize queries array, if it exists
        if(sessionStorage[key] != undefined) {
        
            // unserialize the array
            
            
            // iterrate over queries and re-save them
            // without re-storing them (use saveQuery)
            
        }
        
    } else {
        console.log("Session storage is not available.");
    }
    
}