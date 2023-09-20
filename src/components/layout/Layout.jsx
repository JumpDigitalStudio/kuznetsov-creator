import {Outlet} from "react-router-dom";
import styles from './layout.module.css'
import ScrollTopButton from "../scroll/scrollTopButton/ScrollTopButton.jsx";
import Header from "../header/Header.jsx";
import ScrollProgressBar from "../scroll/scrollProgressBar/ScrollProgressBar.jsx";

const Layout = () => {
    return (
        <>
            <ScrollProgressBar/>
            <Header/>
            <main className={styles.wrapper}>
                <Outlet/>
            </main>
            <ScrollTopButton/>
        </>
    )
}

export default Layout
