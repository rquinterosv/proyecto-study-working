import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import img1 from '../img/img.jpg';

function Service1() {
  return (
    <div className="container-fluid">
      <div className="justify-content-center">
        <div className="col-lg-12">
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div className="mr-3">
                  <Image src={img1} alt="Image" thumbnail />
                </div>
                <div>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Service1;
