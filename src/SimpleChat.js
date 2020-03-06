import React, { Component } from "react"; // ###48###

import * as PR from "perspectives-react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';


// model:SimpleChat$ChatApp$Chatter
export function chatApp_Chatter()
{
  return (<Container>
            <Row>
              <header className="App-header">
                <h1>Simple chats</h1>
              </header>
            </Row>

            <Row>
              <Col>
              <Tab.Container id="left-tabs-chats" defaultActiveKey="first" mountOnEnter={true}>
                <Row>
                  <Col lg={3}>
                    <Nav variant="pills" className="flex-column">
                      <PR.Rol rol="Chats">
                        <PR.ExternalViewOfBoundContext viewname="allProperties">
                          <PR.PSView.Consumer>
                            {value => <Nav.Item>
                                <Nav.Link eventKey={value.rolinstance}>Chat met: {value.propval("WithPartner")}</Nav.Link>
                              </Nav.Item>}
                          </PR.PSView.Consumer>
                        </PR.ExternalViewOfBoundContext>
                      </PR.Rol>
                    </Nav>
                  </Col>
                  <Col lg={9}>
                    <Tab.Content>
                      <PR.Rol rol="Chats">
                        <PR.RolBinding>
                          <PR.PSRol.Consumer>
                            {value => <Tab.Pane eventKey={value.rolinstance}>
                                <PR.Screen rolinstance={value.rolinstance}/>
                              </Tab.Pane>
                            }
                          </PR.PSRol.Consumer>
                        </PR.RolBinding>
                      </PR.Rol>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
              </Col>
              <Col lg={3} className="border p-3">
                <PR.Rol rol="PotentialPartners">
                  <PR.View viewname="allProperties">
                    <Row>
                      <PR.PSView.Consumer>
                        {value => <Card draggable key={value.rolinstance} onDragStart={ev => ev.dataTransfer.setData("PSRol", JSON.stringify(value))}>
                          <Card.Body>
                            <p>{value.propval("Voornaam")}</p>
                          </Card.Body>
                        </Card>}
                      </PR.PSView.Consumer>
                    </Row>
                  </PR.View>
                </PR.Rol>
              </Col>
            </Row>
            <Row>
              <Card>
                <Card.Body>
                  <PR.CreateContext rolname="Chats" contextname="model:SimpleChat$Chat">
                    <CreateButton/>
                  </PR.CreateContext>
                </Card.Body>
              </Card>
            </Row>


        </Container>);
}

function CreateButton (props)
{
  const ctxt = {
    "rollen": { "model:SimpleChat$Chat$Initiator":  [ { "properties": {"model:SimpleChat$Chat$Initiator$MyText": ["Your message here!"]}, "binding": "usr:Me" } ] },
    "externeProperties": {}
  };
  return (<Button variant="primary" onClick={e => props.create(ctxt)}>Nieuwe chat</Button>);
}

// Context is Chat.
export function chat_Initiator()
{
  return (<Container>
      <Form>
        <Form.Group as={Row} controlId="initiator">
          <Form.Label column sm="3">Me:</Form.Label>
          <Col sm="9">
            <PR.Rol rol="Initiator">
              <PR.View viewname="allProperties">
                <PR.SetProperty propertyname="MyText">
                  <Utterance/>
                </PR.SetProperty>
              </PR.View>
            </PR.Rol>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="partner">
          <Form.Label column sm="3">Other:</Form.Label>
          <Col sm="9">
            <PR.Rol rol="Partner">
              <PR.PSRolBinding.Consumer>
              {value =>
                <Card>
                  <Card.Body onDragOver={ev => ev.preventDefault()}
                    onDrop={ev => {value.bindrol( JSON.parse( ev.dataTransfer.getData("PSRol") ) ); ev.target.classList.remove("border-primary")}}
                    onDragEnter={(ev) => ev.target.classList.add("border-primary") }
                    onDragLeave={ev => ev.target.classList.remove("border-primary")}>
                    <p>Drop card here! {value.rolinstance}</p>
                  </Card.Body>
                </Card>
              }
              </PR.PSRolBinding.Consumer>
              <PR.View viewname="allProperties">
                <PR.SetProperty propertyname="MyText">
                  <Utterance/>
                </PR.SetProperty>
              </PR.View>
            </PR.Rol>
          </Col>
        </Form.Group>
      </Form>
    </Container>)
}

function Utterance(props)
{
  return <Form.Control defaultValue={props.defaultvalue} onBlur={e => props.setvalue(e.target.value)} />;
}
