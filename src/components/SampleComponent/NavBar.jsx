import React, { useState } from "react";

import styles from "./NavBar.module.css";

import Login from "../Login";
import Logout from "../Logout";

const NavBar = () => {
  return (
    <div className={styles.menubar}>
      <div className={styles.test}>
        <h1 className={styles.h1}>Midd XChange</h1>{" "}
      </div>
      <div className={styles.ulHolder}>
        <ul className={styles.navList}>
          <li>
            <Login />
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
