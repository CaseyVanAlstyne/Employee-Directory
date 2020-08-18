import React from "react";
import Form from "react-bootstrap/Form";
import React from "react-bootstrap/Container";
import React from "react-bootstrap/Row";
import React from "react-bootstrap/Col";
// style applied from frontend.css. Need to add into other component files.
import "../frontend.css";

const searchBar = (props) => {
  return (
    <Container>
      <Row>
        <Form>
          {/* The <FormControl> component renders a form control with Bootstrap styling. The <FormGroup> component wraps a form control with proper spacing, along with support for a label, help text, and validation state. To ensure accessibility, set controlId on <FormGroup>, and use <FormLabel> for the label. */}
          <Form.control
            id="inlineStyle"
            className="form-control"
            type="search"
            value={props.value}
            onChange={props.handleInputChange}
            placeholder="Use this to search for Employees!"
          />
        </Form>
      </Row>
    </Container>
  );
};

export default searchBar;
