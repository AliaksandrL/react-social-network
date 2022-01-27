import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

const Header = (props: any) => {
    return (
        <header className={s.header}>
            <div className={s.logoName}>
                <p className={s.logoIT}>IT</p>
                <p className={s.logoIN}>IN</p>
                <p className={s.logoCubator}>CUBATOR </p>
                <span className={s.logoKama}>I T - K A M A S U T R A . C O M</span>
            </div>
            <div className={s.imIn}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    );
}

export default Header;