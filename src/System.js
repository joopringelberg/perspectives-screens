// The screen for model:System$PerspectivesSystem. 4

import React from "react";
import {Context, Rol, PSRol, BindRol, PSRolBinding, View, PSView, RolBinding} from "perspectives-react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'; //3

export function perspectivesSystem_User()
{
  return <Context contexttype="model:System$PerspectivesSystem" contextinstance="model:User$MijnSysteem">
      <Container>
        <Row>
          <BindRol rol="ModelsInUse">
            <PSRolBinding.Consumer>
              {value =>
                <Col lg={6} className="border p-3"
                    onDragOver={ev => ev.preventDefault()}
                    onDrop={ev => {value.bindrol( JSON.parse( ev.dataTransfer.getData("PSRol") ) ); ev.target.classList.remove("border-primary")}}
                    onDragEnter={(ev) => ev.target.classList.add("border-primary") }
                    onDragLeave={ev => ev.target.classList.remove("border-primary")}>
                    <h4>In gebruik</h4>
                    <Rol rol="ModelsInUse">
                      <PSRol.Consumer>
                        {value => <div draggable key={value.rolinstance} onDragStart={ev => ev.dataTransfer.setData("PSRol", JSON.stringify(value))}>
                          <RolBinding>
                            <View viewname="allProperties">
                              <PSView.Consumer>
                                {value => <Card>
                                  <Card.Body>
                                      <p>{value.Name}</p>
                                      <p>{value.Description}</p>
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
            <Rol rol="Modellen">
              <View viewname="allProperties">
                <PSView.Consumer>
                  {value => <Card draggable key={value.rolinstance} onDragStart={ev => ev.dataTransfer.setData("PSRol", JSON.stringify(value))}>
                    <Card.Body>
                      <p>{value.Name}</p>
                      <p>{value.Description}</p>
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
