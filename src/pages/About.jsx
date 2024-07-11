import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function About(){
  return <>
    <Container className="about-container">
      <Row>
        <Col>
        <h1>L'art du code</h1>
        <p>Depuis 2008, je développe des applications utiles et ergonomiques. Grâce à ma formation et mon expérience professionnelle, je transforme des problèmes complexes en solutions simples et efficaces. J'accorde une attention particulière aux détails pour produire du code propre et performant.</p>
        </Col>
        <Col>
        <h1>L'algorithme créatif</h1>
        <p>En parallèle de mon travail, je suis passionnée par le dessin et le design graphique. J'aime explorer de nouvelles idées et créer des œuvres visuellement captivantes et intuitives.</p>
        </Col>
      </Row>
    </Container>
  </>
}