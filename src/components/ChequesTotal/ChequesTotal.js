import React from 'react';
import classes from './ChequesTotal.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const chequesTotal = (props) =>(
    <Container className={classes.Container}>
      <Row>
        <Col>
          Importe:  {props.cheques.reduce((ac, next) => ac + parseFloat(next.importe), 0)}
        </Col>

        <Col>
          Interes:  {props.cheques.reduce((ac, next) => ac + parseFloat(next.interes), 0)}
        </Col>

        <Col>
          Gasto:  {props.cheques.reduce((ac, next) => ac + parseFloat(next.gasto), 0)}
        </Col>

        <Col>
          Iva:  {props.cheques.reduce((ac, next) => ac + parseFloat(next.iva), 0)}
        </Col>
        <Col>
          Total:  {props.cheques.reduce((ac, next) => ac + parseFloat(next.total), 0)}
        </Col>
      </Row>
    </Container>
)

export default chequesTotal