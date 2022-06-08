import PostView from "./PostView";
import React from "react";

/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({ posts, deletePost }) {
  // TODO: Diplay the list of posts.
  return (
    <div className="post-list">
      <ul>
        {posts.map((post, index) => (
          <PostView
            deletePost={() => deletePost(index)}
            key={index}
            post={post}
          />
        ))}
      </ul>
    </div>
  );
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

}

export default PostList;
