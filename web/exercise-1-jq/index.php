<?php
	// *SNIP*	
?>
<!DOCTYPE html>
<html >
<head>
        <title>CS179 Lab 3: Exercise #1 - jQuery</title>
        <meta charset='utf-8'>
        <link href='http://fonts.googleapis.com/css?family=Sirin+Stencil' rel='stylesheet' type='text/css'>
        <link href="../common/styles.css" rel="stylesheet" type="text/css" />
        <link href="styles.css" rel="stylesheet" type="text/css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <script src="exercise<?php if(isset($_GET["finished"])) echo "-finished"; ?>.js" type="text/javascript"></script>
</head>
<body>
	<div id='wrapper-main'>
		<div id='header'>
            <a href="..">Return to Index</a>
			<h1>CS179 Lab 3: Exercise #1 - jQuery</h1>
        </div>
        <div id="content">
            <button onclick="$('#instructions').toggle();" style="float:left;">
                Toggle Instructions
            </button>
            <br />
            <br />
            <div id="instructions">
                <h3>Instructions</h3>
                <div class="wrapper">
                    <p>
                        The only file you need to modify is <code>lab3/exercise-1/exercise.js</code>
                    </p>
                    <ol>
                        <li>Write a callback for the form's 'submit' event.</li>
                        <li>Get the user input from the form's inputs.</li>
                        <li>Send the input to add post.</li>
                        <li>Display the post to the user. Format:
                            <ul>
                                <li>Create a div with class 'post'.</li>
                                <li>Append to it "<code>title</code> - <code>description</code>",
                                    where <code>title</code>, <code>description</code> and
                                    <code>url</code> are the user's input and
                                    <code>title</code> is linked to <code>url</code>.</li>
                            </ul>
                        </li>
                        <li>*Handle the filter form's 'submit' with jQuery*. (Advanced)</li>
                    </ol>
                    <p>
                        If the page is refreshing, you need to add
                        <code>return false;</code> at the end of the
                        submit handler. The add post feature is completely
                        broken, until you handle the submission in JS.
                    </p>
                    <p>
                        For help, see <a href="../demo-1-jq">demo #1</a>, which introduces jQuery.
                    </p>
                </div>
            </div>
            
            <!-- *SNIP* -->
            
	</div>
</body>
</html>
