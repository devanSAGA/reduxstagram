const comment = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          user: action.commentAuthor,
          text: action.commentText
        }
      ];
    case "DELETE_COMMENT":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

const commentReducer = (state = {}, action) => {
  if (typeof action.postId !== "undefined") {
    return {
      ...state,
      [action.postId]: comment(state[action.postId], action)
    };
  }
  return state;
};

export default commentReducer;
