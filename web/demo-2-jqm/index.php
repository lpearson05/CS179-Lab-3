<!DOCTYPE html>
<html>
    <head>
        <title>CS179 Lab 3: Demo #2 - jQueryMobile</title>
        <meta charset='utf-8'>
        <link href='http://fonts.googleapis.com/css?family=Sirin+Stencil' rel='stylesheet' type='text/css'>
        <link href="../common/google-code-prettify/prettify.css" type="text/css" rel="stylesheet" />
        <link href="../common/styles.css" rel="stylesheet" type="text/css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="../common/google-code-prettify/prettify.js"></script>
        <script type="text/javascript" src="../common/demo.js"></script>
    </head>
    <body>
    
        <div id="wrapper-main">
            <div id="header">
                <a href="..">Return to Index</a>
                <h1>CS179 Lab 3: Demo #2 - jQueryMobile</h1>
            </div>
            <div id="content">
                <div id="instructions">
                    <p>
                        These following are just some jQM markup examples.
                    </p>
                </div>
                <code class="demo-code prettyprint"><?php echo htmlentities(file_get_contents("example-0.html")); ?></code>
                <div id="sandbox">
                    <p>
                        All of the color and font sizes have been
                        automatically applied by the jQM framework.
                        No custom styling has been done. Check out
                        <a href="example-0.html" target="_blank">the example</a>
                        in Chrome's inspector to see the extent of
                        the changes.
                    </p>
                    <iframe class="mobile" src="example-0.html"
                        height="372" width="256">
                        example-0.html
                    </iframe>
                </div>
            </div>
        </div>
    
    </body>
</html>