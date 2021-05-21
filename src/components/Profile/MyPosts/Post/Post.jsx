import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://pbs.twimg.com/profile_images/1173161429266030592/lJCNA_JC.jpg" />
      { props.message }
      <div>
        <span>Like</span>{ props.likesCount }
      </div>
    </div>
  );
};

export default Post;
