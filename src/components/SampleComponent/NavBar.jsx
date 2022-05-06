import React, { useState } from "react";

import styles from './NavBar.module.css'

import Login from "../Login";
import Logout from "../Logout";

const NavBar = () => {
    return (
        <div>
            <div className = {styles.button_styles}> <Login /> <Logout /> </div>
        </div>
    );
};

  
  export default NavBar;