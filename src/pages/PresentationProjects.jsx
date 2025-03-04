import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import arianeP from '../assets/img/arianeP.png';

export function PresentationProjects(){
  const navigate = useNavigate();
  let subTitle = "Projet en cours"
  let title = "ariane"
  let sub = "Votre compagnon pour la création d'histoires interactives"
  let resume = "Une application innovante pour les écrivains et créateurs de jeux textuels interactifs. Découvrez comment Ariane peut transformer votre processus de création et donner vie à vos récits interactifs."

  const handleClickGoToProjets = e => {
		navigate(`/projects`);
	}
  return <>
  {/* MOBILE */}
  <section className='presentation-projects p-4 d-block d-lg-none container-fluid mobile background-dark'>
    <div className="p-4 px-0 divider d-flex align-items-center">
      <h6 className="pale text-center mx-5 mb-0">{subTitle}</h6>
    </div>
    <Row>
      <Col className='col-12 py-4'>
        <Image className="mh-50" src={arianeP} fluid />
      </Col>
      <Col className="col-12">
        <div className=''>
          <h1 className='pb-2 fw-bold deep'>
            {title}
            <span className='pale'>{sub}</span>
          </h1>
          <p className='neutral'>{resume}</p>
          <div className="pt-4 d-grid">
            <Button onClick={handleClickGoToProjets} className="fw-bold" size="lg" variant="dark">En savoir plus</Button>
          </div>
        </div>
      </Col>
    </Row>
  </section>
  {/* LARGER*/}
  <section className='presentation-projects d-none d-lg-block container-fluid background-dark'>
    <div className="p-5 pb-0 divider d-flex align-items-center">
      <h6 className="pale text-center mx-5 mb-0">{subTitle}</h6>
    </div>
    <Row>
      <Col className="p-5 col-5">
        <div className=''>
          <h1 className='pb-2 fw-bold deep'>
            {title}
            <span className='pale'>{sub}</span>
          </h1>
          <p className='neutral'>{resume}</p>
          <Button onClick={handleClickGoToProjets} className="p-5 pt-2 pb-2 fw-bold" size="lg" variant="dark">En savoir plus</Button>
        </div>
      </Col>
      <Col className='d-none d-sm-block p-0 pe-5 pt-5 pb-1 '>
        <Image className="mh-50" src={arianeP} fluid />
      </Col>
    </Row>
  </section>
  </>
}