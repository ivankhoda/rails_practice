// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import * as PropTypes from "prop-types";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../components/App";

const Hello = (props) => <div>Hello {props.name}!</div>;

Hello.defaultProps = {
  name: "David",
};

Hello.propTypes = {
  name: PropTypes.string,
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={App} />
    </Router>,

    document.body.appendChild(document.createElement("div"))
  );
});
