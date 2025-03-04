import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Educations(){
  return <>
  {/*MOBILE*/}
  <section className='d-block d-lg-none container-fluid bg-primary'>
      <Row className='pt-5 ps-0'>
        <Col className='col-12 text-left mb-2'>
          <h1 className='fw-bold deep'>formations</h1>
        </Col>
      </Row>
      <section className='p-0 ps-1 pe-1'>
        <Row>
          <Col className='time-line p-0 pt-2'>
            <h6 className='text-white p-0'><span></span></h6>
            <h3 className='dot'></h3>
          </Col>
          <Col>
            <h6 className='pale text-uppercase p-0 pt-2'>mai- juin 2024</h6>
            <h4 className='deep p-0 mb-0'>Formation Python</h4>
            <span className='mb-4 pale'>Nomades advances technologies | Mention : Très bien </span>
            <p className='mb-5 neutral'>7 semaines de formation intensive en Python, couvrant les fondamentaux du langage, le développement web avec Flask, les Rest APIs, Numpy, Pandas et la conception d'applications. Projet de certification: développement de l'API REST pour "Ariane", un moteur de jeu textuel interactif.</p>
          </Col>
        </Row>
      </section>
      <section className='p-0 ps-1 pe-1'>
        <Row>
          <Col className='time-line p-0 pt-2'>
            <h6 className='text-white p-0'><span></span></h6>
            <h3 className='dot'></h3>
          </Col>
          <Col>
            <h6 className='pale text-uppercase p-0 pt-2'>février- mars 2024</h6>
            <h4 className='deep p-0 mb-0'>Formation REACT</h4>
            <span className='mb-4 pale '>Nomades advances technologies | Mention : Très bien </span>
            <p className='mb-5 neutral'>Formation intensive de 6 semaines en JavaScript, React et Firebase. Projet de certification : développement de la partie front-end d’un moteur de jeu textuel destiné à aider les auteurs d'histoires interactives.</p>
          </Col>
        </Row>
      </section>
      <section className='p-0 ps-1 pe-1'>
        <Row>
          <Col className='time-line p-0 pt-2'>
            <h6 className='text-white p-0'><span></span></h6>
            <h3 className='dot'></h3>
          </Col>
          <Col>
            <h6 className='pale text-uppercase p-0 pt-2'>2013-2014</h6>
            <h4 className='deep p-0 mb-0'>Technicienne en informatique</h4>
            <span className='mb-4 pale '>CFPT 1er année | Genève</span>
          </Col>
        </Row>
      </section>
      <section className='p-0 ps-1 pe-1'>
        <Row>
          <Col className='time-line p-0 pt-2'>
            <h6 className='text-white p-0'><span></span></h6>
            <h3 className='dot'></h3>
          </Col>
          <Col>
            <h6 className='pale text-uppercase p-0 pt-2'>2008-2013</h6>
            <h4 className='deep p-0 mb-0'>CFC d’informaticienne</h4>
            <span className='mb-4 pale'>CFPT | Genève</span>
            <p></p>
          </Col>
        </Row>
      </section>
    </section>
  {/*LARGER*/}
  <section className='d-lg-block d-none pt-4 container-fluid bg-primary'>
    <Row className='pt-5 ps-5'>
      <Col className='col-12 text-center mb-2'>
        <h1 className='fw-bold deep'>formations</h1>
      </Col>
    </Row>
    <section className='p-0 ps-1 pe-1'>
      <Row>
        <Col className='col-6'>
          <h6 className='pale text-uppercase text-end p-0 pt-2'>mai- juin 2024</h6>
        </Col>
        <Col className='time-line p-0 pt-2'>
          <h3 className='dot'></h3>
        </Col>
        <Col>
          <h4 className='deep p-0 mb-0'>Formation Python</h4>
          <span className='pale d-block mb-4'>Nomades advances technologies | Mention : Très bien </span>
          <p className='mb-5 neutral '>7 semaines de formation intensive en Python, couvrant les fondamentaux du langage, le développement web avec Flask, les Rest APIs, Numpy, Pandas et la conception d'applications. Projet de certification: développement de l'API REST pour "Ariane", un moteur de jeu textuel interactif.</p>
        </Col>
      </Row>
    </section>
    <section className='p-0 ps-1 pe-1'>
      <Row>
        <Col className='col-6 d-none d-lg-block'>
          <h6 className='pale text-uppercase text-end p-0 pt-2'>février- mars 2024</h6>
        </Col>
        <Col className='time-line p-0 pt-2'>
          <h6 className='d-block d-md-none text-white p-0'><span></span></h6>
          <h3 className='dot'></h3>
        </Col>
        <Col>
          <h4 className='deep p-0 mb-0'>Formation REACT</h4>
          <span className='pale d-block mb-4'>Nomades advances technologies | Mention : Très bien </span>
          <p className='mb-5 neutral'>Formation intensive de 6 semaines en JavaScript, React et Firebase. Projet de certification : développement de la partie front-end d’un moteur de jeu textuel destiné à aider les auteurs d'histoires interactives.</p></Col>
      </Row>
    </section>
    <section className='p-0 ps-1 pe-1'>
      <Row>
        <Col className='col-6 d-none d-lg-block'>
          <h6 className='pale text-uppercase text-end p-0 pt-2'>2013-2014</h6>
        </Col>
        <Col className='time-line p-0 pt-2'>
          <h6 className='d-block d-md-none text-white p-0'><span></span></h6>
          <h3 className='dot'></h3>
        </Col>
        <Col>
          <h4 className='deep p-0 mb-0'>Technicienne en informatique</h4>
          <span className='pale d-block mb-4'>CFPT 1er année | Genève </span>
        </Col>
      </Row>
    </section>
    <section className='p-0 ps-1 pe-1'>
      <Row>
        <Col className='col-6 d-none d-lg-block'>
          <h6 className='pale text-uppercase text-end p-0 pt-2'>2008-2013</h6>
        </Col>
        <Col className='time-line p-0 pt-2'>
          <h6 className='d-block d-md-none text-white p-0'><span></span></h6>
          <h3 className='dot'></h3>
        </Col>
        <Col>
          <h4 className='deep p-0 mb-0'>CFC d’informaticienne</h4>
          <span className='pale d-block mb-4'>CFPT | Genève</span>
        </Col>
      </Row>
    </section>
  </section>
  </>
}