$(document).ready(function() {  // wait for DOM ready event

    // grab a reference to the form
    var form = $("#addpost");
    
    // bind to the form's 'submit' event
    form.submit(function() {
    
        // get user input
        var title = $("#title").val();
        var description = $("#description").val();
        var url = $("#url").val();
        
        // send the data to 'add_post.php'
        $.ajax({
            url: "add_post.php",
            type: "post",
            data: {title:title,description:description,url:url}
        });

        // create a post
        var post = $("<div class='post'>").append(
                $("<a href='http://"+url+"'>").text(
                    title
                ),
                " - "+description
            );
            
        // get a reference to the list of posts
        var list = $("div#posts-list");
            
        // show the post to the user by
        // adding the post to the post list
        list.append(post);

        return false; // prevent page refresh
    
    });
    

});