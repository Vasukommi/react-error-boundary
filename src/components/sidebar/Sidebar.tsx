import React from "react";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={classes.aside}>
            <h2 className={classes.sidebar_h2}>Error Types</h2>
            <ul className={classes.sidebar_ul}>
                <Link className={classes.sidebar_li} to="/component-error">
                    Component
                </Link>
                <Link className={classes.sidebar_li} to="/fetch-error">
                    Fetch
                </Link>
                <Link className={classes.sidebar_li} to="/no-internet-error">
                    Internet
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;
