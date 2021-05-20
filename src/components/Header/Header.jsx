import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
      <header className={s.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/480px-Instagram_logo_2016.svg.png"></img>
      </header>
    );
}

export default Header;