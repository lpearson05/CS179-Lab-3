<!DOCTYPE html>
<html>
    <head>
        <title>CS179 Lab 3: Demo #0 - JSON</title>
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
                <h1>CS179 Lab 3: Demo #0 - JSON</h1>
            </div>
            <div id="content">
                <div id="instructions">
                    <b>Instructions:</b>
                    <p>
                        To see the output of the examples, go to Chrome inspector's
                        <b>Console</b> tab.
                    </p>
                </div>
                <a href="demo.js" target="_blank">view raw source</a>
                <code class="demo-code prettyprint"><?php echo htmlentities(file_get_contents("demo.js")); ?></code>
                <div id="demo-sandbox">
                    <br />
                    <br />
                    <br />
                    <br />
                    <i>Some JSON stuffed into an HTML </i><b>code</b><i> element:</i>
                    <code id="json00">{"field1":1,"field2":2}</code>
                </div>
            </div>
        </div>
    </body>
</html>