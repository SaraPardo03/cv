import { Row, Col, Badge, Stack } from 'react-bootstrap';
export function Skills(){
  return <>
    <section className="container-fluid">
      <Row>
        <Col className='p-2 p-md-4 pe-0'>
          <h1 className='fw-bold pb-4 deep'>Back-end</h1>
          <h6 className='deep'>PHP/SQL</h6>
          <ul className='grp-skills'>
            <li><Badge bg="secondary">PHP 7/8</Badge></li>
            <li><Badge bg="secondary">POO</Badge></li>
            <li><Badge bg="secondary">API REST</Badge></li>
            <li><Badge bg="secondary">Sessions & Cookies</Badge></li>
            <li><Badge bg="secondary">MySQL</Badge></li>
            <li><Badge bg="secondary">SQL</Badge></li>
            <li><Badge bg="secondary">Sécurité</Badge></li>
            <li><Badge bg="secondary">Bases de données</Badge></li>
            <li><Badge bg="secondary">API externes</Badge></li>
          </ul>
          <h6>Python</h6>
          <ul className='grp-skills'>
            <li><Badge bg="secondary">Python 3</Badge></li>
            <li><Badge bg="secondary">POO</Badge></li>
            <li><Badge bg="secondary">Flask</Badge></li>
            <li><Badge bg="secondary">API REST</Badge></li>
            <li><Badge bg="secondary">Gestion des dépendances</Badge></li>
            <li><Badge bg="secondary">Manipulation de données</Badge></li>
            <li><Badge bg="secondary">JWT</Badge></li>
            <li><Badge bg="secondary">NoSQL (Firebase, MongoDB)</Badge></li>
          </ul>
          <h6>BASH</h6>
          <ul className='grp-skills'>
            <li><Badge bg="secondary">Scripting Bash</Badge></li>
            <li><Badge bg="secondary">Automatisation des tâches</Badge></li>
            <li><Badge bg="secondary">Manipulation des fichiers</Badge></li>
            <li><Badge bg="secondary">Gestion des permissions</Badge></li>
            <li><Badge bg="secondary">Utilisation des variables</Badge></li>
            <li><Badge bg="secondary">Planification avec cron</Badge></li>
          </ul>
          <h6>Outils</h6>
          <ul className='grp-skills'>
            <li><Badge bg="secondary">Git</Badge></li>
            <li><Badge bg="secondary">GitHub</Badge></li>
            <li><Badge bg="secondary">Trello</Badge></li>
            <li><Badge bg="secondary">Diagrammes de Gantt</Badge></li>
            <li><Badge bg="secondary">Méthodologie Agile</Badge></li>
            <li><Badge bg="secondary">Kanban</Badge></li>
          </ul>
        </Col>
        <Col className='bg-secondary background-dark p-2 p-md-4 pt-4'>
          <h1 className='fw-bold pb-4 deep'>Front-end</h1>
          <h6 className='deep'>HTML & CSS</h6>
          <ul className="grp-skills">
            <li><Badge bg="primary deep">HTML5</Badge></li>
            <li><Badge bg="primary deep">CSS3</Badge></li>
            <li><Badge bg="primary deep">Grid/Flexbox</Badge></li>
            <li><Badge bg="primary deep">Responsive Design</Badge></li>
            <li><Badge bg="primary deep">SASS</Badge></li>
            <li><Badge bg="primary deep">Bootstrap</Badge></li>
          </ul>
          <h6 className='deep'>JavaScript</h6>
          <ul className="grp-skills">
            <li><Badge bg="primary deep">ES6+</Badge></li>
            <li><Badge bg="primary deep">React</Badge></li>
            <li><Badge bg="primary deep">ExtJS</Badge></li>
            <li><Badge bg="primary deep">TypeScript</Badge></li>
          </ul>
          <h6 className='deep'>Design et Prototypage</h6>
          <ul className="grp-skills">
            <li><Badge bg="primary deep">Figma</Badge></li>
            <li><Badge bg="primary deep">Adobe XD</Badge></li>
            <li><Badge bg="primary deep">UI/UX Design</Badge></li>
            <li><Badge bg="primary deep">Material Design</Badge></li>
          </ul>
        </Col>
      </Row>
    </section>
  </>
}