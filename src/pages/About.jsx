import React, {useState, useEffect, useRef} from 'react';
import MainNav from '../components/MainNav';
import AboutToolsSectionMobile from '../components/AboutToolsSectionMobile';
import AboutToolsSection from '../components/AboutToolsSection';
import AboutXPSectionMobile from '../components/AboutXPSectionMobile';
import AboutXPSection from '../components/AboutXPSection';
import Mosaic from '../components/Mosaic';
import AboutSplitLayer from '../components/AboutSplitLayer';
export function About() {
  const [isMainNavVisible, setIsMainNavVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
  const [mosaicSize, setMosaicSize] = useState(6);
  // Text content for front-end and back-end sections
  const titleFront = "Calcul créatif";
  const subTitleFront = "Développeuse Front-end";
  const textFront = "Le dessin, le design graphique et l'UI/UX font désormais partie intégrante de ma démarche de développeuse, me permettant de livrer des interfaces aussi ergonomiques qu'attrayantes.";
  const textFrontMobile = "Passionées de design et UI/UX"
  //const textFront = "Le design et l’UX guident ma démarche pour des interfaces ergonomiques et attractives.";
  
  const titleBack = "Art du code";
  const subTitleBack = "Développeuse Back-end";
  const textBack = "Depuis 2008, je crée des applications ergonomiques en transformant des problèmes complexes en solutions simples avec un code propre et performant.";
  const textBackMobile = "Développeuse d'applications ergonomiques et efficaces";
  //const textBack = "Depuis 2008, je crée des applications intuitives avec un code efficace.";
  
  const phpTools = ["PHP 7/8", "POO", "API REST", "JSON/XML", "Sessions", "Sécurité", "Postman"];
  const pythonTools = ["API REST", "Flask", "Django", "Pandas", "NumPy", "JWT"];
  const bashTools= ["Scripting", "Automatisation", "Permissions", "Cron"];
  const bddTools = ["NoSQL", "MySQL", "MongoDB", "Firebase", "Optimisation"];
  const htmlCss = ["HTML5","CSS3","Grid","Flexbox","Responsive Design","SASS","Bootstrap","Tailwind"];
  const javascript = ["ES6+","TypeScript","React","ExtJS"];
  const uiUx = ["Figma","Adobe XD","UI/UX Design","Material Design"];


  // BB 
  const bbStartTitle = "Projets clés";
  const bbStart = "Stage de 3 mois durant lequel j'ai collaboré en équipe pour moderniser le site web de l'entreprise. J'ai intégré un design moderne et interactif, en implémentant des animations fluides pour améliorer l'expérience utilisateur. "
  const bbList = [
    "Développement de thèmes WordPress sur mesure, adaptés aux maquettes fournies,",
    "Intégration front-end avec HTML, CSS, Sass, JavaScript et Tailwind, optimisée pour le SEO,",
    "Gestion du code avec GitHub et collaboration inter-équipes via Slack,",
    "Rédaction de documentation utilisateur et support technique,",
    "Autonomie, organisation et gestion efficace des priorités,",
    "Veille technologique et application des meilleures pratiques du développement web."
  ];
  const bbListSort = [
    "Développement de thèmes WordPress sur mesure,",
    "Intégration front-end (HTML, CSS, Sass, JS, Tailwind),",
    "Optimisation SEO et performances,",
    "Gestion de code avec GitHub et collaboration via Slack,",
    "Rédaction de documentation et support technique,",
    "Autonomie et gestion des priorités,",
    "Veille technologique et bonnes pratiques web."
  ];
  const bbSkills = ["js", "wordpress", "seo", "tailwind"];
  const bbCompanySize = "PME";
  const bbCompanyType = "Développement Web & Digital";
  const bbTeamSize = "4 personnes";
  const bbTeamType = "Technocréatifs";

  // TOPNET 
  const topnetStartTitle = "Expériences marquantes";
  const topnetStart = "Création d'une application de matching pour l’optimisation de l’affectation des employés aux chantiers, en prenant en compte compétences, disponibilités, documents, planning, temps de trajet et respect de la CCT, avec gestion des bases de données et collaboration inter-équipes."
  const topnetList = [
    "Développement et maintenance d'applications métiers,",
    "Gestion et optimisation des bases de données, intégration d'API REST,",
    "Modélisation UML et analyse des flux de travail,",
    "Collaboration inter-équipes et rédaction de documentation technique détaillée,",
    "Diagnostic et correction des bugs critiques, assistance aux utilisateurs,",
    "Gestion des versions avec Git pour assurer la continuité et la stabilité des projets,",
    "Estimation et planification des projets dans le respect des délais et des objectifs,"
  ];
  const topnetListSort = [
      "Développement d'applications métiers,",
      "Gestion et optimisation de bases de données,",
      "Intégration d'API REST,",
      "Modélisation UML et analyse des flux,",
      "Collaboration inter-équipes et documentation technique,",
      "Diagnostic et correction de bugs critiques,",
      "Gestion des versions avec Git,",
      "Estimation et planification de projets,"
  ];
  const topnetSkills = ["extjs", "php", "sql", "bash"];
  const topnetCompanySize = "PME";
  const topnetCompanyType = "Services de nettoyage";
  const topnetTeamSize = "3 à 6 personnes";
  const topnetTeamType = "Pluridisciplinaire";

  // HYL 
  const hylStartTitle = "Expériences marquantes";
  const hylStart = "Création d'une application de matching pour l’optimisation de l’affectation des employés aux chantiers, en prenant en compte compétences, disponibilités, documents, planning, temps de trajet et respect de la CCT, avec gestion des bases de données et collaboration inter-équipes."
  const hylList = [
    "Développement de sites web dynamiques (HTML5, CSS3, PHP, SQL)",
    "Gestion de bases de données, sauvegardes et restaurations",
   " Support technique et assistance à la clientèle",
    "Installation et configuration de matériel informatique",
    "Rédaction de documentation technique",
  ];

  const hylSkills = ["html5", "css3", "php", "sql"];
  const hylCompanySize = "PME";
  const hylCompanyType = "Services informatique";
  const hylTeamSize = "3 personnes";
  const hylTeamType = "Développeur";


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayFullLists = windowWidth > 1280;

  return (
    <main>
      <MainNav isVisible={isMainNavVisible}/>
      <div className='lg:hidden pt-[80px]'></div>
      <section id="about-hero-banner-mobile" className="lg:hidden bg-red-300 overflow-hidden">
        <div className="split-screen-wraper relative">
          <div className="layer one h-[100vw] w-full">
            <div className='mosaic-wraper h-[100vw] w-[100vw] overflow-hidden absolute top-0 left-0 z-[11] '>
              <Mosaic mosaicSize={mosaicSize} styleName="primary"/>
            </div>
          </div>
          <div className="layer two h-[100vw] w-full  absolute top-0 left-0 z-10">
            <div className='mosaic-wraper two h-[100vw] w-[100vw] overflow-hidden absolute top-0 left-0 z-[11] '>
              <Mosaic mosaicSize={mosaicSize} styleName="accent"/>
            </div>
          </div>
        </div>
        <div className="text-wraper">
          <div className='px-[25px]'>
              <h1 className="pt-[40px]  subtitle pale">{subTitleBack}</h1>
              <h2 className="title deep pb-[10px]">{titleBack}</h2>
              <p className='pb-[20px]'>{textBack}</p>
          </div>
          <div className='clip'></div>
          <div className="bg-accent px-[25px] color-text-light">
              <h1 className="subtitle pale">{subTitleFront}</h1>
              <h2 className="title deep pb-[10px]">{titleFront}</h2>
              <p className='pb-[40px]'>{textFront}</p>
          </div>
        </div>
      </section>
      <AboutXPSectionMobile 
        odd="odd"
        date="2024-2025" 
        companyName="BB Switzerland" 
        npa="Genève" title="Développeuse Fullstack" 
        list={displayFullLists ? bbList : bbListSort}
        skills={bbSkills} 
        companySize={bbCompanySize} 
        companyType={bbCompanyType} 
        teamSize={bbTeamSize} 
        teamType={bbTeamType}
      />
      <AboutXPSectionMobile
        date="2016-2022" 
        companyName="Topnet SA" 
        npa="Genève" 
        title="Développeuse front-end" 
        list={displayFullLists ? topnetList : topnetListSort}
        skills={topnetSkills} 
        companySize={topnetCompanySize} 
        companyType={topnetCompanyType} 
        teamSize={topnetTeamSize} 
        teamType={topnetTeamType}
      />
      <AboutXPSectionMobile
        odd="odd"
        date="2008-2013" 
        companyName="Hyl-Informatique" 
        npa="Genève" 
        title="Apprentie informaticienne" 
        list={hylList} 
        skills={hylSkills} 
        companySize={hylCompanySize} 
        companyType={hylCompanyType} 
        teamSize={hylTeamSize} 
        teamType={hylTeamType}
      />
      <AboutToolsSectionMobile  phpTools={phpTools} pythonTools={pythonTools} bashTools={bashTools} bddTools={bddTools} htmlCss={htmlCss} javascript={javascript} uiUx={uiUx}/>
      <div className='hidden lg:block scroll-snap-container'>
        <div className='snap'>
          <section id="about-hero-banner" className="hidden lg:block">
            <div className="split-screen-wraper">
              <AboutSplitLayer subTitleFront={subTitleFront} titleFront={titleFront} textFront={textFront} subTitle={subTitleBack} title={titleBack} text={textBack} layerPosition="one" color="color-text-dark" isButtonVisible="hidden"/>
              <AboutSplitLayer subTitleFront={subTitleFront} titleFront={titleFront} textFront={textFront} subTitle={subTitleBack} title={titleBack} text={textBack} layerPosition="two" color="color-text-light" isButtonVisible="hidden"/>
            </div>
          </section>
        </div>
        <div className='snap'>
          <AboutXPSection 
            date="2024-2025" 
            companyName="BB Switzerland" 
            npa="Genève" title="Développeuse Fullstack" 
            list={displayFullLists ? bbList : bbListSort}
            skills={bbSkills} 
            companySize={bbCompanySize} 
            companyType={bbCompanyType} 
            teamSize={bbTeamSize} 
            teamType={bbTeamType}/>
        </div>
        <div className='snap'>
          <AboutXPSection 
            odd="odd" 
            date="2016-2022" 
            companyName="Topnet SA" 
            npa="Genève" 
            title="Développeuse front-end" 
            list={displayFullLists ? topnetList : topnetListSort}
            skills={topnetSkills} 
            companySize={topnetCompanySize} 
            companyType={topnetCompanyType} 
            teamSize={topnetTeamSize} 
            teamType={topnetTeamType}/>
        </div>
        <div className='snap'>
          <AboutXPSection 
            date="2008-2013" 
            companyName="Hyl-Informatique" 
            npa="Genève" 
            title="Apprentie informaticienne" 
            list={hylList} 
            skills={hylSkills} 
            companySize={hylCompanySize} 
            companyType={hylCompanyType} 
            teamSize={hylTeamSize} 
            teamType={hylTeamType}
          />
        </div>
        <div className='snap'>
          <AboutToolsSection phpTools={phpTools} pythonTools={pythonTools} bashTools={bashTools} bddTools={bddTools} htmlCss={htmlCss} javascript={javascript} uiUx={uiUx} />
      </div>
      </div>
    </main>
  );
}
