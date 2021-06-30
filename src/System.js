// The screen for model:System$PerspectivesSystem. 54

const React = require("react");

import
  { PSRoleInstances
  , AppContext
  , RoleTable
  , PerspectivesContainer
  , RoleInstances
  , NoInstancesSwitcher
  , RoleInstanceIterator
  , RoleForm
  , LocalRoleSpecialisation
  , ViewIncomingInvitation
  , NameDescriptionCard
  , addBehaviour
  , addFillARole
  , addRemoveRoleFromContext
  , addOpenContextOrRoleForm
  } from "perspectives-react";

import {Row, Col, Tabs, Tab} from "react-bootstrap";

export function perspectivesSystem_User()
{
  const RepoCard = addBehaviour( NameDescriptionCard,
    [ addFillARole
    ]);

    const InUseCard = addBehaviour( NameDescriptionCard,
      [ addFillARole
      , addRemoveRoleFromContext
      , addOpenContextOrRoleForm
      ]);

  return <PerspectivesContainer role="application" aria-labelledby="systemId">
        <Tabs defaultActiveKey="apps" id="uncontrolled-tab-example">
          <Tab eventKey="apps" title="Apps">
            <Row>
              <Col lg={6} className="border p-3 ">
                <h4>In use</h4><br/>
                <RoleInstances rol="ModelsInUse">
                  <ModelDropZone>
                    <NoInstancesSwitcher>
                      <p>Drop a model here</p>
                      <RoleInstanceIterator>
                        <InUseCard labelProperty="Name"/>
                      </RoleInstanceIterator>
                    </NoInstancesSwitcher>
                  </ModelDropZone>
                </RoleInstances>
              </Col>
              <Col lg={6} className="border p-3">
                <h4>In Repository</h4>
                <RoleInstances rol="Modellen">
                  <NoInstancesSwitcher>
                    <p>Did not retrieve any models from your repository(ies). Maybe you have no internet connection?</p>
                    <RoleInstanceIterator>
                      <RepoCard labelProperty="Name"/>
                    </RoleInstanceIterator>
                  </NoInstancesSwitcher>
                </RoleInstances>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="user" title="User information">
            <RoleForm rolename="User" viewname="VolledigeNaam" cardprop="Achternaam"/>
          </Tab>
          <Tab eventKey="invitations" title="Pending Invitations">
          <Row>
            <Col>
              <RoleTable
                viewname="ForInvitee"
                roletype="PendingInvitations"
                cardcolumn="InviterLastName"
                behaviours={[addOpenContextOrRoleForm]}/>
            </Col>
          </Row>
          </Tab>
        </Tabs>
      </PerspectivesContainer>;
}

////////////////////////////////////////////////////////////////////////////////
// MODELDROPZONE
// This ModelDropZone is specialised for System. To import a model, we just need to
// check the binding of the external role of the model description. The model then
// will load on the fly.
// The more general case of a RoleDropZone must support explicit dropping.
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
    const eventDivRect = component.eventDiv.current.getBoundingClientRect();
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
          900);
        event.preventDefault();
        break;
      }
  }

  handleDrop ({roleData /*, addedBehaviour*/})
  {
    this.context.checkbinding( roleData, function(){} );
  }

  render ()
  {
    const component = this;
    return  <AppContext.Consumer>{ ({selectedRole, setSelectedCard, setPositionToMoveTo}) =>
              <div
                ref={component.eventDiv}
                tabIndex={ selectedRole ? 0 : null }
                onDragOver={ev => ev.preventDefault()}
                // onDrop={ev => {component.context.checkbinding( JSON.parse( ev.dataTransfer.getData("PSRol") ), function(){} ); ev.target.classList.remove("border-primary", "border")}}
                onDrop={ function (ev)
                  {
                    component.handleDrop( JSON.parse( ev.dataTransfer.getData("PSRol") ) );
                    ev.target.classList.remove("border-primary", "border");
                  }}
                onDragEnter={(ev) => ev.target.classList.add("border-primary", "border") }
                onDragLeave={ev => ev.target.classList.remove("border-primary", "border")}
                onKeyDown={ev => component.checkBinding( ev, selectedRole, setSelectedCard, setPositionToMoveTo )}
                style={{flexGrow: 1}}
                className="p-2 pb-3"
                aria-dropeffect="execute"
                aria-label="Drop an App here to get it from the repository."
              >
                {component.props.children}
              </div>}
            </AppContext.Consumer>;
  }
}

ModelDropZone.contextType = PSRoleInstances;

////////////////////////////////////////////////////////////////////////////////

export function invitation_Guest()
{
  return  <PerspectivesContainer>
            <LocalRoleSpecialisation ofrole="Invitee">
              <ViewIncomingInvitation/>
            </LocalRoleSpecialisation>
          </PerspectivesContainer>;
}
