import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Skills(){
  return <>
    <section className="skills-container container-fluid">
      <Row className='skills-row font-figtree'>
        <Col className='skills-left p-4 pe-0'>
          <h2 className='fw-bold pb-4'>Compétences back-end</h2>
          <h6>PHP</h6>
          <p>
            Plus de 10 ans d'expérience en développement back-end avec PHP. J'ai construit des applications web dynamiques et maintenu des serveurs, en intégrant PHP avec SQL pour la gestion de données.
          </p>
          <h6>SQL</h6>
          <p>
            Plus de 10 ans d'expérience en gestion et manipulation de bases de données relationnelles avec SQL. J'ai conçu et optimisé des bases de données pour diverses applications, assurant des sauvegardes et des restaurations efficaces.
          </p>
          <h6>BASH</h6>
          <p>
            Plus de 10 ans d'expérience en écriture de scripts Bash pour l'automatisation des tâches administratives et la gestion de systèmes Unix/Linux. J'ai utilisé Bash pour optimiser les processus de développement chez Topnet Sa.
          </p>
          <h6>POO/MVC</h6>
          <p>
            7 ans d'expérience en programmation orientée objet (POO) et en architecture MVC. J'ai appliqué ces principes pour structurer et maintenir des applications métiers complexes chez Topnet Sa.
          </p> 
          <h6>GIT</h6>
          <p>
            7 ans d'expérience en gestion de versions avec GIT. J'ai assuré une collaboration efficace et la continuité des développements en gérant les versions des projets chez Topnet Sa.
          </p>
          <h6>Python</h6>
          <p>
            Formation intensive récente en Python, couvrant les fondamentaux du langage et le développement web avec Flask. J'ai développé une API REST pour un moteur de jeu textuel interactif comme projet de certification.
          </p> 
          <h6>NoSQL/MongoDB</h6>
          <p>
            Moins d'un an d'expérience avec les bases de données NoSQL, en particulier MongoDB. J'ai acquis les compétences de base nécessaires pour gérer des données non structurées.
          </p>    
        </Col>
        <Col className='col-1 about-center 100-vh p-0'>
        </Col>
        <Col className='skillsw-right p-0'>
          <div className='vh-100 p-0 ps-0 d-flex'>
            <div className='conatiner container-fluid p-4'>
              <h2 className='fw-bold'>Compétences front-end</h2>
              <h6>HTML5</h6>
              <p>
                Plus de 10 ans d'expérience dans la création et la structuration de contenu web avec HTML5. Expérience éprouvée en développement de sites web dynamiques et responsives pendant mon apprentissage chez Hyl-Informatique et en tant que développeuse full-stack chez Topnet Sa.
              </p>
              <h6>CSS3/SASS</h6>
              <p>
                Plus de 10 ans d'expérience en stylisation de sites web avec CSS3 et SASS. J'ai créé des designs réactifs et attrayants pour diverses applications métiers et sites web.
              </p>
              <h6>Javascript</h6>
              <p>
                7 ans d'expérience en développement web interactif avec JavaScript. J'ai créé des interfaces utilisateur dynamiques et réactives en utilisant des frameworks comme EXTJS et React.
              </p>
              <h6>EXTJS</h6>
              <p>
                7 ans d'expérience avec le framework JavaScript Ext JS. J'ai développé des interfaces utilisateur riches et performantes pour des applications métiers chez Topnet Sa.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  </>
}