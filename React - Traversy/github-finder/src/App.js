import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Axios from "axios";

const App = () => {
  const [users, setUsers] = new useState([]);
  const [user, setUser] = new useState({});
  const [repos, setRepos] = new useState([]);
  const [loading, setLoading] = new useState(false);
  const [alert, setAlertState] = new useState(null);

  const searchUsers = async (searchTerm) => {
    setLoading(true);
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${searchTerm}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const getUser = async (username) => {
    setLoading(true);
    const res = await Axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
  };

  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await Axios.get(
      `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data.items);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const setAlert = (msg, type) => {
    setAlertState({ msg, type });
    setTimeout(() => setAlertState(null), 5000);
  };

  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0}
                    setAlert={setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/users/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};
/* React.createElement('elementTag', {elementProp: 42, foo: "bar"}, 
  React.createElement('h1', null, 'Hello from React' )); */

export default App;
