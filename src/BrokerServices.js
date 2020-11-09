import React, { Component, useState, useRef } from "react"; // ###9###

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

export function brokerService_Administrator()
{
  return  <PR.PerspectivesContainer className="border border-secondary rounded p-3 mt-3" role="application">
            <Row><PR.BackButton buttontext="Back to Brokers and Contracts"/></Row>
          </PR.PerspectivesContainer>
}

export function brokerService_Guest()
{
  const ContactCard = PR.roleInstance( PR.emptyCard( "allProperties", value => <p>Contact card of {value.propval("Voornaam")}.</p>) );
  return (<PR.PerspectivesContainer>
    <section aria-label="Become the administrator">
      <Row><PR.BackButton buttontext="Back to Brokers and Contracts"/></Row>
      <Form.Group as={Row} controlId="initiator" className="align-items-center">
        <Col sm="4">
          <PR.CardList rol="Guest">
            <ContactCard labelProperty="Voornaam"/>
          </PR.CardList>
        </Col>
        <Col sm="4 text-center">
          <ArrowRightIcon alt="ArrowRight" size="large"/>
        </Col>
        <Col sm="4">
          <PR.Rol rol="Administrator">
            <PR.DropZone ariaLabel="To become the administrator of this BrokerService, drag your own contact card over here and drop it.">
              <Card>
                <Card.Body>
                  <p>To become the administrator of this BrokerService, drag your own contact card over here and drop it.</p>
                </Card.Body>
              </Card>
            </PR.DropZone>
            <p>This will actually never display because the role changes as soon as there is a binding for Partner. But we need it to display the card above!</p>
          </PR.Rol>
        </Col>
      </Form.Group>
    </section>
  </PR.PerspectivesContainer>)
}
