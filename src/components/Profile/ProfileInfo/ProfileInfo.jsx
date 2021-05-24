import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.first}>
        <img src="https://s1.1zoom.ru/big0/235/Poppies_Summer_Grasslands_Trees_562184_1270x1024.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>ava + descript</div>
    </div>
  );
};

export default ProfileInfo;
