import React from 'react';
import classes from './Panel.module.css';
import { NavLink } from 'react-router-dom'


import Button from 'react-bootstrap/Button';

const panel = (props) =>(
  <div className={classes.Panel}>
    <div className={classes.Title}>
      <h2 className={classes.Text}> { props.title  }</h2>
    </div>
    <div className={classes.Body}>
      {props.children}
    </div>
    <div className={classes.Button}>
      <Button as={NavLink} variant="primary" to={props.link}>{props.button}</Button>  
    </div>
  </div>
)

export default panel;