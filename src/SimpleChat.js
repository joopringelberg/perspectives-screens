import React, { Component, useState, useRef } from "react"; // ###76###

import * as PR from "perspectives-react";

import
  { Button
  , Form
  , InputGroup
  , Container
  , Row
  , Col
  , Card
  , Nav
  , OverlayTrigger
  , Tooltip
  } from "react-bootstrap";

import "./SimpleChat.css";

// model:SimpleChat$ChatApp$Chatter
export function chatApp_Chatter()
{
  // The state is an array that holds either no elements, or a single Chat (that is, its external role).
  const [selectedChat, setSelectedChat] = useState([]);
  function listOfChats()
  {
    const SingleChat = PR.roleInstance( React.forwardRef((props, ref) =>
          <PR.View viewname="allProperties">
            <PR.PSView.Consumer>
              {value => <li ref={ref} onClick={e => setSelectedChat([value.rolinstance])} aria-label={value.propval(props.labelProperty) || "New Chat"}><a href="#">{chatTitle(value)}</a></li> }
            </PR.PSView.Consumer>
          </PR.View>
      ) );
    return (<Container className="border border-secondary rounded p-3 mt-3"  role="application" aria-labelledby="simpleChatId">
              {/*The header, including a button to create a new chat instance.*/}
              <Row>
                <Col>
                  <h4 id="simpleChatId">Chats</h4>
                </Col>
                <Col className="text-right">
                  <PR.Rol rol="Chatter">
                    <PR.PSRol.Consumer>
                      {
                        props => <PR.CreateContext contextname="model:SimpleChat$Chat" rolname="Chats">
                                   {/*On creating a context, we set the selectedChat.*/}
                                   <CreateButton binding={props.rolinstance}/>
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
                    <PR.CardList rol="Chats">
                      <SingleChat labelProperty="Title"/>
                    </PR.CardList>
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

  function CreateButton (props)
  {
    const ctxt = {
      "rollen": { "model:SimpleChat$Chat$Initiator":  [ { "properties": {}, "binding": props.binding } ] },
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
  function Title(props)
  {
    return  <PR.ExternalRole>
              <PR.View viewname="allProperties">
                <PR.PSView.Consumer>
                  {props => <h5>{props.propval("Title")}</h5>}
                </PR.PSView.Consumer>
                <Form.Group as={Row} controlId="chatTitle">
                  <Form.Label column sm="3" id="TitleId">Change the title:</Form.Label>
                  <Col sm="9">
                    <PR.PSView.Consumer>
                      {props =>  <Form.Control aria-labelledby="TitleId" aria-describedby="TitleExplanation" defaultValue={props.propval("Title")} onBlur={e => props.propset("Title", e.target.value)} />}
                    </PR.PSView.Consumer>
                  </Col>
                  <Col sm="9">
                    <Form.Text className="text-muted" id="TitleExplanation">
                      This title appears in the list of chats.
                    </Form.Text>
                  </Col>
                </Form.Group>
              </PR.View>
            </PR.ExternalRole>
  }

  function SelectContact()
  {
    const ContactCard = PR.roleInstance( PR.emptyCard( "allProperties", value => <p>Contact card of {value.propval("Voornaam")}.</p>) );
    return <section aria-label="Chat partner selection">
        <Row className="mb-3">
          <Col lg={6}>
            <Row>
              <Col><h4>This chat's partner</h4></Col>
            </Row>
            <Row>
              <PR.DropZone ariaLabel="Select a contact card on the right and drop it here to start chatting.">
                <Card>
                  <Card.Body>
                    <p>Select a contact card on the right and drop it here to start chatting.</p>
                  </Card.Body>
                </Card>
                <br/>
              </PR.DropZone>
            </Row>
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
      </section>
  }

  function startDragging(ev, value)
  {
    // ARIA
    ev.target.setAttribute("grab", "true");
    return ev.dataTransfer.setData("PSRol", JSON.stringify(value))
  }


  function Invitation()
  {
    function InvitationCard(props)
    {
      function download(filename, text) {
          var element = document.createElement('a');
          element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(text));
          element.setAttribute('download', filename);

          element.style.display = 'none';
          document.body.appendChild(element);

          element.click();

          document.body.removeChild(element);
      }

      if ( props.required )
      {
        return  <>
                  <Form.Group as={Row}>
                    <Form.Label column sm="3" id="MessageId">Message:</Form.Label>
                    <Col sm="9">
                      <PR.PSView.Consumer>
                        {props => <Form.Control aria-labelledby="MessageId" aria-describedby="messageDescriptionID" defaultValue={props.propval("Message")} onBlur={e => props.propset("Message", e.target.value)} />}
                      </PR.PSView.Consumer>
                    </Col>
                    <Col sm="9">
                      <Form.Text className="text-muted" id="messageDescriptionID">
                        Enter a text message to invite your contact with.
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Button
                        variant="primary"
                        onClick={ () => download("invitation.json", props.serialisation) }
                        disabled={props.serialisation[0] ? null : true}
                        >Download invitation file</Button>
                    </Col>
                    <Col><p>Click the button to download an invitation file. An invitation file is personal! Send it to the person you want to invite to connect, through a secure channel.</p></Col>
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
                        label="I want to invite someone I have no contact card for"
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

  function Response(props)
  {
    return <Form.Control defaultValue={props.defaultvalue} readOnly/>;
  }

  function Chat(props)
  {
    // return <Form onKeyDown={handleKeyDown}>
    return <section aria-label="Chat area" >
              <PR.Rol rol="Me">
                <PR.View viewname="allProperties">
                  <PR.PSView.Consumer>
                  {
                    view => <Form.Group as={Row} controlId="initiator">
                        <Form.Label column sm="3">{view.propval("Voornaam")}:</Form.Label>
                        <Col sm="9">
                          <Form.Control aria-label="My text" defaultValue={view.propval("MyText")} onBlur={e => view.propset("MyText", e.target.value)} />
                        </Col>
                      </Form.Group>
                  }
                  </PR.PSView.Consumer>
                </PR.View>
              </PR.Rol>
              <PR.Rol rol="You">
                <PR.View viewname="allProperties">
                  <PR.PSView.Consumer>
                  {
                    view => <Form.Group as={Row} controlId="partner">
                      <Form.Label column sm="3">{view.propval("Voornaam")}:</Form.Label>
                        <Col sm="9">
                          <Nav.Item>
                            <Card className="mb-2">
                              <Card.Body>
                                <Card.Text aria-label="Your partner's text">{view.propval("MyText")}</Card.Text>
                              </Card.Body>
                            </Card>
                          </Nav.Item>
                        </Col>
                      </Form.Group>
                  }
                  </PR.PSView.Consumer>
                </PR.View>
              </PR.Rol>
          </section>
  }

  return <Container className="bg-light border rounded rounded p-3">
      <Title/>
      <PR.Rol rol="Partner">
        <>
          <SelectContact/>
          <Invitation/>
        </>
        <Chat/>
      </PR.Rol>
    </Container>
}

// model:SimpleChat$Chat$Partner
const chat_Partner = chat_Initiator

export {chat_Partner}

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
