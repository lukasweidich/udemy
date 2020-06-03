import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login: lol, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt={`${lol} Avatar`}
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{lol}</h3>
      <div>
        <Link to={`/users/${lol}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
