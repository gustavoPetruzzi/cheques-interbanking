import React, {Component} from 'react';
import classes from './Layout.module.css'
import Toolbar from '../Toolbar/Toolbar';

import Aux from '../../hoc/Auxi';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component{

  state= {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () =>{
    this.setState({showSideDrawer: false})
  }

  sideDrawerOpenHandler = () =>{
    this.setState((prevState) =>{
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render(){
    return(
      <Aux>
        <Toolbar
          open={this.sideDrawerOpenHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>

      </Aux>
    )
  }

}

export default Layout;