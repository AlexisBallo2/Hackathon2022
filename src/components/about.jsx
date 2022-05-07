import React, { useState } from "react";

import styles from "./about.module.css";


const about = () => {
  return (
    <div className = {styles.aboutPage}> 
    <title>About Us - Midd XChange</title>
    <h1>About Midd XChange</h1>
    <p>The Middlebury community has long been in need of a centralized website to connect people through an informal market
       economy. Midd XChange seeks to fill this gap. We seek to foster further interconnectdness in the Middlebury community 
       through connecting buyers, renters, and sellers.</p> <br></br>
    <p>Users of the site can browse postings through our easy-to-use scroll panel. Clicking on a post will provide contact information of the seller. 
      To add a post, sellers can click the "list item" button conveniently located in the top-left corner of our website. 
      After providing a photo of the product or service, sellers will fill out information.</p> <br> </br>
    <p>Examples of posts involve listing bikes for rental to get into town, cooking supplies for a fun Friday baking sesh, 
      swimmers offering swim lessons, seniors getting rid of items for graduation, spike-ball nets and other outdoor 
      recreation activities. The possibilities are limitless.</p> <br></br>
    <p>Our website can lower entrance barriers to hobbies and skills through providing rental abilities or lessons at affordable
       prices. Crowd-sourcing the informal Middlebury economy, allowing students to gain access to resources 
       they might not have had access to previously.  </p> <br></br>
    <p>Authors: </p><a href = "https://github.com/AlexisBallo2">Alexis Ballo</a> <br></br>
    <a href="https://github.com/terryluongo">Terry Luongo</a> <br></br>
    <a href = "https://github.com/LiamPatty">Liam Patty</a> <br></br>
    <a href = "https://github.com/jsandoval2610">Julian Sandoval</a> <br></br>
    <a href = "https://github.com/jpaul342">Jack Paul</a> <br></br>
    
    

    </div>
  );
};

export default about;