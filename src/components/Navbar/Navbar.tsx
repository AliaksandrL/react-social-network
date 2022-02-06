import React from 'react'
import IconUser from '../../components/common/icons/IconUser'
import s from './Navbar.module.css'
import IconMessages from "../../components/common/icons/IconMessages";
import IconNews from "../../components/common/icons/IconNews";
import IconSettings from "../../components/common/icons/IconSettings";
import IconMusic from '../../components/common/icons/IconMusic';
import {NavItem} from "./NavItem/NavItem";
import {useSelector} from "react-redux";
import {AppStateTypes} from "../../redux/store";

export function Navbar() {
    const isAuth = useSelector<AppStateTypes, boolean>( state => state.auth.isAuth)
    const myID = useSelector<AppStateTypes, number>( state => state.auth.id)
    return (
        <div className={s.navbar}>
            <NavItem name={'Profile'} to={isAuth ? `/profile/${myID}` : '/login'}>
                <IconUser fill={'white'} />
            </NavItem>
            <NavItem name={'Messages'} to={'/messages'}>
                <IconMessages fill={'white'} />
            </NavItem>
            <NavItem name={'People'} to={'/users'}>
                <div className={s.users}>
                    <IconUser fill={'white'} />
                    <IconUser fill={'white'} />
                    <IconUser fill={'white'} />
                </div>
            </NavItem>
            <NavItem name={'Posts'} to={'/posts'}>
                <IconNews fill={'white'} />
            </NavItem>
            <NavItem name={'Music'} to={'/music'}>
                <IconMusic fill={'white'} />
            </NavItem>
            <NavItem name={'Settings'} to={'/settings'}>
                <IconSettings fill={'white'} />
            </NavItem>
        </div>
    )
}