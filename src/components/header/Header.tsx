import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Handle Errors</h1>
            <h1>React Error Handler</h1>
            <form className={styles.searchForm}>
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </form>
        </header>
    );
};

export default Header;