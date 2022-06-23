import React from 'react'; //2

import * as PR from "perspectives-react";

import
  { Row
  , Col
  , Container
  } from "react-bootstrap";

export function couchdbManagementApp_Manager()
{
  function CouchdbServers()
  {
    return (<>
              <Row>
                <Col>
                  <h4 id="couchdbServerId">Couchdb servers</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PR.RoleTable
                  viewname="allProperties"
                  cardcolumn="Name"
                  roletype="CouchdbServers"
                  contexttocreate="model:CouchdbManagement$CouchdbServer"
                  createButton={true}
                  // roleRepresentation
                  behaviours={[PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext]}/>
                </Col>
              </Row>
            </>
    );
  }

  return  <Container className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="couchdbServerId">
            <CouchdbServers/>
          </Container>;
}


export function couchdbServer_Admin_uitgeschakeld()
{
  function Repositories()
  {
    return (<>
              <Row>
                <Col>
                  <h4 id="repositoryId">Repositories</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PR.RoleTable
                  viewname="allProperties"
                  cardcolumn="Name"
                  roletype="Repositories"
                  contexttocreate="model:CouchdbManagement$Repository"
                  createButton={true}
                  // roleRepresentation
                  behaviours={[PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext]}/>
                </Col>
              </Row>
            </>
    );
  }

    return  <Container className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="repositoryId">
              <h4>This Server</h4>
              <PR.RoleForm rolename="External" viewname="allProperties"/>
              <h4>My credentials on this server</h4>
              <PR.RoleForm rolename="Admin" viewname="AdminProps" cardprop="LastName"/>
              <Repositories/>
            </Container>;
}

export function repository_ServerAdmin()
{
  return  <Container className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="thisRepositoryId">
            <h4 id="thisRepositoryId">This Repository</h4>
            <PR.RoleForm rolename="External" viewname="allProperties"/>
            <PR.RoleForm rolename="Admin" viewname="allProperties"/>
          </Container>;
}

export function repository_Admin()
{
  // Authors, Accounts, AvailableModels
  return  <Container className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="thisRepositoryId">
            <Row>
              <Col>
                <h4 id="couchdbServerId">This Repository</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <PR.RoleTable
                viewname="AuthorForAdmin"
                cardcolumn="FirstName"
                roletype="Authors"
                createButton={true}
                // roleRepresentation
                behaviours={[PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext, PR.addFillWithRole]}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <PR.RoleTable
                viewname="allProperties"
                cardcolumn="FirstName"
                roletype="Accounts"
                createButton={true}
                // roleRepresentation
                behaviours={[PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext]}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <PR.RoleTable
                viewname="allProperties"
                cardcolumn="Name"
                roletype="AvailableModels"
                createButton={true}
                // roleRepresentation
                behaviours={[PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext]}/>
              </Col>
            </Row>
          </Container>;

}
