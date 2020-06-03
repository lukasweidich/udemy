import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

function Repos({ repos }) {
  if (Array.isArray(repos)) {
    return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
  } else {
    return <RepoItem repo={repos} key={repos.id} />;
  }
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
