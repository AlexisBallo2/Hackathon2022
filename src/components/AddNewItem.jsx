import react from "react";
import { useState } from "react";

async function submitItem(i, pt, e, u, b, d, p) {
  const response = await fetch("/api/addItem", {
    method: "POST",
    body: JSON.stringify({
      itemOrService: i,
      publishTime: pt,
      endTime: e,
      user: u,
      bySellRentBorrow: b,
      description : d,
      price: p,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}

function AddNewItem(props) {
  //this makes a new item into the database
  function call1() {
    var i = prompt("Item/Service");
    var pt = prompt("Payment Time");
    var et = prompt("Entry Time");
    var u = prompt("User ID");
    var bs = prompt("Buy, Sell, or Borrow");
    var d = prompt("Description of Request")
    var p = prompt("Price");
    submitItem(i, pt, et, u, bs, d, p);
  }

  return (
    <div>
      <button onClick={call1}>New Item</button>
    </div>
  );
}

export default AddNewItem;
