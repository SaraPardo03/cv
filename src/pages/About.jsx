import { Image } from 'react-bootstrap';
import MainNav from '../components/MainNav';
import { Experiences } from './Experiences';
import { Educations } from './Educations';
import { Skills } from './Skills';
import { PresentationProjects } from './PresentationProjects';
import imageFace from '../assets/img/image-1.png';
import imageFaceNB from '../assets/img/image-2.png';

export function About(){
  let firstSubTitle = "Développeuse d'applications ergonomiques et efficaces"
  let secondSubTitle = "Passionnée de design et UI/UX"
  let firstP = "Depuis 2008, je crée des applications ergonomiques en transformant des problèmes complexes en solutions simples avec un code propre et performant."
  let secondP = "En parallèle de mon travail, je suis passionnée par le dessin, le design graphique et le UI/UX, créant des œuvres captivantes et des interfaces esthétiques et fonctionnelles."
 
 return <>
  {/* MOBIL */}
  <main className='d-block d-lg-none'>
    <header className="p-0 shadow container-fluid ">
      <MainNav/>
      <section  className='mobile d-block d-lg-none split-screen-slider-wraper skewed p-0 m-0'>
        <div className='layer bottom '>
          <div className='content-wrap'>
            <div className='content-body'>
              <h6 className='deep'>back-end</h6>
            </div>
            <Image className="" src={imageFaceNB} alt="photo en noir et blanc d'un portrait de Sarah Pardo" />
          </div>
        </div>
        <div className='layer top background-dark'>
          <div className='content-wrap'>
            <div className='content-body'>
            <h6 className='deep'>front-end</h6>
            </div>
            <Image className="" src={imageFace} alt="photo d'un portrait de Sarah Pardo" />
          </div>
        </div>
        <div className='handle'></div>
      </section>
    </header>
    <Experiences/>
    <Educations/>
    {/*<Skills/>*/}
    <PresentationProjects/>
  </main>
  {/* LARGE */}
  <main className='d-lg-block d-none about'>
    <header className="p-0 shadow container-fluid ">
      <MainNav/>
      <section className='d-none d-lg-block split-screen-slider-wraper about skewed p-0 m-0'>
        <div className='layer bottom '>
          <div className='content-wrap'>
            <div className='content-body'>
            <h1 className='deep '>
              <a className="text-decoration-none text-reset" href="/about">algorithme créatif</a></h1>
              <h2 className='pale'>{secondSubTitle}</h2>
              <p className='neutral '>{secondP}</p>
              <a href="https://github.com/SaraPardo03" className='neutral d-block icon'><i className="pe-2 bi bi-instagram"></i>Accéder à mon compte instagram</a>
            </div>
            <Image className="" src={imageFaceNB} alt="photo en noir et blanc d'un portrait de Sarah Pardo" />
          </div>
        </div>
        <div className='layer top background-dark'>
          <div className='content-wrap'>
            <div className='content-body'>
              <h1 className='deep'><a className="deep text-decoration-none text-reset" href="/about">art du code</a></h1>
              <h2 className='pale text-justify'>{firstSubTitle}</h2>
              <p className='neutral text-justify'>{firstP}</p>
              <a href="https://github.com/SaraPardo03" className='icon neutral'><i className="pe-2 bi bi-github"></i>Accéder à mon compte github</a>
            </div>
            <Image className="" src={imageFace} alt="photo d'un portrait de Sarah Pardo" />
          </div>
        </div>
        <div className='handle'></div>
      </section>
    </header>
    <Experiences/>
    <Educations/>
    <Skills/>
    <PresentationProjects/>
  </main>
  </>
}