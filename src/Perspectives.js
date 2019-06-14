// The screen for model:Perspectives$PerspectivesSysteem.

import React from "react";
import {Context, Rol, PSRol, BindRol, PSRolBinding, View, PSView} from "perspectives-react";
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
                <Col lg={6} onDragOver={ev => ev.preventDefault()} onDrop={ev => value.bindrol( ev.dataTransfer.getData("id") )} className="border">
                    <Rol rol="modelsInUse">
                      <div>
                        <PSRol.Consumer>
                        {value => <li key={value.rolinstance}>{value.rolinstance}</li>}
                        </PSRol.Consumer>
                      </div>
                    </Rol>
                </Col>
              }
            </PSRolBinding.Consumer>
          </BindRol>
          <Col lg={6} className="border">
            <Rol rol="modellen">
              <View viewname="allProperties">
                <PSView.Consumer>
                  {value => <Card draggable key={value.rolinstance} onDragStart={ev => ev.dataTransfer.setData("id", value.rolinstance)}>
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
