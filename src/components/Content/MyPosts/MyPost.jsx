import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div className={s.content}>My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <div>
        <Post message='Hi!' likesCount=' 0'/>  
        <Post message="It's my first post" likesCount=' 23'/> 
        <Post message='Have a nice day' likesCount=' 45'/> 
        
        </div>
      </div>
    </div>
  )
};
export default MyPosts;