import React from 'react';

import './App.css';

import Layout from './components/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Interbanking from './components/Interbanking/Interbanking';

import Cheques from './Containers/Cheques/Cheques';

import Cuentas from './Containers/Cuentas/Cuentas';
import Transferencias from './Containers/Transferencias/Transferencias';
import Listado from './components/Listado/Listado';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/cheques" component={Cheques} />
        <Route exact path="/interbanking" component={Interbanking} />
        <Route exact path="/interbanking/cuentas" component={Cuentas} />
        <Route exact path="/interbanking/transferencias" component={Transferencias} />
        <Route exact path="/interbanking/listado/:tipo" render={() => <Listado />} />
        <Route exact path="/interbanking/listado/:tipo/errores" render={() => <Listado errores />} />
      </Layout>
    </BrowserRouter>
  
  );
}

export default App;

/*
<div className="App">
        <Layout/>
</div>
*/
