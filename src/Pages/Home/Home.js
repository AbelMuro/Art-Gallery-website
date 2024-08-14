import React from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function Home() {
    return(
        <header className={styles.header}>
            <div className={styles.header_hero}>
                <img className={styles.header_title} src={icons['lightLogo']}/>                
                <img className={styles.header_title} src={icons['darkLogo']}/>                     
                <img className={styles.header_image}/>
            </div>
        </header>
    )
}

export default Home;