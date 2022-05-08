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
    console.log(dat.data);
    if (sc != "") {
      var i = 0;
      var len = Object.keys(dat.data).length;
      while (i < len) {
        console.log(i);
        console.log(dat.data[i]);
        if (sc != dat.data[i].itemOrService) {
          delete dat.data[i];
        }
        i += 1;
      }
    }
    console.log(dat.data);
    setdataToShow(dat.data);
  }
  const [dataToShow, setdataToShow] = useState([]);
  const [selectedItem, setSelectedItem] = useState(0);

  //this function is for getting all the data from the database
  const getshit = async () => {
    const response = await fetch("/api/getData");
    const data = await response.json();
    new1(data);
  };

  const itemClick = (index) => () => {
    console.log(index);
    setSelectedItem(index);
  };

  return (
    <div className={styles.entireDiv}>
      <title>Midd XChange</title>
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
            {dataToShow.map((item, index) => (
              <span className={styles.itemcontainer}>
                <div
                  key={item.ID}
                  className={styles.indivBoxes}
                  onClick={itemClick(index)}
                >
                  <div className={styles.itemNamePrice}>
                    <span className> Item : {item.itemOrService} </span>
                    <br />
                    <span className> Mode : {item.bs} </span>
                    <br />
                    <span className> User : {item.givenName} </span>
                    <br />
                    <span className> Price :${item.price} </span>
                  </div>
                  <img className={styles.itemImg} src={item.image} />
                </div>
              </span>
            ))}
          </div>
          {/* SideBar Code */}
          <div>
            {dataToShow.length == 0 ? (
              <div> </div>
            ) : (
              <GetPostsShit data={dataToShow} selected={selectedItem} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function GetPostsShit(props) {
  console.log(props);
  if (props.data == undefined) {
    return <div> Nothing to Show</div>;
  } else {
    return (
      <div className={styles.sideBar}>
        {props.data.map((item) =>
          item.ID - 1 == props.selected ? (
            <div key={item.ID}>
              <div className={styles.aa}> {item.itemOrService}</div>
              <div className={styles.bb}>
                {item.bySellRentBorrow == null
                  ? "[type]"
                  : item.bySellRentBorrow}{" "}
              </div>
              <div className={styles.cc}>{item.price}</div>
              <div className={styles.dd}>
                {" "}
                {item.user == null
                  ? "contact [User] for more information"
                  : item.user}{" "}
              </div>
            </div>
          ) : (
            <div> </div>
          )
        )}
      </div>
    );
  }
}

export default SearchReturn;
