import React from "react"; // ###11###

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
                  roletype="ManagedBrokers"
                  cardcolumn="Name"
                  contexttocreate="model:BrokerServices$BrokerService"
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
                  roletype="Contracts"
                  cardcolumn="LastNameOfAccountHolder"
                  createButton={false}
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
                  roletype="Accounts"
                  cardcolumn="FirstNameOfAccountHolder"
                  contexttocreate="model:BrokerServices$BrokerContract"
                  behaviours={[PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext]}/>
              </Col>
            </Row>
          </Container>;
}

export function brokerContract_Administrator()
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

export function brokerContract_AccountHolder()
{
  return  <Container className="border border-secondary rounded p-3 mt-3" role="application">
            <Row>
              <Col><h3>Broker Contract</h3></Col>
            </Row>
            <PR.RoleForm rolename="External" viewname="ForAccountHolder"/>
            <PR.RoleForm rolename="AccountHolder" viewname="ForAccountHolder"/>
          </Container>;
}
