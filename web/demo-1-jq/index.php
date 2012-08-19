<!DOCTYPE html>
<html>
    <head>
        <title>CS179 Lab 3: Demo #1 - jQuery</title>
        <meta charset='utf-8'>
        <link href='http://fonts.googleapis.com/css?family=Sirin+Stencil' rel='stylesheet' type='text/css'>
        <link href="../common/google-code-prettify/prettify.css" type="text/css" rel="stylesheet" />
        <link href="../common/styles.css" rel="stylesheet" type="text/css" />
        <link href="styles.css" rel="stylesheet" type="text/css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="../common/google-code-prettify/prettify.js"></script>
        <script type="text/javascript" src="../common/demo.js"></script>
        <script type="text/javascript" src="demo.js"></script>
    </head>
    <body>
        <div id="wrapper-main">
            <div id="header">
                <a href="..">Return to Index</a>
                <h1>CS179 Lab 3: Demo #1 - jQuery</h1>
            </div>
            <div id="content">
                <div id="instructions">
                    <b>Instructions:</b>
                    <p>
                        Try out these function in Chrome inspector's
                        <b>Console</b> tab.
                    </p>
                </div>
                <a href="demo.js" target="_blank">view raw source</a>
                <code class="demo-code prettyprint"><?php echo htmlentities(file_get_contents("demo.js")); ?></code>
                <div id="demo-sandbox">
                    <p>1st Paragraph</p>
                    <p>2nd Paragraph</p>
                    <div>
                        <p>a paragraph inside a div</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>