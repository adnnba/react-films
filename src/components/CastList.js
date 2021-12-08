import { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import FilmsContext from "../utils/FilmsContext";

function CastList() {
    const{films}=useContext(FilmsContext)
    return ( <>
    
    
      <Row>
        {films.actors.map(actor => (
          <Col key={actor._id}>
            <Card border="light">

             
              <Card.Img variant="top" src={actor.photo} height="220px" style={{ borderRadius: "10px" }} />
              
              <Card.Body>
                <Card.Title>{actor.firstName}</Card.Title>
                <Card.Title>{actor.lastName}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
    
 );
}

export default CastList;