import SearchReturn from "../components/SearchReturn";
import styles from "./IndexJs.module.css";
import NavBar from "../components/SampleComponent/NavBar";
import CookieConsent, { Cookies } from "react-cookie-consent";

const Home = () => {
  return (
    <div className={styles.fullPage}>
      <NavBar />
      <SearchReturn />

      <CookieConsent
        onAccept={(byScroll) => {
          alert(`yay! \n by scrolling? ${byScroll}`);
        }}
        debug={true}
        enableDeclineButton
        acceptOnScroll
        acceptOnScrollPercentage={80}
        declineButtonText="Decline (optional)"
        onDecline={() => {
          alert("nay!");
        }}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
    </div>
  );
};

export default Home;
