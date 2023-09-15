import Header from "../header/Header.jsx";
import {Outlet} from "react-router-dom";
import styles from './layout.module.css'
import ScrollTopButton from "../scrollToTop/ScrollToTop.jsx";

const Layout = () => {
    return (
        <>
            <Header/>
            <main className={styles.wrapper}>
                <Outlet/>
            </main>
            <ScrollTopButton/>
        </>
    )
}

export default Layout
