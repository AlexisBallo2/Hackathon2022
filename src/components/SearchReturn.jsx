import { NextPage } from "next";
import { useState, useEffect } from "react";
import styles from "./SearchReturn.module.css";
//to submit a book into the database

// const getallInformation = async () => {
//   const response = await fetch("/api/getData");
//   const data = await response.json();
//   console.log("data", data);
//   setdataToShow(data);
// };

const SearchReturn = () => {
  function new1(dat) {
    console.log("dat", dat.data);
    setdataToShow(dat.data);
    console.log(dataToShow);
  }
  const [dataToShow, setdataToShow] = useState([]);

  const getshit = async () => {
    const response = await fetch("/api/getData");
    const data = await response.json();
    new1(data);
  };
  return (
    <div className={styles.entireDiv}>
      <div className={styles.returnItems}>
        <button onClick={getshit}>Click me!</button>
        <div className={styles.box}>
          {dataToShow.map((item) => (
            <div key={item.ID} className={styles.indivBoxes}>
              <span className={styles.a}> Name : {item.itemOrService}</span>

              <span className={styles.b}>
                {" "}
                <p>Price : {item.price}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchReturn;
