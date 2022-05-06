import { NextPage } from "next";
import Login from "../components/Login";
import Logout from "../components/Logout";

const Home = () => {
  return (
    <div>
      <Login />
      <Logout />
    </div>
  );
};

export default Home;
