import React from 'react'; //1

import * as PR from "perspectives-react";

import
  { Row
  , Col
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
                  roletype="Competitions"
                  cardcolumn="Name"
                  contexttocreate="model:Competition$Competition"
                  behaviours={[PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext]}/>
                </Col>
              </Row>
            </>
    );
  }

  return  <PR.PerspectivesContainer className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="competitionId">
            <Competitions/>
          </PR.PerspectivesContainer>;
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
                  roletype="SubCompetitions"
                  cardcolumn="Name"
                  contexttocreate="model:Competition$SubCompetition"
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
                  roletype="Captains"
                  cardcolumn="Achternaam"/>
                </Col>
              </Row>
            </>
    );
  }

  return  <PR.PerspectivesContainer className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="subCompetitionId">
            <SubCompetitions/>
            <Captains/>
          </PR.PerspectivesContainer>;
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
                  roletype="Captains"
                  cardcolumn="Achternaam"/>
                </Col>
              </Row>
            </>
    );
  }
  return  <PR.PerspectivesContainer className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="CaptainsId">
            <Captains/>
          </PR.PerspectivesContainer>;
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
                  roletype="Teams"
                  cardcolumn="Name"
                  contexttocreate="model:Competition$Team"
                  behaviours={[PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext]}/>
                </Col>
              </Row>
            </>
    );
  }
  return  <PR.PerspectivesContainer className="border border-secondary rounded p-3 mt-3" role="application" aria-labelledby="teamId">
            <Teams/>
          </PR.PerspectivesContainer>;

}

export function team_Manager()
{
  return  <PR.PerspectivesContainer className="border border-secondary rounded p-3 mt-3" role="application">
            <Row>
              <Col><h3>Team</h3></Col>
            </Row>
            <PR.RoleForm rolename="Captain" viewname="allProperties"/>
          </PR.PerspectivesContainer>;
}
