<!DOCTYPE html>
<html>
    <head>
        <title>CS179 Lab 3: Exercise #0 - JSON</title>
        <meta charset='utf-8'>
        <link href='http://fonts.googleapis.com/css?family=Sirin+Stencil' rel='stylesheet' type='text/css'>
        <link href="../common/styles.css" rel="stylesheet" type="text/css" />
        <link href="styles.css" rel="stylesheet" type="text/css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <script src="site.js" type="text/javascript"></script>
        <script src="exercise<?php if(isset($_GET["finished"])) echo "-finished"; ?>.js" type="text/javascript"></script>
    </head>
    <body>
        <div id="wrapper-main">
            <div id="header">
                <a href="..">Return to Index</a>
                <h1>CS179 Lab 3: Exercise #0 - JSON</h1>
                <h5>Goal: Get comfortable parsing and reading JS object definitions and JSON.</h5>
            </div>
            <button onclick="$('#instructions').toggle();" style="float:left;">
                Toggle Instructions
            </button>
            <br />
            <br />
            <div id="instructions">
                <h3>Instructions</h3>
                <div class="wrapper">
                    <p>
                        The only file you need to modify is <code>lab3/exercise-0-json/exercise.js</code>
                    </p>
                    <ul>
                        <li>Write the body of <code>parseAndDisplayJS</code>.</li>
                        <li>Write the body of <code>parseAndDisplayJSON</code>.</li>
                    </ul>
                    <p>
                        Both functions should call <code>displayObject</code>, which takes two strings.
                        You should pass to it two fields from each object. At the end of this
                        exercise you should be able to see all seven objects listed in a similar
                        manner (in other words, pass each object's fields to <i>displayObject</i>
                        in the right order).
                    </p>
                    <p>
                        For help, see <a href="../demo-0-json">demo #0</a>, which goes over JS objects and JSON.
                    </p>
                </div>
            </div>
            <div id="exercise-sandbox" class="sandbox">
                <div class="object">
                    <h4>Title: static html</h4>
                    <p>I was marked up statically in HTML.</p>
                </div>
                <!-- more divs will be added here programmatically -->
            </div>
        </div>
    </body>
</html>