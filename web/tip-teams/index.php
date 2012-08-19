<!DOCTYPE html>
<html>
    <head>
        <title>CS179 Lab 3: Tip #0 - PHP Includes</title>
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
                <h1>CS179 Lab 3: Tip - PHP Includes</h1>
            </div>
            <div id="content">
                <p>
                    Using PHP's <code>include</code> function, you can
                    separate your app's one HTML or PHP file, or the main
                    file, and split it into it's various major components
                    for different people to work on. In otherwords, it
                    can help reduce working on the same file conflicts. This
                    is just a simple aide that is good enough for your
                    small-scale project.
                </p>
                <h4><a href="example-using-includes.php">Using includes...</a></h4>
                <code class="tip-code prettyprint"><?php echo htmlentities(file_get_contents("example-using-includes.php")); ?></code>
                <h4><a href="example-in-one-file.php">One file...</a></h4>
                <code class="tip-code prettyprint"><?php echo htmlentities(file_get_contents("example-in-one-file.html")); ?></code>
            </div>
        </div>
    </body>
</html>