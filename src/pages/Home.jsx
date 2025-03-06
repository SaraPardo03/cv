import React, {useEffect, useRef} from 'react';
import MainNav from '../components/MainNav';
import CallToActionButton from '../components/CallToActionButton';

export function Home(){
  const layerTwo = useRef(null);
  const titleFront = "Calcul créatif"
  const subTitleFront = "Front-end"
  const textFront = "Le dessin, le design graphique et l'UI/UX font désormais partie intégrante de ma démarche de développeuse, me permettant de livrer des interfaces aussi ergonomiques qu'attrayantes."
  const textFrontMobile = "Le design et l’UX guident ma démarche pour des interfaces ergonomiques et attractives."
  
  const titleBack = "Art du code"
  const subTitleBack = "Back-end"
  const textBack = "Depuis 2008, je crée des applications ergonomiques en transformant des problèmes complexes en solutions simples avec un code propre et performant."
  const textBackMobile = "Depuis 2008, je crée des applications intuitives avec un code efficace."

  const handleClickGoToAbout = e => {
		navigate(`/about`);
	}

  useEffect(() => {
    let percent = 100;
    const interval = setInterval(() => {
      if(layerTwo.current) {
        if(percent > 0 ){
          percent = percent - 1; 
          layerTwo.current.style.clipPath = `polygon(0 ${percent}%, 100% ${percent}%, 100% 100%, 0% 100%)`;
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);


  return <>
    <main>
      <section id="home-who-section" className='lg:flex hidden '>
        <div className='split-screen-wraper px-[80px] pt-[80px]'>
          <h1 className='text-light-dark'>{subTitleFront}</h1>
          <h2 className='text-darker pb-[40px]'>{titleFront}</h2>
          <p className='text-darker'>{textFront}</p>
        </div>

      </section>
      <section id="home-who-section-mobile" className='lg:hidden'>
        <div className='split-screen-wraper-mobile'>
          <div className='split-screen-layer one absolute top-0'>
            <div className='layer-wraper'>
              <div className='text px-[25px]'>
                <h1 className='text-light-dark'>{subTitleFront}</h1>
                <h2 className='text-darker pb-[20px]'>{titleFront}</h2>
                <p className='text-darker'>{textFrontMobile}</p>
              </div>
              <div className='img'>
              </div>
            </div>  
          </div>  
          <div ref={layerTwo} className='split-screen-layer two absolute top-0'>
            <div className='layer-wraper'>
              <div className='text px-[25px]'>
                <h1 className='text-dark-light'>{subTitleBack}</h1>
                <h2 className='text-lighter pb-[20px]'>{titleBack}</h2>
                <p className='text-lighter'>{textBackMobile}</p>
              </div>
              <div className='img'>
              </div>
            </div>
          </div> 
        </div>
      </section>
      <section>
        <MainNav/>
      </section>
      
    </main>
  </>
}