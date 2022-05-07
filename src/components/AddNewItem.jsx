import react from "react";
import { useState, useRef } from "react";
import styles from "./AddNewItem.module.css";

let urlEncidedShit = "";
async function submitItem(i, pt, et, u, b, img, p) {
  const response = await fetch("/api/addItem", {
    method: "POST",
    body: JSON.stringify({
      itemOrService: i,
      publishTime: pt,
      entryTime: et,
      user: u,
      bySellRentBorrow: b,
      image: img,
      price: p,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}

function call1(user, image) {
  var i = prompt("Item/Service");
  var pt = prompt("Payment Time");
  var et = new Date().toString();
  var u = user;
  var bs = prompt("Buy, Sell, or Borrow");
  var image = image;
  var p = prompt("Price");
  submitItem(i, pt, et, u, bs, image, p);
}

function FileUploadPage(passingProps) {
  const [selectedFile, setSelectedFile] = useState("");

  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    let baseURL = "";
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      // Make a fileInfo Object
      console.log("Called", reader);
      baseURL = reader.result;
      setSelectedFile(baseURL);
    };
    reader.DONE;
    setIsFilePicked(true);
    urlEncidedShit = baseURL;
    if (isFilePicked != false) {
      console.log("value of selectedFIle", selectedFile);
      call1(passingProps.info.userName, selectedFile);
    }
  };

  return (
    <div>
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <label className="btn btn-primary">
        <i className="fa"></i> List Item
        <input
          type="file"
          style={{ display: "none" }}
          name="file"
          onChange={changeHandler}
        />
      </label>
    </div>
  );
}

function AddNewItem(props) {
  const [image, setImage] = useState(null);
  console.log("image url is ", urlEncidedShit);
  const [selectedFile, setSelectedFile] = useState(null);
  //this makes a new item into the database

  return (
    <div>
      <div>
        <br />
        <br />
        <FileUploadPage info={props} />
      </div>
    </div>
  );
}

export default AddNewItem;
