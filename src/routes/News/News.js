import React from "react";
import Navbar from './../../modules/navigation/Navbar';
import classes from './../../style.module.scss';
import Header from "../../modules/navigation/Header";

const News = () => {
    return(
        <div>
            <div className={classes.main}>
                <div className={classes.main_Navigation}><Navbar /></div>
                <div className={classes.main_Content}><Header /></div>
            </div>           
        </div>
    )
}
export default News