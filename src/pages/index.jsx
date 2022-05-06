import { NextPage } from "next";
import Login from "../components/Login";
import Logout from "../components/Logout";
import SearchReturn from "../components/SearchReturn";
const Home = () => {
  return (
    <div>
      <Login />
      <Logout />
      <SearchReturn />
    </div>
  );
};

export default Home;
