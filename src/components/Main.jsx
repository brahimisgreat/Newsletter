import React from "react";
import classes from "./Main.module.css";
import pic from "../assets/images/illustration-sign-up-desktop.svg";

function Main() {
  return (
    <div className={classes.container}>
      <div className={classes.kidtainer}>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly<br/>updates on:</p>
        <ul>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>product discovery and building what matters</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>Measuring to ensure updates are a success</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>And much more!</li>
        </ul>
        <form>
            <label>Email address</label>
            <input type="email" placeholder="email@company.com"/>
            <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>
      <img src={pic} />
    </div>
  );
}

export default Main;
