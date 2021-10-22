import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/face-heroes.png";
import {NavLink} from 'react-router-dom';
import * as axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
    <div>
        <NavLink to={'/profile/' + u.id}>
        <img src={u.photos.small != null ? u.photos.small : userPhoto}
             className={styles.userPhoto}/>
        </NavLink>
    </div>
    <div>
       {u.followed
           ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
               props.toggleIsFollowingProgress(true, u.id);
               axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                   withCredentials: true,
                   headers: {
                       'API-KEY': 'ae3793e8-7c42-49d3-82ac-f60f84efebfe'
                   }
               })
                   .then(response => {
                       if (response.data.resultCode == 0) {
                           props.unfollow(u.id);
                       }
                       props.toggleIsFollowingProgress(false, u.id);
                   });
           }}>Unfollow</button>
           : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
               props.toggleIsFollowingProgress(true, u.id);
               axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                   withCredentials: true,
                   headers: {
                       'API-KEY': 'ae3793e8-7c42-49d3-82ac-f60f84efebfe'
                   }
               })
                   .then(response => {
                       if (response.data.resultCode == 0) {
                           props.follow(u.id);
                       }
                       props.toggleIsFollowingProgress(false, u.id);
                   });
           }}>Follow</button>}
    </div>
                </span>
                <span>
                     <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>

                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;