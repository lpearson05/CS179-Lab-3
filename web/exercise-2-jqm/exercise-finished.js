/**
 * displayTweets displays tweets in the given array in the list view #tweet-list
 */
function displayTweets(tweets) {

    // select the tweet list
    var list = $("#tweet-list");
    
    // keep the size for later
    var tweet_list_size = list.children().length + tweets.length;
    var target_size = 15;

    // iterate over tweets in reverse so that
    // the most recent tweet is added last
    for(var i = tweets.length - 1; i >= 0; i--) {
        
        // add the tweet to the top of the list view
        var li = list.prepend(buildTweet(tweets[i]).hide().fadeIn(1000));
        
        // phase out old items to keep list around size 'target_size'
        if(tweet_list_size > target_size) {
            list.children(":not('.fading'):last").addClass('fading').fadeOut(1000, function() {
                $(this).remove();
            });
            tweet_list_size--;
        }
        
    }
    
    // update the list view to have the changes reflected to the viewer
    list.listview('refresh');

}

/**
 * buildTweet processes a tweet object and returns a corresponding LI
 */
function buildTweet(tweetObject) {
    
    // create an empty list item
    var li = $("<li data-theme='c'>");
    
    // see http://jquerymobile.com/test/docs/lists/docs-lists.html
    
    // add text (and other things) to it
    // **challenge** do regex replace on tweet to make enhancements
    var query_string = $('input#query-input').val();
    var challenge = tweetObject.text
        .replace(/(#[\w\d]+)/gi,"<span style='color:#cc3838;'>$1</span>")
        .replace(new RegExp("("+query_string+")","gi"),"<span style='color:#222277;'>$1</span>")
        .replace(/(@[\w\d]+)/gi,"<span style='color:#164e8a;'>$1</span>")
        .replace(/(https?:\/\/[\S]+)([\.\?\s])?/gi,"<span style='color:#008767;'>$1</span>$2");
    
    // add the anchor to the list item
    li.append(challenge);
    
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

    // prepend the new item to recent
    recent.prepend(
    
        // create a new <li> with class 'ui-btn'
        $('<li data-icon="arrow-r" data-iconpos="right" class="ui-btn" data-theme="a">')
        
            // stuff the query string into it
            .text(query_string)
            
            // add listener for 'click' event
            .click(function(){
            
                // set the value of #query-input to this item's text
                $('input#query-input').val(
                        $(this).text()
                    );
                // submit the form
                $('form#query-form').submit();
                
            })
    )
        
    // if list is too long, remove the last item
    if(size > 4) {
        recent.children(":last").remove();
        if(!(doStoreQuery == false))
            deleteOldestQueryFromStorage();
    }
    
     // refresh the list to apply jQM transformations
     recent.listview('refresh');
    
    // store the query by default
    if(!(doStoreQuery === false))
        storeQuery(query_string);
    
}

/**
 * storeQuery stores puts the query string in client-side storage
 */
function storeQuery(query_string) {
    console.log("store query",query_string);

    // check to see if the browser has local storage
    if(sessionStorage != undefined) {
    
        var key = "demo3-queries";
        var queries;
    
        // unserialize queries array, if it exists
        if(sessionStorage[key] != undefined) {
        
            // get the array
            queries = JSON.parse(sessionStorage.getItem(key));
            // push the new value onto it
            queries.push(query_string);
            
        } else {    // define a new array
            queries = [ query_string ];
        }
    
        // reencode and store the array of query strings
        sessionStorage.setItem(key, JSON.stringify(queries));
        
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
        if(sessionStorage[key] != undefined) {
        
            // get stored queries array
            var queries = JSON.parse(sessionStorage.getItem(key));
            // remove the last item
            queries.splice(0,1)
            // store the array again
            sessionStorage.setItem(key, JSON.stringify(queries));
            
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
        
            var queries = JSON.parse(sessionStorage.getItem(key));
            
            // add each query to recent
            for(var i = 0, len = queries.length; i < len; i++) {
                saveQuery(queries[i],false);    // already stored
            }
            
        }
        
    } else {
        console.log("Session storage is not available.");
    }
    
}