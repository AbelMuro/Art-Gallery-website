import React from 'react';
import icons from './icons'
import * as styles from './styles.module.css';

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.header_hero}>
                <img className={styles.header_title} src={icons['lightLogo']}/>                
                <img className={styles.header_title} src={icons['darkLogo']}/>                     
                <img className={styles.header_image}/>
            </div>
            <div className={styles.header_content}>
                <strong className={styles.header_tablet_title}> 
                    Modern art gallery
                </strong>
                <p>
                    The arts in the collection of the 
                    Modern Art Gallery all started from 
                    a spark of inspiration. Will these 
                    pieces inspire you? Visit us and 
                    find out.
                </p>
                <button className={styles.header_button}>
                    our location
                    <div className={styles.header_arrow}/>
                </button>
            </div>
        </header>
    )
}

export default Header;