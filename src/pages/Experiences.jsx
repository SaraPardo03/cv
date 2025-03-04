import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Experiences(){
  return <>
    {/*MOBILE*/}
    <section className='d-block d-lg-none bg-secondary container-fluid background-dark'>
      <Row className='pt-5 ps-0'>
        <Col className='col-12 text-left mb-2'>
          <h1 className='fw-bold deep'>expériences</h1>
        </Col>
      </Row>
      <section className='p-0 ps-1 pe-1'>
        <Row>
          <Col className='time-line p-0 pt-2'>
            <h6 className='text-white p-0'><span></span></h6>
            <h3 className='dot'></h3>
          </Col>
          <Col>
            <h6 className='pale text-uppercase  p-0 pt-2'>2016 - 2022</h6>
            <h4 className='deep p-0 mb-0'>Développeuse full-stack </h4>
            <span className='mb-4 pale'>Topnet Sa | Genève</span>
            <p className='mb-5 neutral'>J’ai contribué au développement d'applications métiers en utilisant EXTJS, JavaScript, HTML5, CSS3 et le modèle MVC pour le front-end, ainsi que PHP, SQL, Bash et la POO pour le back-end. J'ai analysé et intégré des processus RH, commerciaux et d'exploitation, et réalisé des tests pour garantir la qualité des développements. J'ai estimé et planifié les projets, rédigé des documentations techniques et des guides utilisateurs, formé et supporté les utilisateurs, et conçu des maquettes d'écrans. J'ai également géré les versions avec GIT, assurant une collaboration efficace et la continuité des développements.</p>
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
            <h6 className='pale text-uppercase  p-0 pt-2'>2008 - 2013</h6>
            <h4 className='deep p-0 mb-0 light'>Apprentie informaticienne</h4>
            <span className='pale mb-4'>Hyl-Informatique | Genève</span>
            <p className='mb-5 neutral '>J'ai développé des sites web dynamiques et responsives avec HTML5, CSS3, PHP et SQL, tout en gérant des bases de données et en assurant des sauvegardes et restaurations. J'ai également fourni un support technique et une aide à la clientèle de qualité, tout en vendant, installant et configurant du matériel informatique.</p>
          </Col>
        </Row>
      </section>
    </section>
    {/*LARGER*/}
    <section className='d-lg-block d-none scrol bg-secondary container-fluid background-dark'>
      <Row className='pt-5 ps-5'>
        <Col className='d-none d-lg-block col-12 text-center mb-2'>
          <h1 className='fw-bold deep'>expériences</h1>
        </Col>
      </Row>
      <section className='p-0 ps-1 pe-1'>
        <Row>
          <Col className='col-6'>
            <h6 className='text-uppercase text-end p-0 pt-2 pale'>2016 - 2022</h6>
          </Col>
          <Col className='time-line p-0 pt-2'>
            <h3 className='dot'></h3>
          </Col>
          <Col className=''>
            <h4 className='deep p-0 mb-0'>Développeuse full-stack </h4>
            <span className='d-block mb-4 pale'>Topnet Sa | Genève</span>
            <p className='mb-5 neutral'>J’ai contribué au développement d'applications métiers en utilisant EXTJS, JavaScript, HTML5, CSS3 et le modèle MVC pour le front-end, ainsi que PHP, SQL, Bash et la POO pour le back-end. J'ai analysé et intégré des processus RH, commerciaux et d'exploitation, et réalisé des tests pour garantir la qualité des développements. J'ai estimé et planifié les projets, rédigé des documentations techniques et des guides utilisateurs, formé et supporté les utilisateurs, et conçu des maquettes d'écrans. J'ai également géré les versions avec GIT, assurant une collaboration efficace et la continuité des développements.</p>
          </Col>
        </Row>
      </section>
      <section className='p-0 ps-1 pe-1'>
        <Row>
          <Col className='col-6'>
            <h6 className='pale text-uppercase text-end p-0 pt-2'>2008 - 2013</h6>
          </Col>
          <Col className='time-line p-0 pt-2'>
            <h3 className='dot'></h3>
          </Col>
          <Col>
            <h4 className='p-0 mb-0 deep'>Apprentie informaticienne</h4>
            <span className='d-block mb-4 pale'>Hyl-Informatique | Genève</span>
            <p className='mb-5 neutral'>J'ai développé des sites web dynamiques et responsives avec HTML5, CSS3, PHP et SQL, tout en gérant des bases de données et en assurant des sauvegardes et restaurations. J'ai également fourni un support technique et une aide à la clientèle de qualité, tout en vendant, installant et configurant du matériel informatique.</p>
          </Col>
        </Row>
      </section>
    </section>
  </>
}