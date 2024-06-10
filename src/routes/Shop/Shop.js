import React from "react";
import classes from './../../style.module.scss'
import Navbar from './../../modules/navigation/Navbar';
import Header from "../../modules/navigation/Header";


const Shop = () => {
    return(
        <div>
            <div className={classes.main}>
                <div className={classes.main_Navigation}><Navbar /></div>
                <div className={classes.main_Content}><Header /></div>
            </div>
        </div>
    )
}
export default Shop