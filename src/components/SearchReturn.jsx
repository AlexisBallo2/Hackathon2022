import { useState, useEffect } from "react";
import styles from "./SearchReturn.module.css";
import AddItemComponent from "./AddNewItem";
import TextField from "@mui/material/TextField";
//import List from "./Components/List"
//to submit a book into the database

// const getallInformation = async () => {
//   const response = await fetch("/api/getData");
//   const data = await response.json();
//   console.log("data", data);
//   setdataToShow(data);
// };

function SearchReturn(props) {
  function new1(dat) {
    console.log("dat", dat.data);
    setdataToShow(dat.data);
    console.log(dataToShow);
  }
  const [dataToShow, setdataToShow] = useState([]);

  //this function is for getting all the data from the database
  const getshit = async () => {
    const response = await fetch("/api/getData");
    const data = await response.json();
    new1(data);
  };

  return (
    <div className={styles.entireDiv}>
      <AddItemComponent userName={props.givenName} />
      <div className={styles.main}>
        <div className={styles.searchcontainer}>
          <TextField
            className={styles.searchtext}
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
          />
          <button className={styles.searchbtn} onClick={getshit}>
            Search!
          </button>
        </div>
        <div className={styles.returnItems}>
          <div className={styles.box}>
            {dataToShow.map((item) => (
              <div key={item.ID} className={styles.indivBoxes}>
                <span className={styles.a}> Name : {item.itemOrService}</span>

                <span className={styles.b}>
                  {" "}
                  <p>Price : {item.price}</p>
                  <img src={item.image} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchReturn;
