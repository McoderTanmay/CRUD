import "./records.css";
import Card from 'react-bootstrap/Card';

function Records({key, details}) {
  return (
    <Card className="me-3 mt-4" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Text>{details?.name}</Card.Text>
        <Card.Text>{details?.email}</Card.Text>
        <Card.Text>{details?.phone}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Records;
