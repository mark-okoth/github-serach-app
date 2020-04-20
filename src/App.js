import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import User from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
        </div>
        <User loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;