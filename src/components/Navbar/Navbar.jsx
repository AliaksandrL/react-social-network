import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import {NavItem} from "./NavItem/NavItem";
import IconUser from "../common/icons/IconUser";
import IconMessages from "../common/icons/IconMessages";
import IconNews from "../common/icons/IconNews";
import IconSettings from "../common/icons/IconSettings";
import IconMusic from "../common/icons/IconMusic";


const Navbar = () => {
    return (
        <div className={s.navbar}>
            <NavItem name={'Profile'} to={'/profile'}>
                <IconUser fill={'white'}/>
            </NavItem>
            <NavItem name={'Messages'} to={'/dialogs'}>
                <IconMessages fill={'white'}/>
            </NavItem>
            <NavItem name={'Users'} to={'/users'}>
                <div className={s.users}>
                    <IconUser fill={'white'}/>
                    <IconUser fill={'white'}/>
                    <IconUser fill={'white'}/>
                </div>
            </NavItem>
            <NavItem name={'News'} to={'/news'}>
                <IconNews fill={'white'}/>
            </NavItem>
            <NavItem name={'Music'} to={'/music'}>
                <IconMusic fill={'white'}/>
            </NavItem>
            <NavItem name={'Settings'} to={'/settings'}>
                <IconSettings fill={'white'}/>
            </NavItem>
        </div>
    );
}

export default Navbar;