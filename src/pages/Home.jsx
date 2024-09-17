import { Row, Col} from 'react-bootstrap';
import MainNav from '../components/mainNav';
import { PresentationProjects } from './PresentationProjects';

export function Home(){
  let firstSubTitle = "Développeuse d'applications ergonomiques et efficaces"
  let secondSubTitle = "Passionnée de design et UI/UX"
  return <>
    <main>
      <MainNav/>
      {/* MOBIL */}
      <section className='mobile p-4 d-block d-lg-none bg-clip-home shadow'>
        <Row className='home-cover-height'>
          <Col className='col-6'>
            <div className='home-cover-height d-flex align-items-center'>
              <div className='p-0 container-fluid'>
                <Row>
                  <Col className='p-0'>
                    <h5 className='light'><a className="text-decoration-none text-reset" href="/about">back-end</a></h5>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col className='col-6'>
            <div className='home-cover-height d-flex align-items-center'>
              <div className='p-0 container-fluid'>
                <Row>
                  <Col className='p-0'>
                    <h5 className='text-end'><a className="text-decoration-none text-reset" href="/about">front-end</a></h5>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      {/* LARGE */}
      <section className='p-5 d-none d-lg-block bg-clip-home shadow'>
        <Row>
          <Col className='bg-clip-secondary-home'>
            <div className='home-full-height'>
              <div className='p-0 mt-auto'>
                <Row className=''>
                  <Col className='p-0'>
                    <h1><a className="light text-decoration-none" href="/about">art du code</a></h1>
                    <h2 className='lighter text-justify'>{firstSubTitle}</h2>
                  </Col>
                  <Col className='col-5'></Col>
                  <Col className='flex-column align-items-end'>
                    <div className='home-full-height d-flex align-items-end flex-colum'>
                      <div className='p-0 container-fluid mt-auto'>
                        <Row>
                          <Col className='p-0'>
                          <h1 className='text-end'><a className="text-decoration-none text-reset" href="/about">algorithme créatif</a></h1>
                          <h2 className='dark-lighter text-end'>{secondSubTitle}</h2>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <PresentationProjects/>
    </main>
  </>
}