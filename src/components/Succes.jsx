import React from 'react'
import classes from './sucess.module.css'
import { useState } from 'react'
import Main from './Main'

function Succes(props) {
  const [clicked, setClicked] = useState(false)

  function handleClick(){
    setClicked(true)
  }

  return (!clicked ? 
    <div className={classes.container}>
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
    <h1>Thanks for <br/> subscribing!</h1>
    <p>A confirmation email has been sent to<br/> <b>{props.sucess}</b> Please open it and click<br /> the button inside to confirm your subscription.</p>
    <button onClick={handleClick}>Dismiss message</button>
</div>
   
 : <Main /> )
}

export default Succes