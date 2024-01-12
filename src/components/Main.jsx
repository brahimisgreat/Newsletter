import React from "react";
import classes from "./Main.module.css";
import pic from "../assets/images/illustration-sign-up-desktop.svg";
import { useState } from 'react'
import Success from './Succes'


function Main() {
  const [email, setEmail] = useState('')

  function handleSubmit (e) {
    e.preventDefault();
  }

  
  return (
    <div className={classes.container}>
      <div className={classes.kidtainer}>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly<br/>updates on:</p>
        <ul>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>Product discovery and building what matters</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>Measuring to ensure updates are a success</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>And much more!</li>
        </ul>
        <form onSubmit={handleSubmit}>
            <label>Email address</label>
            <input type="email" placeholder="email@company.com" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>
      <img src={pic} />
    </div>
  );
}

export default Main;
