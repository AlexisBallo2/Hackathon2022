import Main from "./Main";
import AboutPage from "../components/AboutPage";
import { useState } from "react";
import styles from "./newIndex.module.css";
const Home = () => {
  const [sendComponent, setSendComponenet] = useState(1);
  function changeComponent() {
    if (sendComponent == 1) {
      setSendComponenet(0);
    } else if (sendComponent == 0) {
      setSendComponenet(1);
    }
  }
  return (
    <div style={{ height: "0px" }}>
      {sendComponent == 1 ? (
        <div>
          <Main />
          <button
            className={`btn btn-primary ${styles.t}`}
            onClick={changeComponent}
          >
            {" "}
            About
          </button>
        </div>
      ) : (
        <div>
          <AboutPage />
          <button
            className={`btn btn-primary ${styles.x}`}
            onClick={changeComponent}
          >
            Back to App
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
