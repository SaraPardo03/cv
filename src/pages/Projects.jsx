import { Row, Col, Image, Container } from 'react-bootstrap';
import MainNav from '../components/mainNav';

export function Projects(){
  let subTitle = "projet en cours"
  let resume = "Ariane est une application conçue pour les écrivains et les créateurs de jeux textuels interactifs, offrant une interface intuitive et une carte des choix et des conséquences. Elle facilite la gestion des multiples choix narratifs."
  let title2 = "problématique"
  let subTitle2 = "comprendre les défis de l'écriture interactive"
  //let text2 = "Depuis la pandémie de COVID-19, les jeux textuels interactifs ont connu un essor considérable. Cependant, écrire ce type d'histoires présente des défis uniques, notamment la gestion des multiples choix et conséquences. Ariane offre une solution innovante avec une interface intuitive et une carte interactive des choix, permettant aux écrivains de visualiser les ramifications de leur récit et de gérer efficacement les différentes options narratives."
  let text2 = "L'écriture interactive présente des défis distincts, tels que la gestion des chemins narratifs multiples et la garantie d'une expérience utilisateur cohérente. Contrairement aux récits linéaires, elle nécessite une planification précise pour intégrer des choix significatifs sans compromettre la fluidité de l'histoire."
  let title3 = "solutions"
  let subTitle3 = "des outils innovants pour les créateurs d'histoires"
  let text3 = "Ariane se distingue par ses fonctionnalités clés conçues pour simplifier le processus de création des histoires interactives :"
  
  let title4 = "développement"
  let subTitle4 ="Une approche iterative et collaborative"
  let text4= "Le développement d'Ariane a suivi une méthodologie Agile, assurant un processus itératif et collaboratif. Des sessions de brainstorming aux tests utilisateurs, chaque étape a été soigneusement planifiée pour créer une application de haute qualité."
  

  let title5 = "explorer ariane"
  let subTitle5 ="Transformez votre processus de création"
  let text5= "Ariane est bien plus qu'un simple outil – c'est votre allié dans la création d'histoires interactives captivantes. Avec ses fonctionnalités intuitives et innovantes, Ariane vous aide à structurer et enrichir vos récits de manière efficace. Explorez dès maintenant Ariane et découvrez comment cette application peut révolutionner votre manière d'écrire."
  
  return <>
    {/*MOBILE */}
    <main className='d-block d-lg-none mobile'>
      <MainNav/>
      <header className='p-4 shadow'>
        <Row>
          <Col className='col-12 pb-4' align="center">
            <Image className="title-img " src="../src/assets/img/arianeP.png" fluid/>
          </Col>
          <Col>
            <h1 className='m-0 fw-bold position-relative'>
              <span className='dark-lighter position-absolute'>{subTitle}</span>
              ariane
            </h1>
            <p>{resume}</p>
          </Col>
        </Row>
      </header>
      <section className='bg-text p-0'>
        <Container className='container-fluid bg-clip clip1'>
          <Row>
            <Col className='col-12 full-height'>
            </Col>
          </Row>
        </Container>
        <Container className='bg-text container-fluid'>
          <Row>
            <Col className='p-4 col-12'>
                <h1 className='light'>
                  {title2}
                  <span className='lighter'>{subTitle2}</span>
                </h1>
                <p className='light'>{text2}</p>
              </Col>
          </Row>
        </Container>
      </section>
      <section className='p-0 bg-text-secondary'>
        <Container className='container-fluid bg-clip-reversed clip2'>
          <Row>
            <Col className='col-12 full-height'>
            </Col>
          </Row>
        </Container>
        <Container className='bg-text-secondary container-fluid'>
          <Row>
            <Col className='p-4 col-12'>
                <h1 className=''>
                  {title3}
                  <span className='dark-lighter'>{subTitle3}</span>
                </h1>
                <p className=''>{text3}</p>
                <ul className="light p-0 list-unstyled">
                  <li><span className='fw-bold'>Interface utilisateur intuitive :</span> Conçue pour être conviviale, facilitant la navigation et la création</li>
                  <li><span className='fw-bold'>Carte des choix et conséquences :</span> Visualisez toutes les ramifications de votre histoire en un coup d'œil</li>
                  <li><span className='fw-bold'>Outils de suivi :</span> Gérez et suivez les différentes options narratives de manière organisée.</li>
                </ul>
              </Col>
          </Row>
        </Container>
      </section>
      <section className='p-0 bg-text'>
        <Container className='container-fluid bg-clip clip3'>
          <Row>
            <Col className='col-12 full-height'>
            </Col>
          </Row>
        </Container>
        <Container className='bg-text container-fluid'>
          <Row>
            <Col className='p-4 col-12'>
                <h1 className='light'>
                  {title4}
                  <span className='lighter'>{subTitle4}</span>
                </h1>
                <p className='light'>{text4}</p>
                <ul className="light text-end p-0 list-unstyled">
                  <li className='light'><span className='light fw-bold'>Brainstorming :</span> Génération d'idées et définition des besoins des utilisateurs.</li>
                  <li className='light'><span className='light fw-bold'>Sketchs et prototypes :</span> Visualisation rapide de l'interface utilisateur.</li>
                  <li className='light'><span className='light fw-bold'>Maquettes détaillées :</span> Création de designs graphiques élaborés.</li>
                  <li className='light'><span className='light fw-bold'>Développement de l'interface  :</span> Intégration des éléments graphiques et création d'une navigation fluide.</li>
                  <li className='light'><span className='light fw-bold'>Tests et optimisation:</span> Recueil des retours utilisateurs et amélioration de l'application.</li>
                  <li className='light'><span className='light fw-bold'>Maquettes détaillées :</span> Création de designs graphiques élaborés.</li>
                </ul>
              </Col>
          </Row>
        </Container>
      </section>
      <section className='p-0 bg-text-secondary'>
        <Container className='container-fluid bg-clip-reversed clip4'>
          <Row>
            <Col className='col-12 full-height'>
            </Col>
          </Row>
        </Container>
        <Container className='bg-text-secondary container-fluid'>
          <Row>
            <Col className='p-4 col-12'>
                <h1 className=''>
                  {title5}
                  <span className='dark-lighter'>{subTitle5}</span>
                </h1>
                <p className=''>{text5}</p>
              </Col>
          </Row>
        </Container>
      </section>
    </main>
    {/* LARGER */}
    <main className='scroller d-none d-lg-block'>
      <header className="p-0 shadow container-fluid ">
        <MainNav/>
        <Container className='p-5 pb-0 container-fluid'>
          <Row>
            <Col className='p-0 pe-5'>
              <div>
                <h1 className='m-0 fw-bold position-relative'>
                  <span className='dark-lighter position-absolute'>{subTitle}</span>
                  ariane
                </h1>
                <p className=''>{resume}</p>
              </div>
            </Col>
            <Col className='col-7 p-0 align-self-end' align="center">
              <Image className="title-img " src="../src/assets/img/arianeP.png" fluid/>
            </Col>
          </Row>
        </Container>
      </header>
      <section className='p-0 bg-clip clip1'>
        <Row>
          <Col className='bg-clip-reversed-secondary flex-column align-items-end'>
            <div className='full-height d-flex align-items-end flex-colum'>
              <div className='p-5 mt-auto'>
                <Row>
                  <Col></Col>
                  <Col className='col-6'>
                    <h1 className='text-end light'>
                      {title2}
                      <span className='lighter'>{subTitle2}</span>
                    </h1>
                    <p className='light text-end'>{text2}</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className='p-0 bg-clip clip2'>
        <Row>
          <Col className='bg-clip-secondary position-relative'>
            <div className='full-height d-flex align-items-end flex-colum'>
              <div className='p-5 mt-auto'>
                <Row>
                  <Col className='col-6'>
                    <h1>
                      {title3}
                      <span className='dark-lighter'>{subTitle3}</span>
                    </h1>
                    <p className=''>{text3}</p>
                    <ul className=" p-0 list-unstyled">
                      <li><span className='fw-bold'>Interface utilisateur intuitive :</span> Conçue pour être conviviale, facilitant la navigation et la création</li>
                      <li><span className='fw-bold'>Carte des choix et conséquences :</span> Visualisez toutes les ramifications de votre histoire en un coup d'œil</li>
                      <li><span className='fw-bold'>Outils de suivi :</span> Gérez et suivez les différentes options narratives de manière organisée.</li>
                    </ul>
                  </Col>
                  <Col></Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className='p-0 bg-clip clip3'>
        <Row>
          <Col className='bg-clip-reversed-secondary flex-column align-items-end'>
            <div className='full-height d-flex align-items-end flex-colum'>
              <div className='p-5 mt-auto'>
                <Row>
                  <Col></Col>
                  <Col className='col-6'>
                    <h1 className='light text-end'>
                      {title4}
                      <span className='lighter'>{subTitle4}</span>
                    </h1>
                    <p className='light text-end'>{text4}</p>
                    <ul className="light text-end p-0 list-unstyled">
                      <li className='light'><span className='light fw-bold'>Brainstorming :</span> Génération d'idées et définition des besoins des utilisateurs.</li>
                      <li className='light'><span className='light fw-bold'>Sketchs et prototypes :</span> Visualisation rapide de l'interface utilisateur.</li>
                      <li className='light'><span className='light fw-bold'>Maquettes détaillées :</span> Création de designs graphiques élaborés.</li>
                      <li className='light'><span className='light fw-bold'>Développement de l'interface  :</span> Intégration des éléments graphiques et création d'une navigation fluide.</li>
                      <li className='light'><span className='light fw-bold'>Tests et optimisation:</span> Recueil des retours utilisateurs et amélioration de l'application.</li>
                      <li className='light'><span className='light fw-bold'>Maquettes détaillées :</span> Création de designs graphiques élaborés.</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className='p-0 bg-clip clip4'>
        <Row>
          <Col className='bg-clip-secondary position-relative'>
            <div className='full-height d-flex align-items-end flex-colum'>
              <div className='p-5 mt-auto'>
                <Row>
                  <Col className='col-6'>
                    <h1 className=''>
                      {title5}
                      <span className='dark-lighter'>{subTitle5}</span>
                    </h1>
                    <p className=''>{text5}</p>
                  </Col>
                  <Col></Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </main>
  </>
}