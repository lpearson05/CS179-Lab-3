<!DOCTYPE html>
<html>
    <head>
        <title>CS179 Lab 3: Exercise #2 - jQM</title>
        <meta charset='utf-8'>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="http://code.jquery.com/mobile/1.0.1/jquery.mobile-1.0.1.min.css" rel="stylesheet" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <script type="text/javascript">
        // redirect to home page on landing or refresh
        $(document).bind("mobileinit", function(){
                document.location.href="./#page_1";
        });
        </script>
        <script src="http://code.jquery.com/mobile/1.0.1/jquery.mobile-1.0.1.min.js" type="text/javascript"></script>
        <script src="site.js" type="text/javascript"></script>
        <script src="exercise.js" type="text/javascript"></script>
    </head>
    <body>
        
        <div data-role="page" id="page_1">
        
            <div data-role="header" data-id="header" data-position="fixed">
                <a href=".." data-icon="home" rel="external">Return to Index</a>
                <h1>Tweet Search</h1>
                <a data-role="button" data-icon="arrow-r" data-iconpos="right" data-inline="true" href="instructions.html" rel="external">See Instructions</a>
            </div><!-- /header -->
            
            <div data-role="content">
                <form id="query-form">
                    <input autofocus="autofocus" id="query-input" name="query" maxlength="24" placeholder="Type query string" type="text" />
                    <input type="submit" value="get tweets" />
                </form>
                <h3>Recent Queries</h3>
                <ul id="recent" data-role="listview"></ul>
            </div><!-- /content -->
	
            <div data-id="footer" data-role="footer" data-position="fixed">
            
                <div data-role="navbar">
                    <ul>
                        <li><a href="#page_1" class="ui-btn-active">Tweet Search</a></li>
                        <li><a href="#page_2">Tweet List</a></li>
                    </ul>
                </div><!-- /navbar -->
                
            </div><!-- /footer -->
            
        </div><!-- /page -->
        
        <div data-role="page" id="page_2">
        
            <div data-role="header" data-id="header" data-position="fixed"  data-add-back-btn="true" >
                <a href=".." data-icon="home" rel="external">Return to Index</a>
                <h1>Tweet List</h1>
                <a data-role="button" data-icon="arrow-r" data-iconpos="right" data-inline="true" href="instructions.html" rel="external">See Instructions</a>
            </div><!-- /header -->
            
            <div data-role="content">
                
                <h5>Tweets contaning "<span id="results-query-string"></span>"</h5>
                
                <ul data-role="listview" id="tweet-list">
                </ul><!-- list for holding tweets -->
                
            </div>
	
            <div data-id="footer" data-role="footer" data-position="fixed">    
            
                <div data-role="navbar">
                    <ul>
                        <li><a href="#page_1" data-direction="reverse">Tweet Search</a></li>
                        <li><a href="#page_2"  class="ui-btn-active">Tweet List</a></li>
                    </ul>
                </div><!-- /navbar -->
                
            </div><!-- /footer -->
            
        </div><!-- /page -->
    
    </body>
</html>