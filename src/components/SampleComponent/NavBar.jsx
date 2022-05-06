import React, { useState } from "react";

import styles from './NavBar.module.css'

import Login from "../Login";
import Logout from "../Logout";

const NavBar = () => {
    return (
        <div className = "menubar">
            <title>Midd XChange</title>
            <div className = {styles.body}>
            <div className = {styles.gridcontainer}>
            
            <div className = {styles.test}> <h1 className = {styles.h1}>Midd XChange</h1> </div>
            <div> </div>
            <div className = {styles.button_styles}> 
                <Login />  </div>
            <div className = {styles.button_styles}> <Logout /> 
            </div>
            </div>
            </div>
        </div>
    );
};

  
  export default NavBar;