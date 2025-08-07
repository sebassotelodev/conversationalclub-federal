import React, { useEffect, useState, useRef } from "react";
import ContextPrincipal from "./contextPrincipal";

function Context(props) {

  return (
    <ContextPrincipal.Provider value={{}}>
      {props.children}
    </ContextPrincipal.Provider>
  );
}

export default Context;
