import { NextPage } from "next";
import { useState, useEffect } from "react";
//to submit a book into the database

// const getallInformation = async () => {
//   const response = await fetch("/api/getData");
//   const data = await response.json();
//   console.log("data", data);
//   setdataToShow(data);
// };

const SearchReturn = () => {
  function new1(dat) {
    setdataToShow(dat);
    console.log("dat", dat);
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
      SearchReturn Here
      <button onClick={getshit}>Click me!</button>
      <div></div>
    </div>
  );
};

export default SearchReturn;
