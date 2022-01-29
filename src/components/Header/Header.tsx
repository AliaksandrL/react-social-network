import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import userAvatar from "./../../assets/images/users/userIcon4.jpg"

const Header = (props: any) => {
    return (
        <header className={s.header}>
            <div className={s.logoName}>
                <p className={s.logoIT}>IT</p>
                <p className={s.logoIN}>IN</p>
                <p className={s.logoCubator}>CUBATOR </p>
                <span className={s.logoKama}>I T - K A M A S U T R A . C O M</span>
            </div>
            <div>
                {props.isAuth
                    ?
                    <div className={s.imIn}>
                        <div className={s.ava}>
                            <img src={props.photo ? props.photo : userAvatar} alt="avatar"/>
                        </div>
                        <div>
                            <h6>{props.login}</h6>
                            <button className={s.logout} onClick={props.logout}>Log out</button>
                        </div>
                    </div>

                    : <NavLink className={s.logout} to={'/login'}>Login</NavLink>}
            </div>

        </header>
    );
}

export default Header;