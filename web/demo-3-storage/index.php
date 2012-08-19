<!DOCTYPE html>
<html>
    <head>
        <title>CS179 Lab 3: Demo #3 - Local Storage</title>
        <meta charset='utf-8'>
        <link href='http://fonts.googleapis.com/css?family=Sirin+Stencil' rel='stylesheet' type='text/css'>
        <link href="../common/google-code-prettify/prettify.css" type="text/css" rel="stylesheet" />
        <link href="../common/styles.css" rel="stylesheet" type="text/css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="../common/google-code-prettify/prettify.js"></script>
        <script type="text/javascript" src="../common/demo.js"></script>
        <script type="text/javascript" src="demo.js"></script>
    </head>
    <body>
        <div id="wrapper-main">
            <div id="header">
                <a href="..">Return to Index</a>
                <h1>CS179 Lab 3: Demo #3 - Local Storage</h1>
            </div>
            <div id="content">
                <div id="instructions">
                    <b>Instructions:</b>
                    <p>
                        Test the functions in Chrome inspector's
                        <b>Console</b> tab. Look at the corresponding
                        storage object to see its contents. For example,
                        if you run <code>sessionStorage.setItem("foo","bar");</code>
                        and then run <code>sessionStorage;</code>. When
                        you expand it in the inspector, you will see the
                        storage object now contains the field <code>'foo'</code>.
                    </p>
                </div>
                <a href="demo.js" target="_blank">view raw source</a>
                <code class="demo-code prettyprint"><?php echo htmlentities(file_get_contents("demo.js")); ?></code>
            </div>
        </div>
    </body>
</html>