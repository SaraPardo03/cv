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
          <h6 className='fw-light text-uppercase text-end p-0 pt-2'>Current - June 2023</h6>
        </Col>
        <Col className='time-line p-0 pt-2'>
          <h6 className='d-block d-md-none text-white p-0'>'</h6>
          <h3 className='dot'></h3>
        </Col>
        <Col className=''>
          <h6 className='d-block d-md-none fw-light text-uppercase  p-0 pt-2'>Current - June 2023</h6>
          <h4 className='title fw-bold p-0 mb-0'>Senior Developer @ Startselect (fulltime)</h4>
          <span className='d-block mb-4'>Eindhoven | <a href='www.goole.com'>www.google.com</a></span>
          <p className='mb-5'>At Startselect, I was a Fulltime Senior Developer working on a large, global webshop for digital games, gift cards, and other digital entertainment. The application was based on Laravel, and as a team, we followed the Scrum methodology for our work. As a senior, I provided assistance to various departments within the company to help them achieve their goals.</p>
        </Col>
      </Row>
    </section>
    <section className='experiences-list p-0 ps-1 pe-1'>
      <Row>
        <Col className='d-none d-md-block'>
          <h6 className='fw-light text-uppercase text-end p-0 pt-2'>Current - June 2023</h6>
        </Col>
        <Col className='time-line p-0 pt-2'>
          <h6 className='d-block d-md-none text-white p-0'>'</h6>
          <h3 className='dot'></h3>
        </Col>
        <Col className=''>
          <h6 className='d-block d-md-none fw-light text-uppercase  p-0 pt-2'>Current - June 2023</h6>
          <h4 className='fw-bold p-0 mb-0'>Senior Developer @ Startselect (fulltime)</h4>
          <span className='d-block mb-4'>Eindhoven | <a href='www.goole.com'>www.google.com</a></span>
          <p className='mb-5'>At Startselect, I was a Fulltime Senior Developer working on a large, global webshop for digital games, gift cards, and other digital entertainment. The application was based on Laravel, and as a team, we followed the Scrum methodology for our work. As a senior, I provided assistance to various departments within the company to help them achieve their goals.</p>
        </Col>
      </Row>
    </section>
  </section>
  </>
}