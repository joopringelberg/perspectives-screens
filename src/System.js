// The screen for model:System$PerspectivesSystem. 37

const React = require("react");
import {Context, Rol, PSRol, BindRol, PSRolBinding, View, PSView, RolBinding, ExternalRole, PerspectivesComponent, RoleInstances, RoleInstanceIterator, PSRoleInstances, AppContext} from "perspectives-react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'; //11

import Octicon, {ArrowRight} from '@primer/octicons-react'

export function perspectivesSystem_User()
{
  return <Container role="region" aria-roledescription="System App">
      <Row>
        <BindRol rol="ModelsInUse">
          <Col lg={6} className="border p-3 d-flex">
            <DropZone>
              <h4>In use</h4>
              <CardList rol="ModelsInUse">
                <SimpleCardForRoleBinding/>
              </CardList>
            </DropZone>
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
// DROPZONE
////////////////////////////////////////////////////////////////////////////////
class DropZone extends React.PureComponent
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

DropZone.contextType = PSRolBinding;

////////////////////////////////////////////////////////////////////////////////
// ROLEINSTANCE
////////////////////////////////////////////////////////////////////////////////
// The result of roleInstance is a Component that wraps a displaying component with behaviour.
// The displaying component is draggable and selectable.
// CardComponent should be constructed with React.forwardRef.
function roleInstance (CardComponent)
{
  class RoleInstance extends PerspectivesComponent
  {
    constructor (props)
    {
      super(props);
      this.cardRef = React.createRef();
      this.roleInstanceRef = React.createRef();
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    handleKeyDown (event, setSelectedCard)
    {
      const component = this;
      switch(event.keyCode){
        case 13: // Enter
        case 32: // space
          setSelectedCard(component.cardRef.current, component.context.rolinstance);
          event.preventDefault();
          break;
      }
    }

    handleClick( event )
    {
      event.preventDefault();
      this.roleInstanceRef.current.dispatchEvent( new CustomEvent('RoleInstanceClicked', { detail: this.context.rolinstance, bubbles: true }) );
    }

    componentDidUpdate ()
    {
      const component = this;
      if (component.context.isselected)
      {
        this.roleInstanceRef.current.focus();
      }
    }

    render ()
    {
      const component = this;
      return  <AppContext.Consumer>{ value =>
                <div draggable
                  tabIndex={component.context.isselected ? "0" : "-1"}
                  ref={component.roleInstanceRef}
                  key={this.context.rolinstance}
                  onDragStart={ev => ev.dataTransfer.setData("PSRol", JSON.stringify(this.context))}
                  onKeyDown={ev => component.handleKeyDown(ev, value.setSelectedCard)}
                  onClick={component.handleClick}
                  className="mb-2"
                 >
                  <CardComponent ref={component.cardRef}/>
                 </div>}
              </AppContext.Consumer>
    }
  }
  RoleInstance.contextType = PSRol;

  return RoleInstance;
}

///////////////////////////////////////////////////////////////////////////////
// ROLEBINDINGCARDHOLDER
////////////////////////////////////////////////////////////////////////////////
// CardComponent should be constructed with React.forwardRef.
function roleBindingCardHolder( CardComponent )
{
  return React.forwardRef((props, ref) =>
    (<RolBinding>
      <CardComponent ref={ref}/>
    </RolBinding>));
}

///////////////////////////////////////////////////////////////////////////////
// SIMPLECARD
////////////////////////////////////////////////////////////////////////////////
const SimpleCard = React.forwardRef((props, ref) =>
  <View viewname="allProperties">
    <PSView.Consumer>
      {value => <Card ref={ref}>
        <Card.Body>
          <p>{value.propval("Name")}</p>
          <p>{value.propval("Description")}</p>
        </Card.Body>
      </Card>}
    </PSView.Consumer>
  </View>);

const SimpleCardForRoleBinding = roleInstance ( roleBindingCardHolder( SimpleCard ) );

const SimpleCardForRole = roleInstance ( SimpleCard );

////////////////////////////////////////////////////////////////////////////////
// CARDLIST
////////////////////////////////////////////////////////////////////////////////
function CardList (props)
{
  return (<RoleInstances rol={props.rol}>
      <CardList_>{props.children}</CardList_>
    </RoleInstances>)
}

CardList.propTypes = { "rol": PropTypes.string.isRequired };

class CardList_ extends PerspectivesComponent
{
  constructor (props)
  {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.eventDiv = React.createRef();
  }

  // -1 if not found.
  indexOfCurrentRole ()
  {
    return this.context.instances.indexOf(this.context.cursor);
  }

  handleKeyPress (event)
    {
      const component = this;
      const i = component.indexOfCurrentRole();

      // keydown only occurs after the component received focus, hence if there are instances, there is a value for currentRole.
      if (component.context.cursor)
      {
        // Check for up/down key presses
        switch(event.keyCode){
          case 40: // Down arrow
            if ( i < component.context.instances.length - 1 )
            {
              component.context.setcursor( component.context.instances[i + 1] );
            }
            event.preventDefault();
            break;
          case 38: // Up arrow
            if (i > 0)
            {
              component.context.setcursor( component.context.instances[i - 1] );
            }
            event.preventDefault();
            break;
        }
      }
  }

  componentDidMount ()
  {
    const component = this;
    component.eventDiv.current.addEventListener('RoleInstanceClicked',
      function (e)
      {
        component.context.setcursor( e.detail );
      },
      false);
  }

  render ()
  {
    const component = this;
    return (<div
              onKeyDown={ component.handleKeyPress }
              ref={component.eventDiv}
              >
        <RoleInstanceIterator>{ this.props.children }</RoleInstanceIterator>
      </div>)
  }
}

CardList_.contextType = PSRoleInstances;


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
