import React, { useState, useRef} from 'react';
import MainNav from '../components/MainNav';
import CallToActionButton from '../components/CallToActionButton';

export function Home(){
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
          <div className='split-screen-layer one absolute top-0 pt-[25px]'>
            <div className='text px-[25px]'>
                <h1 className='text-light-dark'>{subTitleFront}</h1>
                <h2 className='text-darker pb-[20px]'>{titleFront}</h2>
                <p className='text-darker'>{textFrontMobile}</p>
              </div>
              <div className='img justify-between'>
                <div className="flex space-x-4">
                  <div><p>text</p></div>
                  <div><p>text2</p></div> 
                </div>
                <div className='flex'>
                  <div className='split-screen-button'>
                    <CallToActionButton link="about" text="à propos"/>
                  </div>
                </div>
              </div>
          </div>  
          <div className='split-screen-layer two absolute top-0 pt-[25px]'>
            <div className='text px-[25px]'>
                <h1 className='text-dark-light'>{subTitleBack}</h1>
                <h2 className='text-lighter pb-[20px]'>{titleBack}</h2>
                <p className='text-lighter'>{textBackMobile}</p>
              </div>
              <div className='img'>
              </div>
          </div> 
          
        </div>
      </section>
      <MainNav/>
    </main>
  </>
}