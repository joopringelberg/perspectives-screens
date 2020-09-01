import React, { Component, useState, useRef } from "react"; // ###69###

import * as PR from "perspectives-react";

import {Button, Form, ToggleButtonGroup, ToggleButton, InputGroup, Container, Row, Col, Card, Tab, Nav, Collapse, OverlayTrigger, Tooltip } from "react-bootstrap";

const { ipcRenderer } = require('electron');
const fs = require('fs');

import "./SimpleChat.css";

// model:SimpleChat$ChatApp$Chatter
export function chatApp_Chatter()
{
  // The state is an array that holds either no elements, or a single Chat (that is, its external role).
  const [selectedChat, setSelectedChat] = useState([]);
  function listOfChats()
  {
    return (<Container className="border border-secondary rounded p-3 mt-3"  role="region" aria-roledescription="SimpleChat App">
              {/*The header, including a button to create a new chat instance.*/}
              <Row>
                <Col>
                  <h4>Chats</h4>
                </Col>
                <Col className="text-right">
                  <PR.Rol rol="Chatter">
                    <PR.PSRol.Consumer>
                      {
                        props => <PR.CreateContext rolname="Chats" contextname="model:SimpleChat$Chat" donotbind={true}>
                                   {/*On creating a context, we set the selectedChat.*/}
                                   <CreateButton_ binding={props.rolinstance}/>
                                 </PR.CreateContext>
                      }
                    </PR.PSRol.Consumer>
                  </PR.Rol>
                </Col>
              </Row>
              {/*The actual list of chats.*/}
              <Row>
                <Col>
                  <ul>
                    <PR.Rol rol="Chats">
                      <PR.View viewname="allProperties">
                        <PR.PSView.Consumer>
                          {value => <li onClick={e => setSelectedChat([value.rolinstance])}><a href="#">{chatTitle(value)}</a></li> }
                        </PR.PSView.Consumer>
                      </PR.View>
                    </PR.Rol>
                  </ul>
                </Col>
              </Row>
            </Container>
    )
  }

  function chatTitle(value)
  {
      const title = value.propval("Title");
      const partner = value.propval("WithPartner");
      if (title[0])
      {
        return title[0];
      }
      else if (partner && partner[0]) // TODO. Omdat we WithPartner nog niet kunnen verwerken in het model, hier een extra controle.
        {
          return "With " + partner[0];
        }
        else
        {
          return "New chat"
        }
  }

  function CreateButton_ (props)
  {
    // How do we get the id of the ChatApp$Chatter role to bind to?
    const ctxt = {
      "rollen": { "model:SimpleChat$Chat$Initiator":  [ { "properties": {"model:SimpleChat$WithText$TextWriter$MyText": ["Your message here!"]}, "binding": props.binding } ] },
      "externeProperties": {}
    };
    return (<Button variant="light" onClick={e => props.create(ctxt).then(erole => setSelectedChat([erole]))}>Start a chat</Button>);
  }

  // If no Chat has been selected, we display the Title (including a button to add a Chat) and the list of Chats.
  if (!selectedChat[0])
  {
    return listOfChats();
  }
  // Otherwise, We show the perspective for that selected chat.
  else
  {
    return <Container className="border border-secondary rounded p-3 mt-3">
        <Row><Col className="pb-3" ><a href="#" onClick={e => setSelectedChat([])}>Back to all chats</a></Col></Row>
        <PR.Screen rolinstance={selectedChat[0]}/>
      </Container>
  }
}

function handleKeyDown(event) {
    if (event.keyCode === 13 ) {
      event.preventDefault();
    }
  }

