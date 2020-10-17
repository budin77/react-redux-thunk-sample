//import React, { useEffect } from 'react';
import React from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((el, index) => {
      return (
        <div key={el.id} className="item">
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{el.title}</h2>
              <p>{el.body}</p>
            </div>
            <UserHeader userId={el.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
