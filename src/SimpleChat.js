import React, { Component } from "react"; // 21

import {
    Rol,
    SetProperty,
    CreateContext,
    DeleteContext,
    ContextOfRole,
    ViewOnExternalRole,
    ExternalViewOfBoundContext,
    RolBinding,
    View,
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
              <Col lg={3}>
                <Rol rol="Chats">
                  <PSRol.Consumer>
                    {value =>
                      <Row>
                        <RolBinding>
                          <View viewname="allProperties">
                            <PSView.Consumer>
                              {value => <Card>
                                <Card.Body>
                                  <p>Chat met: {value.propval("WithPartner")}</p>
                                </Card.Body>
                              </Card>}
                            </PSView.Consumer>
                          </View>
                        </RolBinding>
                      </Row>
                    }
                  </PSRol.Consumer>
                </Rol>
                <Row>
                  <Card>
                    <Card.Body>
                      <CreateContext rolname="Chats" contextname="model:SimpleChat$Chat">
                        <CreateButton/>
                      </CreateContext>
                    </Card.Body>
                  </Card>
                </Row>
              </Col>
              <Col lg={6} className="border p-3">
              </Col>
              <Col lg={3} className="border p-3">
                <Rol rol="PotentialPartners">
                  <View viewname="allProperties">
                    <Row>
                      <PSView.Consumer>
                        {value => <Card>
                          <Card.Body>
                            <p>{value.propval("Voornaam")}</p>
                          </Card.Body>
                        </Card>}
                      </PSView.Consumer>
                    </Row>
                  </View>
                </Rol>
              </Col>
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
