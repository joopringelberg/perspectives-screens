// The screen for model:System$PerspectivesSystem. 63

const React = require("react");

import
  { RoleTable
  , RoleForm
  , LocalRoleSpecialisation
  , ViewIncomingInvitation
  , addFillARole
  , addRemoveRoleFromContext
  , addOpenContextOrRoleForm
  } from "perspectives-react";

import {Row, Col, Tabs, Tab, Container} from "react-bootstrap";

export function perspectivesSystem_User()
{
  return <Container role="application" aria-labelledby="systemId">
        <Tabs defaultActiveKey="chooseapp" id="uncontrolled-tab-example">
          <Tab eventKey="chooseapp" title="Installed Apps">
            <Row>
              <Col className="border p-3 ">
                <h4>Apps</h4><br/>
                <RoleTable
                  viewname="allProperties"
                  cardcolumn="Name"
                  roletype="IndexedContexts"
                  // contexttocreate
                  createButton={false}
                  // roleRepresentation
                  behaviours={[addOpenContextOrRoleForm, addFillARole]}
                />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="apps" title="Add Apps">
            <Row>
              <Col className="border p-3 ">
                <h4>In use</h4><br/>
                <RoleTable
                  viewname="ModelInUsePresentation"
                  cardcolumn="Name"
                  roletype="ModelsInUse"
                  // contexttocreate
                  createButton={false}
                  // roleRepresentation
                  behaviours={[addOpenContextOrRoleForm, addFillARole, addRemoveRoleFromContext]}
                />
              </Col>
            </Row>
            <Row>
              <Col className="border p-3">
                <h4>In Repository</h4>
                <RoleTable
                  viewname="ModelPresentation"
                  cardcolumn="Name"
                  roletype="Modellen"
                  // contexttocreate
                  createButton={false}
                  // roleRepresentation
                  behaviours={[addOpenContextOrRoleForm, addFillARole]}
                />
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
                cardcolumn="InviterLastName"
                roletype="PendingInvitations"
                // contexttocreate
                // createButton
                // roleRepresentation
                behaviours={[addOpenContextOrRoleForm]}/>
            </Col>
          </Row>
          </Tab>
          <Tab eventKey="contacts" title="Contacts">
            <RoleTable
              viewname="VolledigeNaam"
              cardcolumn="Achternaam"
              roletype="model:System$PerspectivesSystem$Contacts"
              //contexttocreate
              // createButton
              // roleRepresentation
              behaviours={[addFillARole]}/>
          </Tab>
          <Tab eventKey="notifications" title="All Notifications">
            <RoleTable
              viewname="allProperties"
              cardcolumn="Message"
              roletype="model:System$ContextWithNotification$Notifications"
              //contexttocreate
              // createButton
              // roleRepresentation
              behaviours={[addRemoveRoleFromContext]}/>
          </Tab>
        </Tabs>
      </Container>;
}

////////////////////////////////////////////////////////////////////////////////

export function invitation_Guest()
{
  return  <Container>
            <LocalRoleSpecialisation ofrole="Invitee">
              <ViewIncomingInvitation/>
            </LocalRoleSpecialisation>
          </Container>;
}
