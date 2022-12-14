import React from 'react';
import s from './NavBar.module.css';
import ContentProfile from '../Content/Profile/ContentProfile';


const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href='/ContentProfile'>Profile</a>
            </div>
            <div className={`{s.item} {s.active}`}>
                <a href='/dialogs'>Message</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Setting</a>
            </div>
        </nav>
    );
};
export default NavBar;