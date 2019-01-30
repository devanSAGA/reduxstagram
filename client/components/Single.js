import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single = props => {
  const postIndex = props.posts.findIndex(
    post => post.code === props.params.postId
  );
  const post = props.posts[postIndex];
  const postComments = props.comments[post.code] || [];

  return (
    <div className="single-photo">
      <Photo index={postIndex} post={post} {...props} />
      <Comments {...props} comments={postComments} />
    </div>
  );
};

export default Single;
