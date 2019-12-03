import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import classes from './Toolbar.module.css'
const toolbar =  (props) =>(
  <nav className={classes.Toolbar}>
    <NavigationItems />
  </nav>
)

export default toolbar;