import Alert from "react-bootstrap/Alert";
import React from "react";
export default function MessageBox(props) {
  return <Alert variant={props.varian || "info"}>{props.children}</Alert>;
}
