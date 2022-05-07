import React from "react";
import { GoogleLogin } from "react-google-login";

const clientID =
  "800283224875-mfp8r4rqffqm3bijtaqeac2m13g0tems.apps.googleusercontent.com";
//test
function Login() {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    /* alert(`Failed to login. Please try again.`); */
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
