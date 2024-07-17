import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Experiences(){
  return <>
  <section className='experiences-container p-2 container font-figtree'>
    <Row>
      <Col className='d-block d-md-none col-12 text-left mb-2'>
        <h2 className='fw-bold'>Expériences</h2>
      </Col>
      <Col className='d-none d-md-block col-12 text-center mb-2'>
        <h2 className='fw-bold'>Expériences</h2>
      </Col>
    </Row>
    <section className='experiences-list p-0 ps-1 pe-1'>
      <Row>
        <Col className='d-none d-md-block'>
          <h6 className='fw-light text-uppercase text-end p-0 pt-2'>2016 - 2022</h6>
        </Col>
        <Col className='time-line p-0 pt-2'>
          <h6 className='d-block d-md-none text-white p-0'>'</h6>
          <h3 className='dot'></h3>
        </Col>
        <Col className=''>
          <h6 className='d-block d-md-none fw-light text-uppercase  p-0 pt-2'>2016 - 2022</h6>
          <h4 className='title fw-bold p-0 mb-0'>Développeuse full-stack </h4>
          <span className='d-block mb-4'>Topnet Sa | Genève</span>
          <p className='mb-5'>J’ai contribué au développement d'applications métiers en utilisant EXTJS, JavaScript, HTML5, CSS3 et le modèle MVC pour le front-end, ainsi que PHP, SQL, Bash et la POO pour le back-end. J'ai analysé et intégré des processus RH, commerciaux et d'exploitation, et réalisé des tests pour garantir la qualité des développements. J'ai estimé et planifié les projets, rédigé des documentations techniques et des guides utilisateurs, formé et supporté les utilisateurs, et conçu des maquettes d'écrans. J'ai également géré les versions avec GIT, assurant une collaboration efficace et la continuité des développements.</p></Col>
      </Row>
    </section>
    <section className='experiences-list p-0 ps-1 pe-1'>
      <Row>
        <Col className='d-none d-md-block'>
          <h6 className='fw-light text-uppercase text-end p-0 pt-2'>2008 - 2013</h6>
        </Col>
        <Col className='time-line p-0 pt-2'>
          <h6 className='d-block d-md-none text-white p-0'>'</h6>
          <h3 className='dot'></h3>
        </Col>
        <Col className=''>
          <h6 className='d-block d-md-none fw-light text-uppercase  p-0 pt-2'>2008 - 2013</h6>
          <h4 className='fw-bold p-0 mb-0'>Apprentie informaticienne</h4>
          <span className='d-block mb-4'>Hyl-Informatique | Genève</span>
          <p className='mb-5'>J'ai développé des sites web dynamiques et responsives avec HTML5, CSS3, PHP et SQL, tout en gérant des bases de données et en assurant des sauvegardes et restaurations. J'ai également fourni un support technique et une aide à la clientèle de qualité, tout en vendant, installant et configurant du matériel informatique.</p></Col>
      </Row>
    </section>
  </section>
  </>
}