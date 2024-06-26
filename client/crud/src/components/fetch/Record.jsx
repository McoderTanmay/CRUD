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
      <Card.Img variant="top" src= />
      <Card.Body>
        <Card.Text>{details?.profile?.firstName} {details?.profile?.lastName}</Card.Text>
        <Card.Text>{details?.profile?.email}</Card.Text>
        <Card.Text>{details?.jobTitle}</Card.Text>
        <Card.Text>{details?.Bio}</Card.Text>
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