// model:SimpleChat$Chat$Initiator
export function chat_Initiator()
{
  const [invitationPath, setInvitationPath] = useState( ipcRenderer.sendSync('invitationpath') );

  // ipcRenderer.invoke('invitationpath').then( (path) => { setInvitationPath(path)});

  function Title(props)
  {
    return <Form.Group as={Row} controlId="chatTitle">
              <Form.Label column sm="3">Title:</Form.Label>
              <Col sm="9">
                <PR.ExternalRole>
                  <PR.View viewname="allProperties">
                    <PR.SetProperty propertyname="Title">
                      <PR.PSProperty.Consumer>
                        {props => <Form.Control defaultValue={props.defaultvalue} onBlur={e => props.setvalue(e.target.value)} />}
                      </PR.PSProperty.Consumer>
                    </PR.SetProperty>
                  </PR.View>
                </PR.ExternalRole>
              </Col>
              <Col sm="9">
                <Form.Text className="text-muted">
                  This title appears in the list of chats.
                </Form.Text>
              </Col>
            </Form.Group>
  }

  function SelectContact()
  {
    const ContactCard = PR.emptyCard( "allProperties", value => <p>{value.propval("Voornaam")}</p>);
    return <Row className="mb-3">
        <Col lg={6}>
          <PR.DropZone>
            <Row>
              <Col><h4>This chat's partner</h4></Col>
            </Row>
            <Card>
              <Card.Body>
                <p>Select a contact card on the right and drop it here to start chatting.</p>
              </Card.Body>
            </Card>
            <br/>
          </PR.DropZone>
        </Col>
        <Col lg={6}>
          <Row>
            <Col><h4>Your contacts</h4></Col>
          </Row>
          <Row>
            <Col aria-activedescendant="">
              <PR.CardList rol="PotentialPartners">
                <p>You seem to have no contacts. Try inviting someone!</p>
                <ContactCard/>
              </PR.CardList>
            </Col>
          </Row>
        </Col>
      </Row>
  }

  function startDragging(ev, value)
  {
    // ARIA
    ev.target.setAttribute("grab", "true");
    return ev.dataTransfer.setData("PSRol", JSON.stringify(value))
  }


  function Invitation()
  {
    function InvitationRequired(props)
    {
      return  <PR.SetProperty propertyname="IWantToInviteAnUnconnectedUser">
                <PR.PSProperty.Consumer>
                  {sprops => <Form.Group as={Row}>
                    <Col>
                      <Form.Check
                        inline
                        aria-label="Check to generate invitation"
                        checked={props.required ? "checked" : null}
                        disabled={props.required ? "disabled" : null}
                        // We start out with false and only allow changing once, so that must be to "true"!
                        onChange={e => sprops.setvalue( "true" )} />
                    </Col>
                    <Form.Label>I want to invite someone I have no contact card for.</Form.Label>
                  </Form.Group>}
                </PR.PSProperty.Consumer>
              </PR.SetProperty>
    }

    function InvitationCard(props)
    {
      if ( props.required )
      {
        return  <>
                  <Form.Group as={Row}>
                    <Form.Label column sm="3">Message:</Form.Label>
                    <Col sm="9">
                      <PR.SetProperty propertyname="Message">
                        <PR.PSProperty.Consumer>
                          {props => <Form.Control defaultValue={props.defaultvalue} onBlur={e => props.setvalue(e.target.value)} />}
                        </PR.PSProperty.Consumer>
                      </PR.SetProperty>
                    </Col>
                    <Col sm="9">
                      <Form.Text className="text-muted">
                        Enter a text message to invite your contact with.
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Card draggable key="invitation.json" onDragStart={ev => createFile(ev, props.serialisation, invitationPath)}>
                        <Card.Body>
                          <p>I'm an invitation. Send me to someone - but only to one person, ever! <Explanation/></p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col><p>Send this invitation to the person you want to invite to connect, e.g. by email. Drag it to the desktop or directly into a mail message.</p></Col>
                  </Row>
                </>
      }
      else
      {
        return <div/>;
        }
    }

    return  <PR.ViewOnExternalRole viewname="allProperties">
              <PR.PSView.Consumer>
                {value => (
                    <>
                      <PR.SetBoolAsCheckbox
                        propertyname="IWantToInviteAnUnconnectedUser"
                        val={value.propval("IWantToInviteAnUnconnectedUser")[0] == ["true"]}
                        label="Check to generate invitation"
                      />
                      <InvitationCard required={value.propval("IWantToInviteAnUnconnectedUser")[0] == ["true"]} serialisation={value.propval("SerialisedInvitation") }/>
                    </>)}
              </PR.PSView.Consumer>
            </PR.ViewOnExternalRole>

  }

  function Explanation ()
  {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return <OverlayTrigger
            placement="right"
            overlay={ <Tooltip className="bg-danger">
                        By creating an invitation, you've set up a channel of communication to be used by exactly one other Perspectives user.
                        Confusion will arise more people try to use the same channel!
                      </Tooltip>} >
            <a className="text-danger" ref={target} onClick={() => setShow(!show)}>Why?</a>
          </OverlayTrigger>
  }

  function Utterance(props)
  {
    return <Form.Control defaultValue={props.defaultvalue} onBlur={e => props.setvalue(e.target.value)} />;
  }

  function Response(props)
  {
    return <Form.Control defaultValue={props.defaultvalue} readOnly/>;
  }

  function Chat()
  {
    return <Form onKeyDown={handleKeyDown}>
            <Form.Group as={Row} controlId="initiator">
              <Form.Label column sm="3">Me:</Form.Label>
              <Col sm="9">
                <PR.Rol rol="Me">
                  <PR.View viewname="allProperties">
                    <PR.SetProperty propertyname="MyText">
                      <Utterance/>
                    </PR.SetProperty>
                  </PR.View>
                </PR.Rol>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="partner">
              <Form.Label column sm="3">You:</Form.Label>
              <Col sm="9">
                <PR.Rol rol="You">
                  <PR.View viewname="allProperties">
                    <PR.PSView.Consumer>
                      {value => <Nav.Item>
                          <Card className="mb-2">
                            <Card.Body>
                              <Card.Text>{value.propval("MyText")}</Card.Text>
                            </Card.Body>
                          </Card>
                        </Nav.Item>}
                    </PR.PSView.Consumer>
                  </PR.View>
                </PR.Rol>
              </Col>
            </Form.Group>
          </Form>
  }

  return <Container className="bg-light border rounded rounded p-3">
      <Title/>
      <PR.BindRol rol="Partner">
        <>
          <SelectContact/>
          <Invitation/>
        </>
        <Chat/>
      </PR.BindRol>
    </Container>
}

