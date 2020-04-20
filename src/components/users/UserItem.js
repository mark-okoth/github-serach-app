import React from "react";
import propTypes from 'prop-types'

const UsersItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card ">
      <div className="card-image">
        <img src={avatar_url} className="circle responsive-img" alt="avatar" />
        <span className="card-title">{login}</span>
      </div>
      <div className="card-action">
        <a href={html_url} className="blue-text">
          Profile
        </a>
      </div>
    </div>
  );
};

UsersItem.propTypes = {
  user: propTypes.object.isRequired,
}

export default UsersItem;
