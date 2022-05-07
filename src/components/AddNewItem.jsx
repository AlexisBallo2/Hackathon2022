import react from "react";
import { useState } from "react";

async function submitItem(i, pt, e, u, b, p) {
  const response = await fetch("/api/addItem", {
    method: "POST",
    body: JSON.stringify({
      itemOrService: i,
      publishTime: pt,
      endTime: e,
      user: u,
      bySellRentBorrow: b,
      price: p,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}

function AddNewItem() {
  //this makes a new item into the database
  function call1() {
    var i = prompt("item");
    var pt = prompt("pt");
    var et = prompt("et");
    var u = prompt("user");
    var bs = prompt("bsrb");
    var p = prompt("price");
    submitItem(i, pt, et, u, bs, p);
  }

  return (
    <div>
      <button onClick={call1}>New Item</button>
    </div>
  );
}

export default AddNewItem;
