import React from 'react';
import Panel from '../Panel/Panel';
import classes from './Home.module.css';
const home = (props) =>{

    return(
        <div className={classes.Home}>
            <Panel 
             title="Cheques" 
             button="Ir a cheques"
             link="/cheques">
                Calcula el iva y el importe descontado total de los cheques a partir del importe, los gastos y
                el interes.
            </Panel>
            
            <Panel 
             title="Interbanking"
             button="Ir a interbanking"
             link="/interbanking">
                Genera archivos .txt para cargar cuentas o confeccionar transferencias a partir de un archivo
                excel (.xls/.xlsx)
            </Panel>
        </div>
    )
}

export default home

