import React from 'react'; //2

import * as PR from "perspectives-react";

import
  { Row
  , Col
  , Container
  } from "react-bootstrap";

export function competitionApp_Manager()
{
  function Competitions()
  {
    return (<>
              <Row>
                <Col>
                  <h4 id="competitionId">Competitions</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PR.RoleTable
                  viewname="allProperties"
                  cardcolumn="Name"
                  roletype="Competitions"
                  contexttocreate="model:Competition$Competition"
                  createButton={true}
                  // roleRepresentation
                  behaviours={[PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext]}/>
                </Col>
              </Row>
            </>
    );
  }

  return  <Container className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="competitionId">
            <Competitions/>
          </Container>;
}

export function competition_Manager()
{
  function SubCompetitions()
  {
    return (<>
              <Row>
                <Col>
                  <h4 id="subCompetitionId">Sub-competitions</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PR.RoleTable
                  viewname="allProperties"
                  cardcolumn="Name"
                  roletype="SubCompetitions"
                  contexttocreate="model:Competition$SubCompetition"
                  createButton={true}
                  // roleRepresentation
                  behaviours={[PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext]}/>
                </Col>
              </Row>
            </>
    );
  }

  function Captains()
  {
    return (<>
              <Row>
                <Col>
                  <h4 id="CaptainsId">Captains</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PR.RoleTable
                  viewname="allProperties"
                  cardcolumn="Achternaam"
                  roletype="Captains"
                  // contexttocreate
                  // createButton
                  // roleRepresentation
                  // behaviours
                  />
                </Col>
              </Row>
            </>
    );
  }

  return  <Container className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="subCompetitionId">
            <SubCompetitions/>
            <Captains/>
          </Container>;
}

export function competition_Captains()
{
  function Captains()
  {
    return (<>
              <Row>
                <Col>
                  <h4 id="CaptainsId">Captains</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PR.RoleTable
                  viewname="allProperties"
                  cardcolumn="Achternaam"
                  roletype="Captains"
                  // contexttocreate
                  // createButton
                  // roleRepresentation
                  // behaviours
                  />
                </Col>
              </Row>
            </>
    );
  }
  return  <Container className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="CaptainsId">
            <Captains/>
          </Container>;
}

export function subCompetition_Manager()
{
  function Teams()
  {
    return (<>
              <Row>
                <Col>
                  <h4 id="teamId">Teams</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PR.RoleTable
                  viewname="allProperties"
                  cardcolumn="Name"
                  roletype="Teams"
                  contexttocreate="model:Competition$Team"
                  createButton={true}
                  // roleRepresentation
                  behaviours={[PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext]}/>
                </Col>
              </Row>
            </>
    );
  }
  return  <Container className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="teamId">
            <Teams/>
          </Container>;

}

export function team_Manager()
{
  return  <Container className="border border-secondary rounded p-3 mt-3" role="application">
            <Row>
              <Col><h3>Team</h3></Col>
            </Row>
            <PR.RoleForm rolename="Captain" viewname="allProperties"/>
          </Container>;
}
