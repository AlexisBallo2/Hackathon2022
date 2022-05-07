import SearchReturn from "../components/SearchReturn";
import styles from "./IndexJs.module.css";
import NavBar from "../components/SampleComponent/NavBar";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
// import refreshTokenSetup from "react-google-login";
import react, { useState } from "react";
const clientID =
  "800283224875-mfp8r4rqffqm3bijtaqeac2m13g0tems.apps.googleusercontent.com";

const onLoginSuccess = (res) => {
  console.log("Login Success: currentUser:", res.profileObj);
  setisLoggedIn(true);
  setuserData(res.profileObj);
  // refreshTokenSetup(res);
};

const onLoginFailure = (res) => {
  console.log("Login failed: res:", res);
  /* alert(`Failed to login. Please try again.`); */
};
const onLogoutSuccess = () => {
  console.log("Logout made successfully");
  /* alert("Logout made successfully ✌"); */
};
const Home = () => {
  const onLoginSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    setisLoggedIn(true);
    setuserData(res.profileObj);
    // refreshTokenSetup(res);
  };
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [userData, setuserData] = useState({});
  return (
    <div className={styles.fullPage}>
      <NavBar />
      <div className={styles.loginDiv}>
        <div className={styles.holder}>
          {isLoggedIn == false ? (
            <GoogleLogin
              className={styles.login}
              clientId={clientID}
              buttonText="Login"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
              style={{ marginTop: "100px" }}
              isSignedIn={true}
            />
          ) : (
            <div className={styles.trueLogin}>
              <p>Hello {userData.givenName}</p>
              <img className={styles.userPic} src={userData.imageUrl}></img>
            </div>
            // <GoogleLogout
            //   clientId={clientID}
            //   buttonText="Logout"
            //   onLogoutSuccess={onLogoutSuccess}
            // ></GoogleLogout>
          )}
        </div>
        <div></div>
      </div>

      <SearchReturn />
    </div>
  );
};

export default Home;
