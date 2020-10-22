import React, { Component, useState, useRef } from "react"; // ###3###

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

export function modelManagementApp_Manager()
{
  // The state is an array that holds either no elements, or a single Chat (that is, its external role).
  const [selectedModel, setSelectedModel] = useState([]);
  function listOfModels()
  {
    const SingleManagedModel = PR.roleInstance( React.forwardRef((props, ref) =>
          <PR.View viewname="allProperties">
            <PR.PSView.Consumer>
              {value => <li ref={ref} onClick={e => setSelectedModel([value.rolinstance])} aria-label={value.propval(props.labelProperty) || "New Managed Model"}><a href="#">{modelTitle(value)}</a></li> }
            </PR.PSView.Consumer>
          </PR.View>
      ) );
    return (<Container className="border border-secondary rounded p-3 mt-3"  role="application" aria-labelledby="managedModelsId">
              <Row>
                <Col>
                  <h4 id="managedModelsId">Models</h4>
                </Col>
                <Col className="text-right">
                  <PR.Rol rol="Manager">
                    <PR.PSRol.Consumer>
                      {
                        props => <PR.CreateContext contextname="model:ModelManagement$ManagedModel" rolname="Models">
                                   {/*On creating a context, we set the selectedModel.*/}
                                   <CreateButton binding={props.rolinstance}/>
                                 </PR.CreateContext>
                      }
                    </PR.PSRol.Consumer>
                  </PR.Rol>
                </Col>
              </Row>
              {/*The actual list of models.*/}
              <Row>
                <Col>
                  <ul>
                    <PR.CardList rol="Models">
                      <SingleManagedModel labelProperty="Name"/>
                    </PR.CardList>
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
            </Container>
    )
  }

  function modelTitle(value)
  {
      const title = value.propval("Name");
      if (title[0])
      {
        return title[0];
      }
      else
      {
        return "New model"
      }
  }

  function CreateButton (props)
  {
    const ctxt = {
      "rollen": { "model:ModelManagement$ManagedModel$Author":  [ { "properties": {}, "binding": props.binding } ] },
      "externeProperties": {}
    };
    return (<Button variant="light" onClick={e => props.create(ctxt).then(erole => setSelectedModel([erole]))}>New model</Button>);
  }

  // If no Model has been selected, we display the Name (including a button to add a Model) and the list of Models.
  if (!selectedModel[0])
  {
    return listOfModels();
  }
  // Otherwise, We show the perspective for that selected model.
  else
  {
    return <Container className="border border-secondary rounded p-3 mt-3">
        <Row><Col className="pb-3" ><a href="#" onClick={e => setSelectedModel([])}>Back to all models</a></Col></Row>
        <PR.Screen rolinstance={selectedModel[0]}/>
      </Container>
  }
}

export function managedModel_Author()
{
  return (<Container className="border border-secondary rounded p-3 mt-3"  role="application" aria-labelledby="managedModelId">
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
                    <PR.Rol rol="ModelDescription">
                      <PR.DropZone ariaLabel="Drop a Model here.">
                        <p>Drop a Model here</p>
                      </PR.DropZone>
                      <PR.SimpleCardForRole labelProperty="Name" />
                    </PR.Rol>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Card.Header>Repository for this model</Card.Header>
                  <Card.Body>
                    <PR.Rol rol="Repository">
                      <PR.DropZone ariaLabel="Drop a Repository role here.">
                        <p>Drop Repository here</p>
                      </PR.DropZone>
                      <PR.SimpleCardForRole labelProperty="Name" />
                    </PR.Rol>
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
                          <Button variant="primary" onClick={() => psview.propdel("ArcFeedback")}>Reload Arc file</Button>
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
                          <Button variant="primary" onClick={() => psview.propdel("CrlFeedback")}>Reload Crl file</Button>
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
                            psview.propset( "ArcPath", file.path );
                          }}
                        extension="arc">
                        <Card tabIndex="-1">
                          <Card.Header>Arc file path</Card.Header>
                          <Card.Body>
                            { psview.propval( "ArcPath")[0] ? psview.propval( "ArcPath")[0] : "Drop .arc file here, or click / select + press space to open file selector."}
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
                            psview.propset( "CrlPath", file.path );
                          }}
                        extension="crl">
                        <Card tabIndex="-1">
                          <Card.Header>Crl file path</Card.Header>
                          <Card.Body>
                            { psview.propval( "CrlPath")[0] ? psview.propval( "CrlPath")[0] : "Drop .crl file here, or click / select + press space to open file selector."}
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
