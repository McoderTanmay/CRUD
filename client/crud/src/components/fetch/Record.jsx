import "./records.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Records({ details, onDelete, onUpdate}) {
  function deleteHandeler(event){
    event.preventDefault();
    onDelete(details?._id);
  }

  function updateHandeler(event){
    event.preventDefault();
    onUpdate(details?._id)
  }
  return (
    <Card className="me-3 mt-4" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>{details?.name}</Card.Text>
        <Card.Text>{details?.email}</Card.Text>
        <Card.Text>{details?.phone}</Card.Text>
        //edit
        <div className="custom-btn">
          <Button className="delete-btn" onClick={deleteHandeler}>Delete</Button>
          <Button className="update-btn" onClick={updateHandeler}>Update</Button>
        </div>
        //edit
      </Card.Body>
    </Card>
  );
}

export default Records;
