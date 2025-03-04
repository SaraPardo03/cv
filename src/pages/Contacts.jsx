import { Row, Col, Image } from 'react-bootstrap';

export function Contacts(){
  let subTitle = "projet en cours"
  let resume = "Ariane est une application conçue pour les écrivains et les créateurs de jeux textuels interactifs, offrant une interface intuitive et une carte des choix et des conséquences. Elle facilite la gestion des multiples choix narratifs."
  //let resume = "Ariane est une application intuitive de création de jeux textuels interactifs, conçue pour les auteurs. Elle offre des outils simples pour rédiger des histoires, une carte interactive pour visualiser les choix narratifs et la génération de livres en PDF."
  //let resume = "Bienvenue sur la page dédiée à notre projet Ariane ! En tant que développeuse passionnée par les technologies et les jeux textuels interactifs, j'ai entrepris de créer une application innovante avec le soutien d'une experte en écriture interactive. Depuis la pandémie de COVID-19, les jeux textuels interactifs ont connu un essor significatif, répondant à une demande croissante pour des expériences narratives engageantes. Ariane vise à révolutionner ce domaine en offrant une interface utilisateur intuitive et des outils avancés pour les créateurs d'histoires interactives."
  let title2 = "problématique et solution"
  let subTitle2 = "comprendre les défis de l'écriture interactive"
  let text2 = "Depuis la pandémie de COVID-19, les jeux textuels interactifs ont connu un essor considérable. Cependant, écrire ce type d'histoires présente des défis uniques, notamment la gestion des multiples choix et conséquences. Ariane offre une solution innovante avec une interface intuitive et une carte interactive des choix, permettant aux écrivains de visualiser les ramifications de leur récit et de gérer efficacement les différentes options narratives."

  let title3 = "fonctionnalités clés"
  let subTitle3 = "des outils innovants pour les créateurs d'histoires"
  let text3 = "Ariane se distingue par ses fonctionnalités clés conçues pour simplifier le processus de création des histoires interactives :"
  
  let title4 = "Développement"
  let subTitle4 ="Les étapes clés du développement d'Ariane"
  let text4= "Le développement d'Ariane a été divisé en plusieurs étapes clés :"
  
  return <>
  <section className='scroller'>
    <section className='p-5 pb-0 d-none shadow d-lg-block container-fluid'>
      <Row>
        <Col className='p-0 pe-5'>
          <div>
            <h1 className='m-0 fw-bold'>
              <span>{subTitle}</span>
              ariane
            </h1>
            <p>{resume}</p>
          </div>
        </Col>
        <Col className='col-7 p-0 align-self-end' align="center">
          <Image className="title-img " src="../src/assets/img/login.png" fluid/>
        </Col>
      </Row>
    </section>
    <section className="over full-height bg-diagonal90-reversed d-none d-lg-block container-fluid">
      <Row>
        <Col className='col-7 p-5 ps-0 pe-0'>
          <Image className="clip title-img " src="../src/assets/img/edit.jpg" fluid/>
        </Col>
        <Col className='p-0'>
          <div className='full-height p-0 ps-5 d-flex align-items-end flex-colum'>
            <div className='p-5 ps-0 mt-auto'>
              <h1>
                {title2}
                <span>{subTitle2}</span>
              </h1>
              <p>{text2}</p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
    <section>
      <section className="over bg-diagonal90 full-height d-none d-lg-block container-fluid ">
        <Row>
          <Col className='p-5'>
            <h1>
              {title3}
              <span>{subTitle3}</span>
            </h1>
            <p>{text3}</p>
            <ul className="p-0 list-unstyled">
              <li><span className='fw-bold'>Interface utilisateur intuitive :</span> Conçue pour être conviviale, facilitant la navigation et la création</li>
              <li><span className='fw-bold'>Carte des choix et conséquences :</span> Visualisez toutes les ramifications de votre histoire en un coup d'œil</li>
              <li><span className='fw-bold'>Outils de suivi :</span>Gérez et suivez les différentes options narratives de manière organisée.</li>
            </ul>
          </Col>
          <Col className='col-7 p-0'>
            <div className='full-height p-0 ps-0 d-flex align-items-end flex-colum'>
              <div className='p-5 pe-0 ps-0 mt-auto'>
                <Image className="clip-reversed title-img " src="../src/assets/img/edit2.jpg" fluid/>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className="over bg-diagonal93-reversed full-height d-none d-lg-block container-fluid">
        <Row>
          <Col className='p-5 ps-0 pe-0'>
            <Image className="clip title-img " src="../src/assets/img/sketch.jpg" fluid/>
          </Col>
          <Col className='p-0'>
            <div className='full-height p-0 ps-5 d-flex align-items-end flex-colum'>
              <div className='p-5 ps-0 mt-auto'>
                <h1>
                  {title4}
                  <span>{subTitle4}</span>
                </h1>
                <p>{text4}</p>
                <ul className="p-0 list-unstyled">
                  <li><span className='fw-bold'>Brainstorming :</span> Génération d'idées et définition des besoins des utilisateurs.</li>
                  <li><span className='fw-bold'>Sketchs et prototypes :</span> Visualisation rapide de l'interface utilisateur.</li>
                  <li><span className='fw-bold'>Maquettes détaillées :</span>Création de designs graphiques élaborés.</li>
                  <li><span className='fw-bold'>Développement de l'interface  :</span>Intégration des éléments graphiques et création d'une navigation fluide.</li>
                  <li><span className='fw-bold'>Tests et optimisation:</span>Recueil des retours utilisateurs et amélioration de l'application.</li>
                  <li><span className='fw-bold'>Maquettes détaillées :</span>Création de designs graphiques élaborés.</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className="over bg-diagonal90 full-height d-none d-lg-block container-fluid ">
        <Row>
          <Col className='p-5'>
            <h1>
              {title3}
              <span>{subTitle3}</span>
            </h1>
            <p>{text3}</p>
            <ul className="p-0 list-unstyled">
              <li><span className='fw-bold'>Interface utilisateur intuitive :</span> Conçue pour être conviviale, facilitant la navigation et la création</li>
              <li><span className='fw-bold'>Carte des choix et conséquences :</span> Visualisez toutes les ramifications de votre histoire en un coup d'œil</li>
              <li><span className='fw-bold'>Outils de suivi :</span>Gérez et suivez les différentes options narratives de manière organisée.</li>
            </ul>
          </Col>
          <Col className='col-7 p-0'>
            <div className='full-height p-0 ps-0 d-flex align-items-end flex-colum'>
              <div className='p-5 pe-0 ps-0 mt-auto'>
                <Image className="title-img " src="../src/assets/img/edit2.jpg" fluid/>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </section>
  </section>
  </>
}