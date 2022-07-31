import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img alt='ava' src='https://i.pinimg.com/564x/3f/4d/60/3f4d60a583a6fafc14f3746a19f44432.jpg' />
      {props.message}
      <div>
        <span>like</span>{props.likesCount}
      </div>
    </div>

  );
};
export default Post;