import React from "react";
import { Link } from "react-router";

class Photo extends React.Component {
  render() {
    const { post, comments, index } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} />
          </Link>
        </div>
        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button
              className="likes"
              onClick={() => this.props.increment(index)}
            >
              &hearts; {post.likes}
            </button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble" />
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Photo;
