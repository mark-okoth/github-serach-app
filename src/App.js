import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import User from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import Alert from './components/layouts/Alert'
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert:null
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
      
    });
  };
  setAlert=(msg, type)=>{
    this.setState({alert: {msg: msg, type:type }})
  }
  render() {
    const {users, loading} = this.state
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <Alert alert={this.state.alert}/>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
        </div>
        <User loading={loading} users={users} />
      </div>
    );
  }
}

export default App;
