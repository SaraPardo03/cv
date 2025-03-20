  import React, { useEffect, useRef, useState} from 'react';
  import { Helmet } from "react-helmet";
  import MainNav from '../components/MainNav';
  import HomeWhoSectionMobile from '../components/HomeWhoSectionMobile';
  import HomeWhoSection from '../components/HomeWhoSection';
  import SectionCurrentProjects from '../components/SectionCurrentProjects';

  export function Home() {
    // Text content for front-end and back-end sections
    const titleFront = "Calcul créatif";
    const subTitleFront = "Développeuse Front-end";
    //const textFront = "Le dessin, le design graphique et l'UI/UX font désormais partie intégrante de ma démarche de développeuse, me permettant de livrer des interfaces aussi ergonomiques qu'attrayantes.";
    const textFrontMobile = "Passionées de design et UI/UX"
    const textFront = "Le design et l’UX guident ma démarche pour des interfaces ergonomiques et attractives.";
    
    const titleBack = "Art du code";
    const subTitleBack = "Développeuse Back-end";
    //const textBack = "Depuis 2008, je crée des applications ergonomiques en transformant des problèmes complexes en solutions simples avec un code propre et performant.";
    const textBackMobile = "Développeuse d'applications ergonomiques et efficaces";
    const textBack = "Depuis 2008, je crée des applications intuitives avec un code efficace.";
    return (
      <>
        <Helmet>
          <title>Pardo Sarah - Développeuse front-end et back-end</title>
          <meta name="description" content="Développeuse front-end et back-end, passionnée par la création d'expériences utilisateur à la fois esthétiques et fonctionnelles." />
          <meta name="robots" content="index, follow"/>
          <meta name="keywords" content="développeuse web, front-end, back-end, UX/UI, React, JavaScript"/>
          <meta name="language" content="fr"/>
          <meta name="publisher" content="Sarah Pardo"/>
          <link rel="canonical" href="http://192.168.1.109:5173/" />
        </Helmet>
        <main>
          <MainNav/>
          <HomeWhoSection subTitleFront={subTitleFront} titleFront={titleFront} textFront={textFront} subTitle={subTitleBack} title={titleBack} text={textBack}/>
          <HomeWhoSectionMobile subTitleFront={subTitleFront} titleFront={titleFront} textFront={textFrontMobile} subTitle={subTitleBack} title={titleBack} text={textBackMobile}/>
          <SectionCurrentProjects/>
        </main>
      </>
    );
  }
