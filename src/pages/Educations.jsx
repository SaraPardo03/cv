import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Educations(){
  return <>
  <section className='experiences-container p-2 container font-figtree'>
    <Row>
      <Col className='d-block d-md-none col-12 text-left mb-2'>
        <h2 className='fw-bold'>Formations</h2>
      </Col>
      <Col className='d-none d-md-block col-12 text-center mb-2'>
        <h2 className='fw-bold'>Formations</h2>
      </Col>
    </Row>
    <section className='experiences-list p-0 ps-1 pe-1'>
      <Row>
        <Col className='col-4 d-none d-md-block'>
          <h6 className='fw-light text-uppercase text-end p-0 pt-2'>mai- juin 2024</h6>
        </Col>
        <Col className='time-line p-0 pt-2'>
          <h6 className='d-block d-md-none text-white p-0'>'</h6>
          <h3 className='dot'></h3>
        </Col>
        <Col className=''>
          <h6 className='d-block d-md-none fw-light text-uppercase  p-0 pt-2'>mai- juin 2024</h6>
          <h4 className='title fw-bold p-0 mb-0'>Formation Python</h4>
          <span className='d-block mb-4'>Nomades advances technologies | Mention : Très bien </span>
          <p className='mb-5'>7 semaines de formation intensive en Python, couvrant les fondamentaux du langage, le développement web avec Flask, les Rest APIs, Numpy, Pandas et la conception d'applications. Projet de certification: développement de l'API REST pour "Ariane", un moteur de jeu textuel interactif.</p>
        </Col>
      </Row>
    </section>
    <section className='experiences-list p-0 ps-1 pe-1'>
      <Row>
        <Col className='col-4 d-none d-md-block'>
          <h6 className='fw-light text-uppercase text-end p-0 pt-2'>février- mars 2024</h6>
        </Col>
        <Col className='time-line p-0 pt-2'>
          <h6 className='d-block d-md-none text-white p-0'>'</h6>
          <h3 className='dot'></h3>
        </Col>
        <Col className=''>
          <h6 className='d-block d-md-none fw-light text-uppercase  p-0 pt-2'>février- mars 2024</h6>
          <h4 className='fw-bold p-0 mb-0'>Formation REACT</h4>
          <span className='d-block mb-4'>Nomades advances technologies | Mention : Très bien</span>
          <p className='mb-5'>Formation intensive de 6 semaines en JavaScript, React et Firebase. Projet de certification : développement de la partie front-end d’un moteur de jeu textuel destiné à aider les auteurs d'histoires interactives.</p></Col>
      </Row>
    </section>
    <section className='experiences-list p-0 ps-1 pe-1'>
      <Row>
        <Col className='col-4 d-none d-md-block'>
          <h6 className='fw-light text-uppercase text-end p-0 pt-2'>2013-2014</h6>
        </Col>
        <Col className='time-line p-0 pt-2'>
          <h6 className='d-block d-md-none text-white p-0'>'</h6>
          <h3 className='dot'></h3>
        </Col>
        <Col className=''>
          <h6 className='d-block d-md-none fw-light text-uppercase  p-0 pt-2'>2013-2014</h6>
          <h4 className='fw-bold p-0 mb-0'>Technicienne en informatique </h4>
          <span className='d-block mb-4'>CFPT 1er année | Genève</span>
        </Col>
      </Row>
    </section>
    <section className='experiences-list p-0 ps-1 pe-1'>
      <Row>
        <Col className='col-4 d-none d-md-block'>
          <h6 className='fw-light text-uppercase text-end p-0 pt-2'>2008-2013</h6>
        </Col>
        <Col className='time-line p-0 pt-2'>
          <h6 className='d-block d-md-none text-white p-0'>'</h6>
          <h3 className='dot'></h3>
        </Col>
        <Col className=''>
          <h6 className='d-block d-md-none fw-light text-uppercase  p-0 pt-2'>2008-2013</h6>
          <h4 className='fw-bold p-0 mb-0'>CFC d’informaticienne</h4>
          <span className='d-block mb-4'>CFPT | Genève</span>
        </Col>
      </Row>
    </section>
  </section>
  </>
}