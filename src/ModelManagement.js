import React, { useState } from 'react'; //5
import PropTypes from "prop-types";

import * as PR from "perspectives-react";

import
  { Button
  , Container
  , Row
  , Col
  , Card
  } from "react-bootstrap";

export function modelManagementApp_Manager()
{
  // A ref to dispatch an event from.
  const modelListRef = React.createRef();

  function setSelectedModel ( r )
  {
    modelListRef.current.dispatchEvent( new CustomEvent('OpenContext', { detail: r, bubbles: true }) );
  }

  function ModelsAndRepositories()
  {
    const SingleManagedModel = PR.addBehaviour(
      PR.makeRoleInListPresentation(
        // eslint-disable-next-line react/display-name
        React.forwardRef( function(props, ref)
        {
          return <a ref={ref} tabIndex={props.tabIndex} aria-label={props["aria-label"][0]}>{props["aria-label"][0] || "New Managed Model"}</a>;
        })),
      [PR.addOpenContextOrRoleForm, PR.addRemoveRoleFromContext]
    );

    return (<>
              <Row ref={modelListRef}>
                <Col>
                  <h4 id="managedModelsId">Models</h4>
                </Col>
                <Col className="text-right">
                  <PR.RoleInstance role="Manager">
                    <PR.PSRol.Consumer>
                      {
                        props => <PR.CreateContext contextname="model:ModelManagement$ManagedModel" rolname="Models">
                                   {/*On creating a context, we set the selectedModel.*/}
                                   <CreateButton binding={props.rolinstance}/>
                                 </PR.CreateContext>
                      }
                    </PR.PSRol.Consumer>
                  </PR.RoleInstance>
                </Col>
              </Row>
              {/*The actual list of models.*/}
              <Row>
                <Col>
                  <ul>
                    <PR.Rol rol="Models">
                      <li>
                        <SingleManagedModel labelProperty="Name"/>
                      </li>
                    </PR.Rol>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4 id="managedModelId">Repositories</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PR.RoleTable viewname="allProperties" roletype="Repository" cardcolumn="Name"/>
                </Col>
              </Row>
            </>
    );
  }

  function CreateButton (props)
  {
    const ctxt = {
      "rollen": { "model:ModelManagement$ManagedModel$Author":  [ { "properties": {}, "binding": props.binding } ] },
      "externeProperties": {}
    };
    return (<Button variant="light" onClick={() => props.create(ctxt).then(erole => setSelectedModel( erole ))}>New model</Button>);
  }

  CreateButton.propTypes =
    { binding: PropTypes.string
    };

  return  <PR.PerspectivesContainer
            className="border border-secondary rounded p-3 mt-3"
            role="application"
            aria-labelledby="managedModelsId"
          >
            <ModelsAndRepositories/>
          </PR.PerspectivesContainer>;
}

export function managedModel_Author()
{
  const [lastReloadTime, setLastReloadTime] = useState(0);
  function ShowReloadTime()
  {
    if (lastReloadTime == 0)
    {
      return <Card.Text>This model hasn&apos;t been loaded yet during this session</Card.Text>;
    }
    else {
      return <Card.Text>Last reload at: {lastReloadTime.toLocaleTimeString('en-UK')}</Card.Text>;
    }
  }
  const RoleCard = PR.addBehaviour( PR.NameDescriptionCard,
    [ PR.addRemoveRoleFromContext
    , PR.addFillARole
    ]);

  return (<Container className="border border-secondary rounded p-3 mt-3"  role="application" aria-labelledby="managedModelId">
            <Row><Col className="pb-3" ><PR.BackButton buttontext="Back to all models"/></Col></Row>
            <Row>
              <Col>
                <h4 id="managedModelId">Model</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Card.Header>Model description</Card.Header>
                  <Card.Body>
                    <PR.RoleInstance role="ModelDescription">
                      <PR.PSRol.Consumer>{ psrol =>
                        <PR.CreateDropZone
                          ariaLabel="Drop a Model role here"
                          bind={psrol.bind}
                          checkbinding={psrol.checkbinding}
                          >
                          <p>Drop a Model role here</p>
                        </PR.CreateDropZone>
                      }</PR.PSRol.Consumer>
                      <RoleCard labelProperty="Name" />
                    </PR.RoleInstance>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Card.Header>Repository for this model</Card.Header>
                  <Card.Body>
                    <PR.RoleInstance role="Repository">
                      <PR.PSRol.Consumer>{ psrol =>
                        <PR.CreateDropZone
                          ariaLabel="Drop a Repository role here"
                          bind={psrol.bind}
                          checkbinding={psrol.checkbinding}
                          >
                          <p>Drop a Repository role here</p>
                        </PR.CreateDropZone>
                      }</PR.PSRol.Consumer>
                      <RoleCard labelProperty="Name" />
                    </PR.RoleInstance>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <PR.ExternalRole>
              <PR.View viewname="allProperties">
                <PR.PSView.Consumer>{ psview =>
                  <>
                  <Row>
                    <Col>
                      <Card>
                        <Card.Header>Arc file parse results</Card.Header>
                        <Card.Body>
                          <Feedback message={psview.propval("ArcFeedback")}/>
                          <Button variant="primary" onClick=
                            {
                              function()
                              {
                                setLastReloadTime(new Date());
                                psview.propdel("ArcFeedback");
                              }
                            }>Reload Arc file</Button>
                          <ShowReloadTime/>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card>
                        <Card.Header>Crl file parse results</Card.Header>
                        <Card.Body>
                          <Feedback message={psview.propval("CrlFeedback")}/>
                          <Button variant="primary" onClick={
                            function()
                            {
                              setLastReloadTime(new Date());
                              psview.propdel("CrlFeedback");
                            }
                          }>Reload Crl file</Button>
                          <ShowReloadTime/>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <PR.FileDropZone
                        tooltiptext="Drop an .arc file here or press enter/space"
                        handlefile={ function(file)
                          {
                            file.text().then( source => psview.propset( "ArcSource", source ) );
                          }}
                        extension="arc">
                        <Card tabIndex="-1">
                          <Card.Header>Arc file path</Card.Header>
                          <Card.Body>
                            { psview.propval( "ArcSource")[0] ? psview.propval( "ArcSource")[0].match(/[^\r\n]+/g)[0] : "Drop .arc file here, or click / select + press space to open file selector."}
                          </Card.Body>
                        </Card>
                      </PR.FileDropZone>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <PR.FileDropZone
                        tooltiptext="Drop an .arc file here or press enter/space"
                        handlefile={ function(file)
                          {
                            file.text().then( source => psview.propset( "CrlSource", source ) );
                          }}
                        extension="crl">
                        <Card tabIndex="-1">
                          <Card.Header>Crl file path</Card.Header>
                          <Card.Body>
                            { psview.propval( "CrlSource")[0] ? psview.propval( "CrlSource")[0].match(/[^\r\n]+/g)[0] : "Drop .crl file here, or click / select + press space to open file selector."}
                          </Card.Body>

                        </Card>
                      </PR.FileDropZone>
                    </Col>
                  </Row>
                  </>
                }</PR.PSView.Consumer>
              </PR.View>
            </PR.ExternalRole>
          </Container>);
}

// Use like this: <Feedback message={psview.propval("CrlFeedback")}/>.
function Feedback( props )
{
  if (props.message[0] && props.message[0].match(/[\r\t]/))
  {
    return <pre>{props.message[0]}</pre>;
  }
  else
  {
    return <Card.Text>{props.message[0]}</Card.Text>;
  }
}

Feedback.propTypes = { message: PropTypes.arrayOf( PropTypes.string.isRequired ) };
