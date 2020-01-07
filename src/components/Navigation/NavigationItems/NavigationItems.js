import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
const navigationItems = (props) =>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active> 
          Inicio
        </NavigationItem>
        <NavigationItem link="/cheques">
          Cheques
        </NavigationItem>
        <NavigationItem link="/interbanking">
          Interbanking
        </NavigationItem>
    </ul>
);


export default navigationItems;