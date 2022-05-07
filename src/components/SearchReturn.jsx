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
    var sc = document.getElementById("searchfield").value; // search contents
    for (let i = 0; i <= Object.keys(dat.data).length+1; i++) {
      console.log(i);
      if (sc != dat.data[i].itemOrService)
      {
        delete dat.data[i];
      }
    }
    setdataToShow(dat.data);
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
      <div className={styles.WrapperforAddItem}>
        <AddItemComponent userName={props.givenName} />
      </div>

      <div className={styles.main}>
        <div className={styles.searchcontainer}>
          <TextField
            className={styles.searchtext}
            id="searchfield"
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
                <span>
                  <img src={item.image} className={styles.images} />
                </span>
                <span className={styles.b}>
                  {" "}
                  <p style={{ "margin-top": "16px" }}>Price : {item.price}</p>
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
