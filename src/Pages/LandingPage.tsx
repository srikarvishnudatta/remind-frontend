import styles from "./LandingPage.module.css"
import {NavLink} from "react-router-dom";


export function LandingPage(){
    return (
        <section  className={`card-container background`}>
            <div  className={`card`}>
                <h1>Rem!nd</h1>
                <h3 className={styles.landingh3}>Always keep your Receipts safe</h3>
                <div className={styles.navbuttons}>
                    <NavLink to={"/login"} className={`${styles.loginbutton} ${styles.navlinks}`}>Login</NavLink>
                    <NavLink to={"/create"} className={`${styles.createaccountbutton} ${styles.navlinks}`}>Get Started!</NavLink>
                </div>
            </div>
        </section>
    )
}