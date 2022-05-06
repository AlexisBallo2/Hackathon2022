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
    <div>
      <button onClick={getshit}>Click me!</button>
      <div className={styles.box}>
        {dataToShow.map((item) => (
          <div key={item.ID} className={styles.indivBoxes}>
            <div className={styles.a}> Name : {item.itemOrService}</div>

            <div className={styles.a}> Price : {item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchReturn;
