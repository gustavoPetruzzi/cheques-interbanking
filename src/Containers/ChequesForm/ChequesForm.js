import React, {  Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class ChequesForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      importe: '',
      interes: '',
      gasto: '',
    }
  }


  handleChange = (event, tipo) =>{
    this.setState({[tipo]: event.target.value});
    
  }
  cheque = () =>{
    const cheque ={
      importe: this.state.importe,
      interes: this.state.interes,
      gasto: this.state.gasto
    }
    cheque.gasto = parseFloat(cheque.gasto);
    cheque.interes = parseFloat(cheque.interes);

    cheque['iva'] = (cheque.gasto + cheque.interes) * 0.21
    cheque['iva'] = cheque['iva'].toFixed(2);
    cheque['total'] = cheque.importe - cheque.gasto - cheque.interes - cheque.iva;
    cheque['total'] = cheque['total'].toFixed(2);
    return cheque;
  }

  vaciar = () =>{
    this.setState({})
  }
  render(){
      return(
        <Form>
          <Form.Group controlId="Importe">
            <Form.Label>Importe</Form.Label>
            <Form.Control type="number" placeholder="Ingrese el importe" 
            onChange={event => this.handleChange(event, 'importe')} />
          </Form.Group>

          <Form.Group controlId="Interes">
            <Form.Label>Interes</Form.Label>
            <Form.Control type="number" placeholder="Ingrese el interes"
            onChange={event =>this.handleChange(event,'interes')} />
          </Form.Group>
          <Form.Group controlId="Gastos">
            <Form.Label>Gastos</Form.Label>
            <Form.Control type="number" placeholder="Ingrese el gasto" 
            onChange={event => this.handleChange(event, 'gasto')}/>
          </Form.Group>
          <Button variant="primary" onClick={()=> this.props.agregar(this.cheque())} block size="lg">
            Agregar
          </Button>
          <Button variant="danger" onClick={this.props.vaciar} block size="lg">
            Vaciar
          </Button>
        </Form>
      )
    }
  
 
};

export default ChequesForm;