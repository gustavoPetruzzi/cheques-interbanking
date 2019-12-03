import React from 'react';
import Table from 'react-bootstrap/Table';
import classes from './ChequesListado.module.css';
const chequesListado = (props) =>{

  const dataCheques = props.cheques
    .map(cheque =>{
      return (
        <tr key={Math.random()}>
          <td></td>
          <td>{ cheque.importe }</td>
          <td> { cheque.interes} </td>
          <td> {cheque.gasto} </td>
          <td> {cheque.iva} </td>
          <td> {cheque.total} </td>
        </tr>
      )
    });

  return(
    <Table className={classes.Item} striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th> Importe </th>
          <th> Interes </th>
          <th> Gasto </th>
          <th> Iva </th>
          <th> Total</th>
        </tr>
      </thead>
      <tbody>
        {dataCheques}
        <tr className="table-success">
          <td>Total</td>
          <td style={{fontWeight: 'bold'}}> {props.cheques.reduce((ac, next) => ac + parseFloat(next.importe), 0).toFixed(2)} </td>
          <td style={{fontWeight: 'bold'}}> {props.cheques.reduce((ac, next) => ac + parseFloat(next.interes), 0).toFixed(2)} </td>
          <td style={{fontWeight: 'bold'}}> {props.cheques.reduce((ac, next) => ac + parseFloat(next.gasto), 0).toFixed(2)} </td>
          <td style={{fontWeight: 'bold'}}> {props.cheques.reduce((ac, next) => ac + parseFloat(next.iva), 0).toFixed(2)} </td>
          <td style={{fontWeight: 'bold'}}> {props.cheques.reduce((ac, next) => ac + parseFloat(next.total), 0).toFixed(2)} </td>
        </tr>
      </tbody>
    </Table>
  )
};

export default chequesListado;