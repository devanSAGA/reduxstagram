import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.renderComment = this.renderComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            onClick={() =>
              this.props.removeComment(this.props.params.postId, index)
            }
            className="remove-comment"
          >
            &times;
          </button>
        </p>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const { postId } = this.props.params;
    const commentAuthor = this.refs.author.value;
    const commentText = this.refs.comment.value;
    this.props.addComment(postId, commentAuthor, commentText);
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        {this.props.comments.map((comment, index) =>
          this.renderComment(comment, index)
        )}
        <form
          ref="commentForm"
          onSubmit={this.handleSubmit}
          className="comment-form"
        >
          <input type="text" ref="author" placeholder="Author" />
          <input type="text" ref="comment" placeholder="Comment Here..." />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
