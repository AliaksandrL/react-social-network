import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div className={s.first}>*/}
            {/*    <img src="https://s1.1zoom.ru/big0/235/Poppies_Summer_Grasslands_Trees_562184_1270x1024.jpg"></img>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
