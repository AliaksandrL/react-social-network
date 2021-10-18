import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/480px-Instagram_logo_2016.svg.png"></img>

            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>

        </header>
    );
}

export default Header;