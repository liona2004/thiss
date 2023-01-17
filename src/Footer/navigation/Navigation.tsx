import React from 'react';
import style from './Navigation.module.css';


function Navigation() {
    return (
        <div className={style.navigation}>
            <a className={style.titleIcons} href="">Instagram</a>
            <a className={style.titleIcons} href="">Telegram</a>
            <a className={style.titleIcons} href="">Vkontakte</a>
            <a className={style.titleIcons} href="">GitHub</a>
        </div>
    );
}

export default Navigation;