import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/face-heroes.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto (e.target.files[0]);
        }
    }

    return (
        <div>
            {/*<div className={s.first}>*/}
            {/*    <img src="https://s1.1zoom.ru/big0/235/Poppies_Summer_Grasslands_Trees_562184_1270x1024.jpg"></img>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
