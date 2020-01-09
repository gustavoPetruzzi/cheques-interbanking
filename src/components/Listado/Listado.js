import React from 'react';
import { withRouter } from 'react-router';  
import classes from './Listado.module.css';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
const listado = (props) =>{
    console.log(props.ers);
    let cabecera = null;
    let listado = null;
    if(props.match.params.tipo === 'cuentas'){
        if(props.errores){
            cabecera = (
                <tr>
                    <th>Cbu</th>
                    <th>Denominacion</th>
                    <th>Cuit</th>
                    <th>Error</th>
                </tr>
            )
            listado = props.ers
                .map(error =>{
                    return(
                        <tr key={Math.random()} >
                            <td>{error[0]}</td>
                            <td>{error[1]}</td>
                            <td>{error[2]}</td>
                            <td>{error[3]}</td>
                        </tr>
                    )
                })
        }
        else{
            cabecera = (
                <tr>
                    <th>Cbu</th>
                    <th>Denominacion</th>
                    <th>Cuit</th>
                </tr>
            )
            listado = props.cts
                .map(cuenta =>{
                    console.log(cuenta);
                    return(
                        <tr key={Math.random()}>
                            <td>{cuenta.cbu}</td>
                            <td>{cuenta.denominacion}</td>
                            <td>{cuenta.cuit}</td>
                        </tr>
                    )
                })
        }
    }
    else{
        if(props.errores){
            cabecera = (
                <tr>
                    <th>Cbu</th>
                    <th>Importe</th>
                    <th>Fila</th>
                    <th>Error</th>
                </tr>
            )
            listado = props.ers
            .map(error =>{
                return(
                    <tr key={Math.random()} >
                        <td>{error[0]}</td>
                        <td>{error[1]}</td>
                        <td>{error[2]}</td>
                        <td>{error[3]}</td>
                    </tr>
                )
            })
        }
        else{
            cabecera = (
                <tr>
                    <th>Cbu</th>
                    <th>Importe</th>
                </tr>
            )
            listado = props.trf
            .map(transferencia =>{
                return(
                    <tr key={Math.random()} >
                        <td>{transferencia.cbu}</td>
                        <td>{transferencia.importe}</td>
                    </tr>                    
                )
            })
        }
    }
    return(
        <div>
        <Table className={classes.Tabla} striped>
            <thead>
                {cabecera}
            </thead>
            <tbody>
                {listado}
            </tbody>
        </Table>    
        </div>    
    )
};

const mapStateToProps = state =>{
    return{
        cts: state.cuentas,
        trf: state.transferencias,
        ers: state.errores,
    }
}


export default withRouter(connect(mapStateToProps, null)(listado));
