import React, { useState, useRef} from 'react';
import MainNav from '../components/MainNav';
import { PresentationProjects } from './PresentationProjects';
import Lottie from "lottie-react";
import circuit from '../assets/img/circuit.json'
import Image from 'react-bootstrap/Image';
import imageFace from '../assets/img/image-1.png';
import imageFaceNB from '../assets/img/image-2.png';

export function Home_old(){
  let firstSubTitle = "Développeuse d'applications ergonomiques et efficaces";
  let secondSubTitle = "Passionnée de design et UI/UX";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const wraperRef = useRef(null);
  const topRef = useRef(null);
  const handleRef = useRef(null);
  let skew = 0;
  let delta = 0;

  if (wraperRef.current){
    if(wraperRef.current.className.indexOf("skewed") != -1){
      skew = 1000;
    }
  }

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });

    delta = (mousePosition.x - window.innerWidth / 2) * 0.5

    if (handleRef.current) {
      handleRef.current.style.left = mousePosition.x + delta + "px";
    }

    if(topRef.current){
      topRef.current.style.width = mousePosition.x + skew + delta + "px"
    }
  };

  
  const handleMouseLeave = (e) =>{
  
    if(handleRef.current) {
      handleRef.current.style.left = (window.innerWidth / 2) + "px";
    }

    if(topRef.current){
      topRef.current.style.width = (window.innerWidth / 2) + skew + "px"
    }
  }

  return <>
    <main>
      <MainNav/>
      {/* MOBIL */}
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
            <Image className="" src={imageFace} alt="photo portrait de Sarah Pardo" />
          </div>
        </div>
        <div className='handle'></div>
      </section>
      {/* LARGE */}
      <section ref={wraperRef} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} className='d-none d-lg-block split-screen-slider-wraper skewed p-0 m-0'>
      <Lottie 
          animationData={circuit} 
          style={{ 
            position: 'absolute', 
            bottom: '50%', 
            left: 0, 
            width: '50%', 
            height: '50%', 
            zIndex: 4, 
            opacity: 0.2, 
            preserveAspectRatio: 'none' 
          }} 
        />
        <Lottie 
          animationData={circuit} 
          style={{ 
            position: 'absolute', 
            top: '50%', 
            right: 0, 
            width: '50%', 
            height: '50%', 
            zIndex: 4, 
            opacity: 0.2, 
            preserveAspectRatio: 'none' 
          }}   
        />
        <div className='layer bottom '>
          <div className='content-wrap'>
            <div className='content-body'>
              <h1 className='deep'><a className="text-decoration-none text-reset" href="/about">algorithme créatif</a></h1>
              <h2 className='neutral'>{secondSubTitle}</h2> 
            </div>
            <Image className="" src={imageFaceNB} alt="photo en noir et blanc d'un portrait de Sarah Pardo" />
          </div>
        </div>
        <div ref={topRef}  className='layer top background-dark '>
          <div className='content-wrap'>
            <div className='content-body'>
              <h1><a className="deep text-decoration-none" href="/about">art du code</a></h1>
              <h2 className='neutral text-justify'>{firstSubTitle}</h2>
            </div>
            <Image className="" src={imageFace} alt="photo portrait de Sarah Pardo" />
          </div>
        </div>
        <div  ref={handleRef}  className='handle'></div>
      </section>
      <PresentationProjects/>
    </main>
  </>
}