import React, { Component } from 'react';

class UserItem extends Component {
  state = {
    id: 'id',
    login: 'lukasweidich',
    avatar_url: 'https://avatars2.githubusercontent.com/u/49440764?s=460&v=4',
    html_url: 'https://github.com/lukasweidich',
  };

  render() {
    const { login: lol, avatar_url, html_url } = this.state;

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: '60px' }}
        />
        <h3>{lol}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
