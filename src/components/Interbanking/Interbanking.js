import React from 'react';
import Panel from '../Panel/Panel';
import classes from './Interbanking.module.css';
const interbanking = (props) =>(
    <div className={classes.Interbanking}>
        <Panel
         title="Cuentas"
         button="Generar cuentas"
         link="/interbanking/cuentas">
             Generar archivo .txt para cargar cuentas en interbanking
             a partir de un archivo excel (.xlsx/.xls)
         </Panel>

         <Panel
          title="Transferencias"
          button="Generar Transferencias"
          link="/interbanking/transferencias">
              Generar archivo .txt para confeccionar transferencias para sueldos o
              proveedores a partir de un archivo excel (.xlsx/.xls)
          </Panel>

    </div>
)

export default interbanking