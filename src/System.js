// The screen for model:System$PerspectivesSystem. 13

import React from "react";
import {Context, Rol, PSRol, BindRol, PSRolBinding, View, PSView, RolBinding} from "perspectives-react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'; //11

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

export function invitation_Guest()
{
  return (<Container>
    <Form>
      <Form.Group as={Row} controlId="initiator">
        <Col sm="4">
          <Rol rol="Guest">
            <View viewname="allProperties">
              <PSView.Consumer>
                {value => <Card draggable key={value.rolinstance} onDragStart={ev => ev.dataTransfer.setData("PSRol", JSON.stringify(value))}>
                  <Card.Body>
                    <p>{value.propval("Voornaam")}</p>
                  </Card.Body>
                </Card>}
              </PSView.Consumer>
            </View>
          </Rol>
        </Col>
        <Col sm="4">
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
                  <p>Drop card here! {value.rolinstance}</p>
                </Card.Body>
              </Card>
            }
            </PSRolBinding.Consumer>
            <p>Nu eronder</p>
          </Rol>
        </Col>
        </Form.Group>
      </Form>
    </Container>)
}
