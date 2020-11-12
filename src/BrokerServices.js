import React, { Component, useState, useRef } from "react"; // ###11###

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

import {ArrowRightIcon} from '@primer/octicons-react'

function brokerServices_Guest()
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
                  <PR.RoleTable viewname="allProperties" roletype="ManagedBrokers" cardcolumn="Name" contexttocreate="model:BrokerServices$BrokerService"/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4 id="managedModelId">Broker contracts</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PR.RoleTable viewname="allProperties" roletype="Contracts" cardcolumn="Name" createButton={false}/>
                </Col>
              </Row>
            </>
    )
  }

  return  <PR.PerspectivesContainer className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="managedModelBrokerId">
            <BrokersAndContracts/>
          </PR.PerspectivesContainer>
}

function brokerService_Administrator()
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
              <Col>
                <PR.RoleTable viewname="Account" roletype="Accounts" cardcolumn="FirstNameOfAccountHolder" contexttocreate="model:BrokerServices$BrokerContract"/>
              </Col>
            </Row>
          </PR.PerspectivesContainer>
}

function brokerContract_Administrator()
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
            <PR.RoleForm rolename="External" viewname="ForAdministrator"/>
          </PR.PerspectivesContainer>
}

export default PR.makeScreens(
  { brokerServices_Guest: brokerServices_Guest
  , brokerService_Administrator: brokerService_Administrator
  , brokerContract_Administrator: brokerContract_Administrator
  }
);
