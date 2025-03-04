import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SkillBar({right, skill, pourcentage, label}){
  return <>
    <div className='pb-3'>
      <Row>
        <Col className='col-2'>
          <h6>{skill}</h6>
        </Col>
        <Col className='col pe-2'>
          <ProgressBar>
            <ProgressBar className={`${right ? "progressBarHolder" : "d-none"}`} now={100-pourcentage} key={1} />
            <ProgressBar variant="danger" label={label} now={pourcentage} key={2} />
          </ProgressBar>
        </Col>
      </Row>
    </div>
  </>
}

export default SkillBar