/*
 * Setup app
 */
$(document).bind("#page_2","pagecreate",function() {
    // go to homepage on refresh or landing
    $.mobile.changePage( "#page_1", {
        transition: "none",
        reverse: false,
        changeHash: false
    });
});
 
 /*
  * do setup stuff during page initialization of #page_1
  */
$( document ).delegate("#page_1", "pageinit", function() {

    // restore queries from storage (if they have been stored)
    restoreQueries();
    $.mobile.fixedToolbars.show();
  
    // process form on submit
    $('form#query-form').submit(function(){
    
        // get the query string from the text input
        var query_string = $('input#query-input').val();
        console.log("submitted query",query_string);
        
        if(query_string.length > 0) {
    
            // select the tweet list
            var list = $("#tweet-list");
        
            // cancel the current query and updates
            if(list.data('timeout') !== "undefined")
                clearTimeout($("#tweet-list").jqmData('timeout'));
            if(list.data('query') !== "undefined")
                $("#tweet-list").jqmRemoveData('query');
            
            // change results text on tweet list page
            $("#results-query-string").text(query_string);
            
            // empty the tweet list
            list.empty();
            
            // create, persist and run the query
            var query = new TwitterSearch(query_string, updateTweetList);
            $("#tweet-list").jqmData('query',query);
            query.getTweets();
                
            // change to tweet list page
            $.mobile.changePage("#page_2");
    
            // try to store recent queries
            saveQuery(query_string);
            $.mobile.fixedToolbars.show();
            
        }
        
        return false;   // prevents page refresh
        
    });
    
    // select any text on input focus
    $('input[type="text"]').focus(function(){$(this).select();});
  
});


/**
 * updateTweets updates the list of tweets every 20 seconds
 */
function updateTweetList(results) {

    // select the tweet list
    var list = $("#tweet-list");
    
    // get the query
    var query = list.jqmData('query');

    if(query != undefined) {
        
        // update query with latest tweet's id
        if(results.length > 0) {
            query.update(results[0].id_str);
        }
        
        // attach to the tweet list a timeout to rerun the query
        $(list).data('timeout', setTimeout('$("#tweet-list").jqmData("query").getOnlyNewTweets();', 5000));
        
        // display new tweets
        if(results.length > 0) displayTweets(results);
        
        // fixed footer hack
        $.mobile.fixedToolbars.show();
        
    }

}


/**
 *  TwitterSearch object for running queries against Twitter's API
 *
 *  arg1: query string
 *  arg2: method to process array of results (tweet objects)
 *
 */ 
function TwitterSearch(query, processTweets) {

    this.query = query;
    this.settings = {
            url: 'http://search.twitter.com/search.json?page=1&rpp=10&q='+this.query+'&callback=?', 
            dataType: 'jsonp',  // required for cross-domain call
            success: function(data, textStatus, request) {
                console.log("Results:", data.results);
                processTweets(data.results);
            },
            error: function(request, status, error) {
                processTweets([]);  // still have to update
                console.log("failed with error "+error);
            }
        };
    this.getTweets = function(){$.ajax(this.settings);};
    this.getOnlyNewTweets = function() {
        var old_url = this.settings.url;
        this.settings.url = 'http://search.twitter.com/search.json?page=1&rpp=10&q='+this.query+'&since_id='+this.newerTweetId+'&callback=?';
        $.ajax(this.settings);
        this.settings.url = old_url;
    };
    this.update = function(newest_id) {
        var tail = "";
        var currentVal = Number(newest_id.charAt( newest_id.length-1 ));
        var head = newest_id.slice(0, -1);
        while(currentVal === 9 && head.length > 0) {
            tail = "0"+tail;
            currentVal = Number(head.charAt( head.length-1 ));
            head = head.slice(0, -1);
        }
        currentVal++;
        this.newerTweetId = head+currentVal+tail;
    }
    this.newerTweetId = "0";
        
}