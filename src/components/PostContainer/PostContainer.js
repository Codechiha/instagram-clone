import React, { Component } from 'react';
import CommentContainer from '../Comments/CommentContainer';
import Post from './Post';
import './Post.css';


const PostContainer = props => {
  return(
    <div className='p-container'>
      {props.data.map(postM =>
        <Post
          key={postM.imageUrl}
          post={postM}
        />
      )}
      <button onClick={props.logout}>LogOut</button>
    </div>
  )
}



export default PostContainer;
