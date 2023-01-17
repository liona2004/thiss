import React from 'react';
import style from './Footer.module.css';
import Navigation from "./navigation/Navigation";
import styleContainer from "./../common/styles/Container.module.css"

function Footer() {
    return (
        <div className={style.footerBlock}>

            <div className={`${styleContainer.container} ${style.footer}`} >
                <h4 className={style.title}>Alyona Gromashevskaya</h4>
                <Navigation/>
                <h5 className={style.title}>2023 All rights reserved</h5>
            </div>
        </div>

    );
}

export default Footer;
