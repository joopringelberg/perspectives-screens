import React from "react"; // ###13###

import * as PR from "perspectives-react";

import
  { Row
  , Col
  , Container
} from "react-bootstrap";


export function brokerServices_Guest()
{
  function BrokersAndContracts()
  {
    return (<>
              <Row>
                <Col>
                  <h4 id="managedModelBrokerId">Managed brokers</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PR.RoleTable
                  viewname="allProperties"
                  cardcolumn="Name"
                  roletype="ManagedBrokers"
                  contexttocreate="model:BrokerServices$BrokerService"
                  createButton={true}
                  // roleRepresentation
                  behaviours={[PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext]}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4 id="managedModelId">Broker contracts</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PR.RoleTable
                  viewname="Account"
                  cardcolumn="LastNameOfAccountHolder"
                  roletype="Contracts"
                  createButton={false}
                  // contexttocreate
                  // roleRepresentation
                  behaviours={[PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext]}/>
                </Col>
              </Row>
            </>
    );
  }

  return  <Container className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="managedModelBrokerId">
            <BrokersAndContracts/>
          </Container>;
}

export function brokerService_Administrator()
{
  return  <Container className="border border-secondary rounded p-3 mt-3" role="application">
            <Row>
              <Col><h3>Broker Service</h3></Col>
            </Row>
            <PR.RoleForm rolename="Administrator" viewname="Admin"/>
            <PR.RoleForm rolename="External" viewname="allProperties"/>
            <Row className="pb-3 pt-2">
              <Col><h4>Accounts</h4></Col>
            </Row>
            <Row className="pb-3 pt-2">
              <Col>
                <PR.RoleTable
                  viewname="Account"
                  cardcolumn="FirstNameOfAccountHolder"
                  roletype="Accounts"
                  contexttocreate="model:BrokerServices$BrokerContract"
                  createButton={true}
                  // roleRepresentation
                  behaviours={[PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext, PR.addRemoveFiller]}/>
              </Col>
            </Row>
          </Container>;
}

export function brokerContract_Administrator_disabled()
{
  return  <Container className="border border-secondary rounded p-3 mt-3" role="application">
            <Row>
              <Col><h3>Broker Contract</h3></Col>
            </Row>
            <PR.RoleForm rolename="Administrator" viewname="Confirmation"/>
            <PR.RoleForm rolename="AccountHolder" viewname="ForAdministrator"/>
            <PR.Invitation/>
          </Container>;
}

export function brokerContract_AccountHolder_disabled()
{
  return  <Container className="border border-secondary rounded p-3 mt-3" role="application">
            <Row>
              <Col><h3>Broker Contract</h3></Col>
            </Row>
            <PR.RoleForm rolename="External" viewname="ForAccountHolder"/>
            <PR.RoleForm rolename="AccountHolder" viewname="ForAccountHolder"/>
          </Container>;
}
