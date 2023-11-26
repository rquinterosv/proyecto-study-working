import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import img1 from '../img/img.jpg';

function Service2() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <Card className="w-100">
            <Card.Body className="d-flex">
              <div>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </div>
              <div className="mr-3 image-service">
                <Image src={img1} alt="Image" thumbnail />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Service2;
