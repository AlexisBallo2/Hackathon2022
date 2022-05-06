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
  async function getshit() {
    const data = await fetch("/api/getData")
      .then((response) => console.log(response))
      .then((data) => setdataToShow(data))
      .then(setLoading(false));
    return data;
  }
  var [dataToShow, setdataToShow] = useState("none");
  var [loading, setLoading] = useState(true);
  useEffect(() => {
    getshit().then((resposne) => setdataToShow(resposne));
  }, []);

  return (
    <div>
      SearchReturn Here
      <button onClick>Click me!</button>
    </div>
  );
};

export default SearchReturn;
