import React from 'react';
import classes from './Layout.module.css'
import Toolbar from '../Toolbar/Toolbar';

import {Route} from 'react-router-dom';
import Home from '../Home/Home';
import Interbanking from '../Interbanking/Interbanking'
import Cheques from '../../Containers/Cheques/Cheques';
import Cuentas from '../../Containers/Cuentas/Cuentas';
import Transferencias from '../../Containers/Transferencias/Transferencias';
import Listado from '../Listado/Listado';
const layout = (props) =>(
  <div>
    <Toolbar />
    <div className={classes.Layout}>
      <Route exact path="/" component={Home} />
      <Route exact path="/cheques" component={Cheques} />
      <Route exact path="/interbanking" component={Interbanking} />
      <Route exact path="/interbanking/cuentas" component={Cuentas} />
      <Route exact path="/interbanking/transferencias" component={Transferencias} />
      <Route exact path="/interbanking/listado/:tipo" render={() => <Listado />} />
      <Route exact path="/interbanking/listado/:tipo/errores" render={() => <Listado errores />} />

    </div>
  </div>
)
export default layout;