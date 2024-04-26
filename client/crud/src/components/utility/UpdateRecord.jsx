import "./update.css";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function UpdateRecord({onUpdate, onCancel}) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      email: email,
      phone: phone,
    };
    onUpdate(data);
  };

  function nameChangeHandeler(event) {
    setName(event.target.value);
  }
  function emailChangeHandeler(event) {
    setEmail(event.target.value);
  }
  function phoneChangeHandeler(event) {
    setPhone(event.target.value);
  }

  return (
    <div className="update-background">
      <Form onSubmit={handleSubmit} className="record-form">
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="5" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={nameChangeHandeler}
              value={name}
              placeholder="Name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="validationCustom02">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              type="Number"
              onChange={phoneChangeHandeler}
              value={phone}
              placeholder="Phone Number"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="5" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={emailChangeHandeler}
              value={email}
              required
            />
          </Form.Group>
        </Row>
        <div className="submit-btn">
          <Button type="submit" className="me-3">Update</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </div>
      </Form>
    </div>
  );
}

export default UpdateRecord;
