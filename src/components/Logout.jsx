import React from "react";

import { GoogleLogout } from "react-google-login";
// refresh token

const clientId =
  "800283224875-mfp8r4rqffqm3bijtaqeac2m13g0tems.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout made successfully");
    alert("Logout made successfully.");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
