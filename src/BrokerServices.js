import React from "react"; // ###11###

import * as PR from "perspectives-react";

import
  { Row
  , Col
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

  return  <PR.PerspectivesContainer className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="managedModelBrokerId">
            <BrokersAndContracts/>
          </PR.PerspectivesContainer>;
}

export function brokerService_Administrator()
{
  return  <PR.PerspectivesContainer className="border border-secondary rounded p-3 mt-3" role="application">
            <Row className="pb-3 pt-2">
              <Col><PR.BackButton buttontext="Back to Brokers and Contracts"/></Col>
            </Row>
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
          </PR.PerspectivesContainer>;
}

export function brokerContract_Administrator()
{
  return  <PR.PerspectivesContainer className="border border-secondary rounded p-3 mt-3" role="application">
            <Row className="pb-3 pt-2">
              <Col><PR.BackButton buttontext="Back to Brokers and Contracts"/></Col>
            </Row>
            <Row>
              <Col><h3>Broker Contract</h3></Col>
            </Row>
            <PR.RoleForm rolename="Administrator" viewname="Confirmation"/>
            <PR.RoleForm rolename="AccountHolder" viewname="ForAdministrator"/>
            <PR.Invitation/>
          </PR.PerspectivesContainer>;
}

export function brokerContract_AccountHolder()
{
  return  <PR.PerspectivesContainer className="border border-secondary rounded p-3 mt-3" role="application">
            <Row className="pb-3 pt-2">
              <Col><PR.BackButton buttontext="Back to Brokers and Contracts"/></Col>
            </Row>
            <Row>
              <Col><h3>Broker Contract</h3></Col>
            </Row>
            <PR.RoleForm rolename="External" viewname="ForAccountHolder"/>
            <PR.RoleForm rolename="AccountHolder" viewname="ForAccountHolder"/>
          </PR.PerspectivesContainer>;
}
