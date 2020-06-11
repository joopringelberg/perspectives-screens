// The screen for model:System$PerspectivesSystem. 14

import React from "react";
import {Context, Rol, PSRol, BindRol, PSRolBinding, View, PSView, RolBinding, ExternalRole} from "perspectives-react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'; //11

import Octicon, {ArrowRight} from '@primer/octicons-react'

export function perspectivesSystem_User()
{
  return <Container>
      <Row>
        <BindRol rol="ModelsInUse">
          <PSRolBinding.Consumer>
            {value =>
              <Col lg={6} className="border p-3"
                  onDragOver={ev => ev.preventDefault()}
                  onDrop={ev => {value.bindrol( JSON.parse( ev.dataTransfer.getData("PSRol") ) ); ev.target.classList.remove("border-primary")}}
                  onDragEnter={(ev) => ev.target.classList.add("border-primary") }
                  onDragLeave={ev => ev.target.classList.remove("border-primary")}>
                  <h4>In use</h4>
                  <Rol rol="ModelsInUse">
                    <PSRol.Consumer>
                      {value => <div draggable key={value.rolinstance} onDragStart={ev => ev.dataTransfer.setData("PSRol", JSON.stringify(value))}>
                        <RolBinding>
                          <View viewname="allProperties">
                            <PSView.Consumer>
                              {value => <Card>
                                <Card.Body>
                                  <p>{value.propval("Name")}</p>
                                  <p>{value.propval("Description")}</p>
                                </Card.Body>
                              </Card>}
                            </PSView.Consumer>
                          </View>
                        </RolBinding>
                      </div>}
                    </PSRol.Consumer>
                  </Rol>
              </Col>
            }
          </PSRolBinding.Consumer>
        </BindRol>
        <Col lg={6} className="border p-3">
          <h4>In Repository</h4>
          <Rol rol="Modellen">
            <View viewname="allProperties">
              <PSView.Consumer>
                {value => <Card draggable key={value.rolinstance} onDragStart={ev => ev.dataTransfer.setData("PSRol", JSON.stringify(value))}>
                  <Card.Body>
                    <p>{value.propval("Name")}</p>
                    <p>{value.propval("Description")}</p>
                  </Card.Body>
                </Card>}
              </PSView.Consumer>
            </View>
          </Rol>
        </Col>
      </Row>
    </Container>
}

function Message()
{
  return <Form.Group as={Row}>
            <Form.Label column sm="3">You are invited:</Form.Label>
            <Col sm="9">
              <ExternalRole>
                <View viewname="allProperties">
                  <PSView.Consumer>
                    {props => <Form.Control className="font-italic" plaintext readOnly defaultValue={props.propval("Message")}/>}
                  </PSView.Consumer>
                </View>
              </ExternalRole>
            </Col>
          </Form.Group>
}

export function invitation_Guest()
{
  return (<Container>
    <Message/>
    <Form>
      <Form.Group as={Row} controlId="initiator" className="align-items-center">
        <Col sm="4">
          <Rol rol="Guest">
            <View viewname="allProperties">
              <PSView.Consumer>
                {value => <Card draggable key={value.rolinstance} onDragStart={ev => ev.dataTransfer.setData("PSRol", JSON.stringify(value))}>
                  <Card.Body>
                    <p>Contact card of {value.propval("Voornaam")}.</p>
                  </Card.Body>
                </Card>}
              </PSView.Consumer>
            </View>
          </Rol>
        </Col>
        <Col sm="4 text-center">
          <Octicon icon={ArrowRight} size='large'/>
        </Col>
        <Col sm="4">
          <Rol rol="Partner">
            <PSRolBinding.Consumer>
            {value =>
              <Card>
                <Card.Body onDragOver={ev => ev.preventDefault()}
                  onDrop={ev => {value.bindrol( JSON.parse( ev.dataTransfer.getData("PSRol") ) ); ev.target.classList.remove("border-primary")}}
                  onDragEnter={(ev) => ev.target.classList.add("border-primary") }
                  onDragLeave={ev => ev.target.classList.remove("border-primary")}>
                  <p>To accept the invitation, drag your own contact card over here and drop it.</p>
                </Card.Body>
              </Card>
            }
            </PSRolBinding.Consumer>
            <div/>
          </Rol>
        </Col>
        </Form.Group>
      </Form>
    </Container>)
}
