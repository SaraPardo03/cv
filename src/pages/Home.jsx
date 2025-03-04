import React, { useState, useRef} from 'react';
import MainNav from '../components/MainNav';

export function Home(){
  const titleFront = "Algorithme créatif"
  const subTitleFront = "Front-end"
  const textFront = "Le dessin, le design graphique et l'UI/UX font désormais partie intégrante de ma démarche de développeuse, me permettant de livrer des interfaces aussi ergonomiques qu'attrayantes."
  
  const titleBack = "Art du code"
  const subTitleBack = "Back-end"
  const textBack = "Depuis 2008, je crée des applications ergonomiques en transformant des problèmes complexes en solutions simples avec un code propre et performant."

  return <>
    <main>
      <section className='lg:hidden bg-red-50'>
      
      </section>
      <MainNav/>
    </main>
  </>
}