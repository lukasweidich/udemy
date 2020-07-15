import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

function Repos({ repos }) {
  if (Array.isArray(repos) && repos.length > 0) {
    return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
  } else if (repos) {
    return <RepoItem repo={repos} key={repos.id} />;
  } else {
    return <p>No repos found</p>;
  }
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
