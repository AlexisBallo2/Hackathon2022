import { set } from "express/lib/application";
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
  var [dataToShow, setdataToShow] = useState("none");
  var [loading, setLoading] = useState(true);
  useEffect(() => {
    const getshit = () => {
      const data = fetch("/api/getData")
        .then((response) => response.json())
        .then((data) => console.log(data));
    };
    getshit();
  }, []);

  return (
    <div>
      SearchReturn Here
      <button onClick>Click me!</button>
      {/* {loading ? "Loading" : dataToShow.data} */}
    </div>
  );
};

export default SearchReturn;
