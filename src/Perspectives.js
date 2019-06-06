// The screen for model:Perspectives$PerspectivesSysteem
// a dummy for now.

import React from "react";
import {Context} from "perspectives-react";

export default function PerspectivesSysteem()
{
  return <Context contexttype="model:Perspectives$PerspectivesSysteem" contextinstance="model:User$MijnSysteem">
      <p>Dit is het mooie scherm voor PerspectivesSysteem!</p>
    </Context>
}
