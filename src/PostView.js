import React from "react";

//PostView will help display the posts and delete when necessary
function PostView({ post, deletePost }) {
    console.log(post, deletePost);
    if (post.type === "Text"){
        return (
            <div className="post">
                <p>{post.content}</p>
                <button name="delete" onClick={deletePost}>Delete</button>
            </div>
        );
    } else {
        return (
            <div className="post">
                <img src={post.content} alt="could not load"/>
                <button name="delete" onClick={deletePost}>Delete</button>
            </div>
        );
    };
}

export default PostView;