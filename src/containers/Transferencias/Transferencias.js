import React,{Component} from 'react';

import classes from './Transferencias.module.css';
import axios from '../../axios';
import Button from 'react-bootstrap/Button';
import Modal from '../../components/UI/Modal/Modal';
import Auxi from '../../hoc/Auxi';
import Spinner from '../../components/UI/Spinner/Spinner';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
class Transferencias extends Component{

    state ={
        cbu: '0170469720000000249207',
        cargando: false,
        archivo: null,
        resultado: false,
        info: null,
        tipo: 'sueldos',
        error: false,
        
    }

    archivoHandler= event =>{
        this.setState({
            archivo: event.target.files[0]
        })
    }
    mandar = () =>{
        
        const formData = new FormData();
        
        formData.append('archivo', this.state.archivo);
        formData.append('cbuPropio', this.state.cbu);
        this.setState({cargando: true});

        if(this.state.tipo === 'sueldos'){
            axios.post('/generarTransferenciasSueldos', formData)
            .then(response =>{
                console.log(response);
                this.props.agregarDatos(response.data.cuentas, response.data.errores);
                this.setState({
                    resultado: true,
                    cargando:false,
                    link: response.data.link
                });
            })
            .catch(error =>{
                this.setState({
                    cargando:false,
                    error: true,
                })
            })
        }
        else if(this.state.tipo === 'proveedores'){
            axios.post('/generarTransferenciasProveedores', formData)
                .then(response =>{
                    console.log(response);
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
    }



    modalHandler = () =>{
        if(this.state.resultado){
            this.setState({resultado: false});    
        }
        else if(this.state.error){
            this.setState({error: false});
        }
        return false;
    
    }


    ir = tipo =>{
        if(tipo === 'transferencias'){
            this.props.history.push('/interbanking/listado/transferencias');
        }
        else if(tipo === 'errores'){
            this.props.history.push('/interbanking/listado/transferencias/errores')
        
        }
    }


    render(){
        
        let info = (
            <div>
                <p> Cantidad de transferencias: <span style={{fontWeight: 'bold'}}>{this.props.trs.length}</span></p>
                <p> Cantidad de errores: <span style={{fontWeight: 'bold'}}>{this.props.ers.length}</span></p>
                <Button variant="primary" href={'https://desolate-wildwood-15473.herokuapp.com/descargar?archivo=' + this.state.link} target="_target" block>Descargar</Button>
                <Button variant="info" onClick={() => this.ir('transferencias')} block> Ver listado de transferencias</Button>
                <Button variant="danger" block onClick={() => this.ir('errores')} > Ver cuentas erroneas</Button>
            </div>
        );
        return(
            <Auxi>
                
                <Modal show={this.state.cargando}  >
                    <Spinner />
                </Modal>
                <Modal show={this.state.resultado} modalClosed={this.modalHandler}>
                    {info}
                </Modal>
                <Modal show={this.state.error} modalClosed={this.modalHandler}>
                    <h3>Hubo un error al procesar lo solicitado</h3>
                </Modal>
                <div className={classes.Principal}>
                    <form className={classes.Form}>
                        <div className={classes.Input} >
                            <label className={classes.Label}>Cbu</label>
                            <input type="text" className={classes.InputElement} value={this.state.cbu} onChange={(event) => this.setState({cbu: event.target.value})} />
                        </div>
                        <div className={classes.Input}>
                            <label className={classes.Label}>Seleccione el tipo de transferencia:</label>
                            <select className={classes.InputElement} value={this.state.tipo} onChange={(event)=> this.setState({tipo: event.target.value})}>
                                <option value="sueldos">Sueldos</option>
                                <option value="proveedores">Proveedores</option>
                            </select>
                        </div>
                        <input type="file" style={{marginTop: '5%'}} name="archivo" onChange={this.archivoHandler} />
                        <Button className={classes.Button} variant="primary" size="lg" block onClick={this.mandar}>Generar Transferencias</Button>
                    </form>
                </div>
            </Auxi>
        )
    }
}
const mapStateToProps = state =>{
    return{
        trs: state.transferencias,
        ers: state.errores,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        agregarDatos: (transferencias, errores) => dispatch({type: actionTypes.GUARDAR_TRANSFERENCIAS, transferencias: transferencias, errores: errores })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transferencias);

