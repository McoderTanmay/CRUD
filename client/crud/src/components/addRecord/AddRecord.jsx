import "./addRecord.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddRecord({onAdd}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name:name,
      email:email,
      phone:phone,
      password:password
    }
    onAdd(data);
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };
  function nameChangeHandeler(event){
    setName(event.target.value);
  }
  function emailChangeHandeler(event){
    setEmail(event.target.value);
  }
  function phoneChangeHandeler(event){
    setPhone(event.target.value);
  }
  function passwordChangeHandeler(event){
    setPassword(event.target.value);
  }
  return (
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
          <Form.Control type="email" placeholder="Email" onChange={emailChangeHandeler} value={email} required />
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom04">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={passwordChangeHandeler} value={password} required />
        </Form.Group>
      </Row>
      <div className="submit-btn">
        <Button type="submit">Add</Button>
      </div>
    </Form>
  );
}

export default AddRecord;
