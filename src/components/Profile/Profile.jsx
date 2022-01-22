import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({savePhoto, isOwner, profile, status, updateStatus}) => {
    return (
        <div>
            <ProfileInfo savePhoto={savePhoto}
                         isOwner={isOwner}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
