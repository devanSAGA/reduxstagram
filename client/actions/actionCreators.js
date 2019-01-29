const increment = index => ({
  type: "INCREMENT_LIKES",
  index
});

const addComment = (postId, commentAuthor, commentText) => ({
  type: "ADD_COMMENT",
  postId,
  commentAuthor,
  commentText
});

const removeComment = (postId, index) => ({
  type: "DELETE_COMMENT",
  postId,
  index
});

export { increment, addComment, removeComment };
