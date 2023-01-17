import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "./../common/styles/Container.module.css"



function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h3 className={style.title}>Contacts</h3>
                <form className={style.contactMe}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea className={style.textArea}></textarea>
                </form>
                <h4 className={style.titleButton}>Send</h4>
            </div>

        </div>
    );
}

export default Contacts;
