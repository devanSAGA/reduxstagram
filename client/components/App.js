import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Main from "./Main";
import * as actionCreators from "../actions/actionCreators";

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
