import React,{Component} from 'react';

import classes from './Cuentas.module.css';
import axios from '../../axios';
import Button from 'react-bootstrap/Button';
import Modal from '../../components/UI/Modal/Modal';
import Auxi from '../../hoc/Auxi';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
class Cuentas extends Component{
    
    state ={
        cliente: 'C16884A',
        cargando: false,
        archivo: null,
        resultado: false,
        link: ''
        
    }

    archivoHandler= event =>{
        this.setState({
            archivo: event.target.files[0]
        })
    }
    mandar = () =>{
        const formData = new FormData();
        
        formData.append('archivo', this.state.archivo);
        formData.append('cliente', this.state.cliente);
        this.setState({cargando: true});
        axios.post('/generarAltaCuenta', formData)
            .then(response =>{
                
                this.props.agregarDatos(response.data.cuentas, response.data.errores);
                this.setState({
                    resultado: true,
                    cargando:false,
                    link: response.data.link
                });
            })
            .catch(error =>{
                console.log(axios.getUri());
            })
    }



    modalHandler = () =>{
        this.setState({resultado: false});
        return false;
    }

    ir = (tipo) =>{
        if(tipo === 'cuentas'){
            this.props.history.push('/interbanking/listado/cuentas/');
        }
        else if( tipo === 'errores'){
            this.props.history.push('/interbanking/listado/cuentas/errores');
        }

    }
    render(){
        

        let info = (
            <div>
                <p> Cantidad de transferencias: <span style={{fontWeight: 'bold'}}>{this.props.cts.length}</span></p>
                <p> Cantidad de errores: <span style={{fontWeight: 'bold'}}>{this.props.ers.length}</span></p>
                <Button variant="primary" href={'https://desolate-wildwood-15473.herokuapp.com/descargar?archivo=' + this.state.link} target="_target" block>Descargar</Button>
                <Button variant="info" onClick={() => this.ir('cuentas')} block>Ver listado de cuentas</Button>
                <Button variant="danger" block onClick={() => this.ir('errores')} >Ver cuentas erroneas</Button>
            </div>
        )
        
        return(
            <Auxi>
                
                <Modal show={this.state.cargando}  >
                    <Spinner />
                </Modal>
                <Modal show={this.state.resultado} modalClosed={this.modalHandler}>
                    {info}
                </Modal>
                <div className={classes.Principal}>
                    <form>
                        <div className={classes.Input} >
                            <label className={classes.Label}>Nro Cliente</label>
                            <input type="text" className={classes.InputElement} value={this.state.cliente} onChange={(event) => this.setState({cliente: event.target.value})} />
                        </div>
                        <input type="file" style={{marginTop: '5%'}} name="archivo" onChange={this.archivoHandler} />
                        <Button className={classes.Button} variant="primary" size="lg" block onClick={this.mandar}>Generar cuentas</Button>
                    </form>
                </div>
            </Auxi>
        )
    }
}

const mapStateToProps = state =>{
    return{
        cts: state.cuentas,
        ers: state.errores
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        agregarDatos: (cuentas, errores) =>dispatch({type: actionTypes.GUARDAR_CUENTAS, cuentas: cuentas, errores: errores})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cuentas);

