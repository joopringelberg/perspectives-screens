// The screen for model:System$PerspectivesSystem. 59

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
        <Tabs defaultActiveKey="apps" id="uncontrolled-tab-example">
          <Tab eventKey="apps" title="Apps">
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
                  noinstancesmessage="Drop a model from the table below here to start using it."
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
                  noinstancesmessage="Did not retrieve any models from your repository(ies). Maybe you have no internet connection?"
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
