import { NextPage } from "next";
import Login from "../components/Login";
import Logout from "../components/Logout";
import SearchReturn from "../components/SearchReturn";
import styles from "./IndexJs.module.css";
import NavBar from "../components/SampleComponent/NavBar";

const Home = () => {
  return (
    <div className={styles.fullPage}>
      <NavBar />
      <SearchReturn />
    </div>
  );
};

export default Home;
