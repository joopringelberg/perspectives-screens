import React from "react"; // ###81###
import PropTypes from "prop-types";

import * as PR from "perspectives-react";

import
  { Button
  , Form
  , Container
  , Row
  , Col
  , Card
  , Nav
  } from "react-bootstrap";

import "./SimpleChat.css";

// model:SimpleChat$ChatApp$Chatter
export function chatApp_Chatter()
{
  // A ref to dispatch an event from.
  const chatListRef = React.createRef();

  function setSelectedChat ( r )
  {
    chatListRef.current.dispatchEvent( new CustomEvent('OpenContext', { detail: r, bubbles: true }) );
  }

  // The state is an array that holds either no elements, or a single Chat (that is, its external role).
  function ListOfChats()
  {
    const SingleChat = PR.addBehaviour(
      PR.makeRoleInListPresentation(
        // eslint-disable-next-line react/display-name
        React.forwardRef( function(props, ref)
        {
          return <a href="#" ref={ref} tabIndex={props.tabIndex} aria-label={props["aria-label"]}>{chatTitle(props.propval("Title"))}</a>;
        })),
      [PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext]
    );

    // The header, including a button to create a new chat instance.
    return <>
              <Row ref={ chatListRef }>
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
                    <PR.Rol rol="Chats">
                      <li>
                        <SingleChat labelProperty="Title"/>
                      </li>
                    </PR.Rol>
                  </ul>
                </Col>
              </Row>
            </>;
  }

  function chatTitle(title)
  {
      const partner = false;
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
          return "New chat";
        }
  }

  function CreateButton (props)
  {
    const ctxt = {
      "rollen": { "model:SimpleChat$Chat$Initiator":  [ { "properties": {}, "binding": props.binding } ] },
      "externeProperties": {}
    };
    return <Button variant="light" onClick={() => props.create(ctxt).then(erole => setSelectedChat(erole))}>Start a chat</Button>;
  }
  CreateButton.propTypes =
    { binding: PropTypes.string
    , create: PropTypes.func
    };

  return  <PR.PerspectivesContainer
            className="border border-secondary rounded p-3 mt-3"
            role="application"
            aria-labelledby="simpleChatId"
          >
            <ListOfChats/>
          </PR.PerspectivesContainer>;
}

// model:SimpleChat$Chat$Initiator
export function chat_Initiator()
{
  function Title()
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
            </PR.ExternalRole>;
  }

  function SelectContact()
  {
    const ContactCard = PR.addBehaviour( PR.makeRoleInListPresentation(
      function(psview)
      {
        return <Card><Card.Text>Contact card of {psview.propval("Voornaam")}.</Card.Text></Card>;
      })
      , [PR.addFillARole]);

    return <section aria-label="Chat partner selection">
        <Row className="mb-3">
          <Col lg={6}>
            <Row>
              <Col><h4>This chat&apos;s partner</h4></Col>
            </Row>
            <Row>
              <PR.PSRoleInstances.Consumer>{psroleinstances =>
                <PR.RoleDropZone
                  ariaLabel="Press space to drop the selected contact card to start chatting."
                  bind={psroleinstances.bind}
                  checkbinding={psroleinstances.checkbinding}
                  >
                  <Card>
                    <Card.Body>
                      <p>Select a contact card on the right and drop it here to start chatting.</p>
                    </Card.Body>
                  </Card>
                  <br/>
                </PR.RoleDropZone>
              }</PR.PSRoleInstances.Consumer>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col><h4>Your contacts</h4></Col>
            </Row>
            <Row>
              <Col>
                <PR.Rol rol="PotentialPartners">
                  <p>You seem to have no contacts. Try inviting someone!</p>
                  <ContactCard labelProperty="Voornaam"/>
                </PR.Rol>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>;
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
                </>;
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
            </PR.ViewOnExternalRole>;

  }

  function Chat()
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
                          <Form.Control aria-label="My text" aria-describedby="chatDescriptionID" defaultValue={view.propval("MyText")} onBlur={e => view.propset("MyText", e.target.value)} />
                        </Col>
                        <Col sm="9">
                          <Form.Text className="text-muted" id="chatDescriptionID">
                            Type a message to your chat partner here.
                          </Form.Text>
                        </Col>
                      </Form.Group>
                  }
                  </PR.PSView.Consumer>
                </PR.View>
                <PR.PSRol.Consumer>
                {
                  psrol => <Button href="#" onClick={psrol.removerol}>Pull out of this chat</Button>
                }
                </PR.PSRol.Consumer>
              </PR.Rol>
              <PR.Rol rol="You">
                <PR.View viewname="allProperties">
                  <PR.PSView.Consumer>
                  {
                    view => <Form.Group as={Row} controlId="partner">
                      <Form.Label column sm="3">Response by {view.propval("Voornaam")}:</Form.Label>
                        <Col sm="9">
                          <Nav.Item>
                            <Card className="mb-2">
                              <Card.Body>
                                <Card.Text aria-label={"Response by " + view.propval("Voornaam")}>{view.propval("MyText")}</Card.Text>
                              </Card.Body>
                            </Card>
                          </Nav.Item>
                        </Col>
                      </Form.Group>
                  }
                  </PR.PSView.Consumer>
                </PR.View>
              </PR.Rol>
          </section>;
  }

  // We could use a PerspectivesContainer, but we do not navigate to deeper nested contexts. However, we do deploy the
  // BackButton that belongs to the PerspectivesContainer.
  return <Container className="bg-light border rounded rounded p-3">
      <Row><Col className="pb-3" ><PR.BackButton buttontext="Back to all chats"/></Col></Row>
      <Title/>
      <PR.RoleInstances rol="Partner">
          <PR.NoInstancesSwitcher>
            <>
              <SelectContact/>
              <Invitation/>
            </>
            <PR.RoleInstanceIterator>
              <Chat/>
            </PR.RoleInstanceIterator>
          </PR.NoInstancesSwitcher>
      </PR.RoleInstances>
    </Container>;
}

export const chat_Partner = chat_Initiator;
