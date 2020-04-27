import React, { Component } from "react";
import propTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: propTypes.func.isRequired,
    clearUsers: propTypes.func.isRequired,
    showClear: propTypes.bool.isRequired,
    setAlert: propTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("please enter something", "green");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="input-field">
            <input
              type="text"
              name="text"
              placeholder="Search user ............"
              value={this.state.text}
              onChange={this.onChange}
            />
          </div>
          <div className="input-field">
            <input
              type="submit"
              className="btn waves-effect btn-small blue"
              value="Search"
            />
          </div>
        </form>
        {showClear && (
          <button
            className="btn btn-block btn-small black"
            onClick={clearUsers}
          >
            clear
          </button>
        )}
      </div>
    );
  }
}
export default Search;
