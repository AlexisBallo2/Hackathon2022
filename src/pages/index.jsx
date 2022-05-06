import { NextPage } from "next";
import Login from "../components/Login";
import Logout from "../components/Logout";
import SearchReturn from "../components/SearchReturn";

import NavBar from "../components/SampleComponent/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <SearchReturn />
    </div>
  );
};

export default Home;
