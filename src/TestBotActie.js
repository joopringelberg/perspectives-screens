import React, { Component } from "react"; // 43

import {
    Rol,
    SetProperty,
    CreateContext,
    DeleteContext,
    ContextOfRole,
    ViewOnExternalRole,
    ExternalViewOfBoundContext,
    PSView,
    PSRol} from "perspectives-react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// model:TestBotActie$Tests$Gebruiker
export function tests_Tester()
{
  return (<Container role="region" aria-roledescription="TestBotAction App">
            <Row>
              <header className="App-header">
                <h1>Actie voorbeeld formulier</h1>
              </header>
            </Row>
            <Row>
              <Form>
                <Rol rol="TestInstances">
                  <ExternalViewOfBoundContext viewname="allProperties">
                    <TestBotActie/>
                  </ExternalViewOfBoundContext>
                </Rol>
                <Card>
                  <Card.Body>
                    <CreateContext rolname="TestInstances" contextname="model:TestBotActie$Test">
                      <CreateButton/>
                    </CreateContext>
                  </Card.Body>
                </Card>
              </Form>
            </Row>
        </Container>);
}

function TestBotActie (props)
{
  return (
    <PSView.Consumer>
      {value => <Card>
            <Card.Body>
              <Form.Group as={Row} controlId="testBotActie">
                <Form.Label column sm="8">Afhankelijke property</Form.Label>
                <Col sm="4">
                  <Form.Control readOnly={true} plaintext="true" value={value.propval("V2")}></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="propsEqual">
                <Form.Label column sm="8">Zijn properties gelijk?</Form.Label>
                <Col sm="4">
                  <Form.Control readOnly={true} plaintext="true" value={value.propval("PropsEqual")}></Form.Control>
                </Col>
              </Form.Group>
              <SetProperty propertyname="Trigger">
                <TriggerInput/>
              </SetProperty>
              <SetProperty propertyname="V1">
                <V1Input/>
              </SetProperty>
              <ContextOfRole>
                <DeleteContext>
                  <DeleteButton/>
                </DeleteContext>
              </ContextOfRole>
            </Card.Body>
          </Card>
        }
    </PSView.Consumer>
  );
}

function TriggerInput (props)
{
  return (
    <Form.Group as={Row} controlId="TriggerInput">
      <Col sm="8">
        <Form.Label>Actie aan of uit?</Form.Label>
        <Form.Text className="text-muted">
          Alleen als de trigger 'true' is, wordt de onafhankelijke property naar de afhankelijke gekopieerd.
        </Form.Text>
      </Col>
      <Col sm="4">
        <ToggleButtonGroup type="checkbox" defaultValue={props.defaultvalue} onBlur={e => props.setvalue(e.target.value)} >
          <ToggleButton value={"true"}>true</ToggleButton>
          <ToggleButton value={"false"}>false</ToggleButton>
        </ToggleButtonGroup>
      </Col>
    </Form.Group>);
}

function V1Input (props)
{
  return (
    <Form.Group as={Row} controlId="v1Input">
      <Col sm="8">
        <Form.Label>Geef de onafhankelijke property een waarde:</Form.Label>
      </Col>
      <Col sm="4">
        <Form.Control defaultValue={props.defaultvalue} onBlur={e => props.setvalue(e.target.value)} />
      </Col>
    </Form.Group>
  );
}

function CreateButton (props)
{
  const ctxt = {
    "rollen": { "model:TestBotActie$Test$Tester":  [ { "properties": {}, "binding": "usr:Me" } ] },
    "externeProperties": {"model:TestBotActie$Test$External$Trigger": ["true"]}
  };
  return (<Button variant="primary" onClick={e => props.create(ctxt)}>Voeg een test toe</Button>);
}

function DeleteButton (props)
{
  // return (
    // <PSRol.Consumer>
    //   {value => <Button variant="danger" onClick={e => {props.delete(); value.removerol()}}>Verwijder</Button>}
    // </PSRol.Consumer>
    // );
  return (<Button variant="danger" onClick={e => props.delete()}>Verwijder</Button>);
}
