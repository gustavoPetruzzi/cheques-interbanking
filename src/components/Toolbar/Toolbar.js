import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToogle/DrawerToggle';
const toolbar =  (props) =>(
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.open} />
    <nav className={classes.DesktopOnly} >
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar;