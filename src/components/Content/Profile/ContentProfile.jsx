import React from 'react';
import s from './ContentProfile.module.css';
import MyPost from '../MyPosts/MyPost.jsx';

const ContentProfile = () => {
  return (
    <div className={s.content}>
      <div> <img alt='fon' src="https://i.pinimg.com/originals/5c/07/29/5c0729b68cec0d1184a309462dc0ebeb.jpg" />
      </div>
      <div>
        ava+discription
      </div>
      <MyPost />
    </div>
  );
};
export default ContentProfile;