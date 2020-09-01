// The screen for model:System$PerspectivesSystem. 40

const React = require("react");

import
  { Rol
  , PSRol
  , BindRol
  , PSRolBinding
  , View
  , PSView
  , RolBinding
  , ExternalRole
  , PerspectivesComponent
  , RoleInstances
  , roleInstance
  , RoleInstanceIterator
  , PSRoleInstances
  , AppContext
  , CardList
  , SimpleCardForRoleBinding
  , SimpleCardForRole
  , DropZone
  , emptyCard
  } from "perspectives-react";

import {Container, Form, Row, Col, Card} from "react-bootstrap";

import Octicon, {ArrowRight} from '@primer/octicons-react'

export function perspectivesSystem_User()
{
  return <Container role="region" aria-roledescription="System App">
      <Row>
        <BindRol rol="ModelsInUse">
          <Col lg={6} className="border p-3 d-flex">
            <ModelDropZone>
              <h4>In use</h4>
              <CardList rol="ModelsInUse">
                <SimpleCardForRoleBinding/>
              </CardList>
            </ModelDropZone>
          </Col>
        </BindRol>
        <Col lg={6} className="border p-3">
          <h4>In Repository</h4>
          <CardList rol="Modellen">
            <SimpleCardForRole/>
          </CardList>
        </Col>
      </Row>
    </Container>
}

////////////////////////////////////////////////////////////////////////////////
// MODELDROPZONE
// This ModelDropZone is specialised for System. To import a model, we just need to
// check the binding of the external role of the model description. The model then
// will load on the fly.
// The more general case of a DropZone must support explicit dropping.
////////////////////////////////////////////////////////////////////////////////
class ModelDropZone extends React.PureComponent
{
  constructor (props)
  {
    super(props);
    this.eventDiv = React.createRef();
  }
  checkBinding ( event, roleId, setSelectedCard, setPositionToMoveTo )
  {
    const component = this;
    const eventDivRect = component.eventDiv.current.getBoundingClientRect()
    switch(event.keyCode){
      case 13: // Enter
      case 32: // space
        // Unconditionally animate the movement of the card to the dropzone.
        setPositionToMoveTo( {x: eventDivRect.x + "px", y: eventDivRect.y + "px"} );
        // Now wait for the animation to end.
        setTimeout( function()
          {
            component.context.checkbinding( {rolinstance: roleId},
              function( bindingAllowed )
              {
                if ( bindingAllowed )
                {
                  setSelectedCard();
                  setPositionToMoveTo();
                  component.eventDiv.current.blur();
                }
                else {
                  //move back!
                  setPositionToMoveTo({x: "-1px", y: "-1px"});
                }
              } );
          },
          900)
        event.preventDefault();
        break;
      }
  }

  render ()
  {
    const component = this;
    return  <AppContext.Consumer>{ ({selectedRole, setSelectedCard, setPositionToMoveTo}) =>
              <div
                ref={component.eventDiv}
                tabIndex={ selectedRole ? 0 : null }
                onDragOver={ev => ev.preventDefault()}
                onDrop={ev => {component.context.checkbinding( JSON.parse( ev.dataTransfer.getData("PSRol") ), function(){} ); ev.target.classList.remove("border-primary", "border")}}
                onDragEnter={(ev) => ev.target.classList.add("border-primary", "border") }
                onDragLeave={ev => ev.target.classList.remove("border-primary", "border")}
                onKeyDown={ev => component.checkBinding( ev, selectedRole, setSelectedCard, setPositionToMoveTo )}
                style={{flexGrow: 1}}
                className="p-2"
              >
                {component.props.children}
              </div>}
            </AppContext.Consumer>
  }
}

ModelDropZone.contextType = PSRolBinding;

////////////////////////////////////////////////////////////////////////////////
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

function handleKeyDown(event) {
    if (event.keyCode === 13 ) {
      event.preventDefault();
    }
  }

export function invitation_Guest()
{
  return (<Container>
    <Message/>
    <Form onKeyDown={handleKeyDown}>
      <Form.Group as={Row} controlId="initiator" className="align-items-center">
        <Col sm="4">
          <CardList rol="Guest">
            { emptyCard( "allProperties", value => <p>Contact card of {value.propval("Voornaam")}.</p>) }
          </CardList>
        </Col>
        <Col sm="4 text-center">
          <Octicon icon={ArrowRight} size='large'/>
        </Col>
        <Col sm="4">
          <BindRol rol="Partner">
            <DropZone>
              <Card>
                <Card.Body>
                  <p>To accept the invitation, drag your own contact card over here and drop it.</p>
                </Card.Body>
              </Card>
            </DropZone>
          </BindRol>
        </Col>
        </Form.Group>
      </Form>
    </Container>)
}
