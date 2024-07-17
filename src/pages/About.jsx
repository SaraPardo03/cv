import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export function About(){
  return <>
    <section className='d-block d-md-none about-container container-fluid'>
      <Row className='about-row font-figtree'>
        <Col className='about-left col-12 p-2'>
          <h1 className='fw-bold'>L'art du code</h1>
          <p className='fs-5 text-justify'>Depuis 2008, je développe des applications utiles et ergonomiques. Grâce à ma formation et mon expérience professionnelle, je transforme des problèmes complexes en solutions simples et efficaces. J'accorde une attention particulière aux détails pour produire du code propre et performant.</p>
        </Col>
        <Col className='about-center col-12 p-2'>
          <Image className="mh-50" src="../src/assets/img/face.png" fluid />
        </Col>
        <Col className='about-right col-12 p-2'>
          <h1 className='fw-bold'>L'algorithme créatif</h1>
          <p className='fs-5text-justify'>En parallèle de mon travail, je suis passionnée par le dessin et le design graphique. J'aime explorer de nouvelles idées et créer des œuvres visuellement captivantes et intuitives.</p>
        </Col>
      </Row>
    </section>
    <section className="d-none d-md-block about-container container-fluid">
      <Row className='about-row font-figtree'>
        <Col className='about-left p-4 pe-0'>
          <h1 className='fw-bold'>L'art du code</h1>
          <p className='fs-5 fw-lighter text-justify'>Depuis 2008, je développe des applications utiles et ergonomiques. Grâce à ma formation et mon expérience professionnelle, je transforme des problèmes complexes en solutions simples et efficaces. J'accorde une attention particulière aux détails pour produire du code propre et performant.</p>
        </Col>
        <Col className='about-center 100-vh p-0'>
          <div className='p-0 vh-100 d-flex align-items-center flex-colum'>
            <div className='p-0 mt-center'>
              <Image className="mh-50" src="../src/assets/img/face.png" fluid />
            </div>
          </div>
        </Col>
        <Col className='about-right p-0'>
          <div className='vh-100 p-0 ps-0 d-flex align-items-end flex-colum'>
            <div className='p-4 ps-0 mt-auto'>
              <h1 className='fw-bold'>L'algorithme créatif</h1>
              <p className='fs-5 fw-lighter text-justify'>En parallèle de mon travail, je suis passionnée par le dessin et le design graphique. J'aime explorer de nouvelles idées et créer des œuvres visuellement captivantes et intuitives.</p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  </>
}