function CreateButton (props)
{
  const ctxt = {
    "rollen": { "model:SimpleChat$Chat$Initiator":  [ { "properties": {"model:SimpleChat$WithText$TextWriter$MyText": ["Your message here!"]}, "binding": "usr:Me" } ] },
    "externeProperties": {}
  };
  return (<Button variant="light" onClick={e => props.create(ctxt)}>Start a chat</Button>);
}

// model:SimpleChat$Chat$Partner
const chat_Partner = chat_Initiator

export {chat_Partner}

// function createFile(ev, text)
// {
//   console.log("invoking createfile");
// 	ipcRenderer.invoke('createfile', text).then((path) => {
//       console.log("invoking ondragstart with " + path);
//   		ipcRenderer.send('ondragstart', path)
// 		});
// }

function createFile(ev, text, path)
{
  fs.writeFile(path, text, {mode: 0o666, flag: "w"},function(err)
    {
      if (err)
      {
        throw(err);
      }
      else {
        // ev.preventDefault()
        ipcRenderer.send('ondragstart', path)
      }
    });
}


function SerialiseInput (props)
{
  return (
    <Form.Group as={Row} controlId="SerialiseInput">
      <Col sm="8">
        <Form.Label>I want to make a new connection</Form.Label>
      </Col>
      <Col sm="4">
        <InputGroup.Checkbox
          aria-label="Check to generate invitation"
          checked={props.defaultvalue}
          onChange={e => props.setvalue((e.target.value == "on").toString())} />
      </Col>
    </Form.Group>)
}
