import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.text);
  };
  render() {
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
      </div>
    );
  }
}
export default Search;
