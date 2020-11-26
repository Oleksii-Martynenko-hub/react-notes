import React from 'react';
import { connect } from 'react-redux';

import Post from './Post';

const Posts = ({ posts }) => {
  if (!posts.length) return <Post title={'No posts'} descr={''}/>

  return posts.map(({ title, descr, key }) => <Post title={title} descr={descr} key={key} />);  
}

export default connect(state => ({posts: state.posts.posts}), null)(Posts)

// const mapStateToProps = state => {
//   return {
//     posts: state.posts.posts
//   }
// }

// export default connect(mapStateToProps, null)(Posts)