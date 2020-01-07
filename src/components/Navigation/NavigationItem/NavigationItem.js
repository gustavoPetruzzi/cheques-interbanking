import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';
const navigationItem = (props) =>(
  <li className={classes.NavigationItem}>
    <NavLink 
      to={props.link}
      isActive={(match, location) =>{
        if(!match){
          return false;
        }
        
        return match.isExact || match.url === '/interbanking';
      }}
      activeClassName={ classes.active }
    >

        {props.children}
    </NavLink>
    
  </li>
)
export default navigationItem;

/*
isActive={(match, location) =>{
        
}}

*/