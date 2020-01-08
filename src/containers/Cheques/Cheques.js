import React, {Component} from 'react';
import ChequeListado from '../../components/ChequesListado/ChequesListado';

import ChequeForm from '../ChequesForm/ChequesForm';


import Jumbotron from 'react-bootstrap/Jumbotron';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import classes from './Cheques.module.css';
class Cheques extends Component{
  constructor(props){
    super(props);

    this.state={
      cheques : [],
    }
  }

  agregarHandler = (cheque) =>{
      let chequesActualizados =[...this.state.cheques]

            chequesActualizados.push(cheque);
      this.setState({cheques: chequesActualizados});


  }

  vaciarCheques = () =>{
    this.setState({ cheques: [] });
  }

  render(){
    return(
    <Jumbotron className={classes.Principal} fluid>
      <Container>
        <Row>
          <Col>
            <ChequeForm
              agregar={this.agregarHandler}
              vaciar={this.vaciarCheques}
            />
          </Col>
          <Col>
            <ChequeListado 
              cheques={this.state.cheques}
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    )
  }
}

export default Cheques;

/*
<Row>
<Col sm={12}>
  <ChequesTotal
    cheques={this.state.cheques}
    />
</Col> 
</Row>
*/