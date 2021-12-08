import { useContext } from "react"
import { Card, Col, Container, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import FilmsContext from "../utils/FilmsContext"
function OneFilm() {
  const { films } = useContext(FilmsContext)
  const { filmId } = useParams()
  const film = films.find(film => film._id === filmId)
  if (!film) return <h1>Loding...</h1>
  return (
   <Container>
    <Row >
        <Col   style={{
          backgroundImage:  `url("${film.poster}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
       
        }}  >
     <Row>
    
      <Col md="4" style={{marginLeft:"50px"}}>
        <Image variant="top" src={film.poster} height="300px" width="200px" style={{ borderRadius: "10px" }} />
      </Col>
      <Col md="6">
        <h1 className="text-white">{film.title}</h1>
        <p className="text-muted">{film.description}</p>
      </Col>

      </Row>
      </Col>
    </Row>
     <Row>
   
      
         <Card border="light">

          
           <Card.Img variant="top" src={film.director.photo} style={{ borderRadius: "10px" }} />
           
           <Card.Body>
             <Card.Title>{film.director.firstName}</Card.Title>
             <Card.Title>{film.director.lastName}</Card.Title>
             <Card.Title>{film.director.type}</Card.Title>
           </Card.Body>
         </Card>
       
   
   </Row>
  </Container>
     
  )
}

export default OneFilm
