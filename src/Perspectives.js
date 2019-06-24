// The screen for model:Perspectives$PerspectivesSysteem.

import React from "react";
import {Context, Rol, PSRol, BindRol, PSRolBinding, View, PSView, RolBinding} from "perspectives-react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export function buitenRolBeschrijving()
{
  return <Context contexttype="model:Perspectives$PerspectivesSysteem" contextinstance="model:User$MijnSysteem">
      <Container>
        <Row>
          <BindRol rol="modelsInUse">
            <PSRolBinding.Consumer>
              {value =>
                <Col lg={6} className="border p-3"
                    onDragOver={ev => ev.preventDefault()}
                    onDrop={ev => {value.bindrol( JSON.parse( ev.dataTransfer.getData("PSRol") ) ); ev.target.classList.remove("border-primary")}}
                    onDragEnter={(ev) => ev.target.classList.add("border-primary") }
                    onDragLeave={ev => ev.target.classList.remove("border-primary")}>
                    <h4>In gebruik</h4>
                    <Rol rol="modelsInUse">
                      <PSRol.Consumer>
                        {value => <div draggable key={value.rolinstance} onDragStart={ev => ev.dataTransfer.setData("PSRol", JSON.stringify(value))}>
                          <RolBinding>
                            <View viewname="allProperties">
                              <PSView.Consumer>
                                {value => <Card>
                                  <Card.Body>
                                      <p>{value.contextLabel}</p>
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
            <h4>Beschikbaar</h4>
            <Rol rol="modellen">
              <View viewname="allProperties">
                <PSView.Consumer>
                  {value => <Card draggable key={value.rolinstance} onDragStart={ev => ev.dataTransfer.setData("PSRol", JSON.stringify(value))}>
                    <Card.Body>
                      <p>{value.contextLabel}</p>
                    </Card.Body>
                  </Card>}
                </PSView.Consumer>
              </View>
            </Rol>
          </Col>
        </Row>
      </Container>
    </Context>
}
