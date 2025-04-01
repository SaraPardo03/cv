  import React, { useEffect, useRef, useState} from 'react';
  import { Helmet } from "react-helmet";
  import MainNav from '../components/MainNav';
  import ArianeHeroBannerMobile from '../components/ArianeHeroBannerMobile';
  import ArianeHeroBanner from '../components/ArianeHeroBanner';
  import ArianeDescriptionMobile from '../components/ArianeDescriptionMobile';
  import ArianeDescription from '../components/ArianeDescription';
  import mapImg from "../assets/img/edit_22.png";
  import pdfImg from "../assets/img/edit_without_map.png"
  import saveImg from "../assets/img/list.jpg"
  import ArianeContribution from '../components/ArianeContribution';
  import ArianeContributionMobile from '../components/ArianeContributionMobile';

  export function Ariane() {
    const [isMainNavVisible, setIsMainNavVisible] = useState(true);
    const title = "Ariane";
    const subTitle = "Projet en cours "
    const subtileSpan = " - Rejoignez l’aventure !"
    const description = "Outil web pour auteurs et créateurs de jeux narratifs, combinant cartographie visuelle des choix et gestion avancée des branches narratives. Une solution tout-en-un pour transformer des idées complexes en histoires interactives fluides.";
    
    const mapTitle = "Carte interactive du récit" 
    const mapSubtitle = "La boussole des auteurs d'histoires interactives";
    const mapDescription = "Visualisez toute votre histoire d'un coup d'œil";
    const mapList = [
      "Glissez-déposez les scènes comme des post-it virtuels", 
      "Zoomez sur les chapitres clés ou voyez l'ensemble",
      "Trouvez instantanément les incohérences (choix sans issue)"
    ]

    /*
    const testTitle = "Testez en Direct";
    const testSubtitle = "Votre lecteur beta-testeur intégré";
    const testDescription = "Jouez à votre histoire pendant que vous l'écrivez";
    const testList = [
      "Cliquez sur les choix pour voir où ils mènent", 
      "Surlignage des erreurs de logique narrative",
      "Comparez les différentes fins possibles"
    ]
    */

    const pdfSubtitle = "Un clic pour obtenir un manuscrit prêt à partager";
    const pdfTitle = "Export propre vers un PDF"
    const pdfDescription = "Transformez votre digital en livre imprimable"
    const pdfList = [
      "Mise en page automatique (chapitres, sauts de page)", 
      "Sommaire et choix interactif avec liens cliquables",
      "Tags convertis en annotations"
    ]

    const saveSubtitle = "Votre brouillon est toujours sécurisé";
    const saveTitle = "Sauvegarde et partage"
    const saveDescription = "Reprenez où vous vous étiez arrêté·e"
    const saveList = [
      "Stockage local ou cloud de vos versions", 
      "Envoyez une copie à un co-auteur",
      "Travaillez hors connexion"
    ] 

    /*
    const TagTitle = "Tags Malins" 
    const TagSubtitle = "Un pense-bête intelligent pour auteurs";
    const TagDescription = " Organisez votre univers narratif";
    const TagList = [
      "Étiquetez personnages, objets, lieux", 
      `Filtrez pour voir toutes les scènes avec "le méchant"`,
      "Suivez les indices cachés dans l'histoire"
    ]
    */
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
          <MainNav isVisible={isMainNavVisible}/>
          <ArianeHeroBannerMobile title={title} subTitle={subTitle} subtileSpan={subtileSpan} description={description}/>
          <div className='hidden lg:block scroll-snap-container'>
            <div className='snap'>
              <ArianeHeroBanner title={title} subTitle={subTitle} subtileSpan={subtileSpan} description={description}/>
            </div>
            <div className='snap'>
              <ArianeDescription odd="odd" color="primary" img={mapImg} title={mapTitle} subTitle={mapSubtitle} description={mapDescription} list={mapList}/>
            </div>
            <div className='snap'>
              <ArianeDescription color="secondary" img={pdfImg} title={pdfTitle} subTitle={pdfSubtitle} description={pdfDescription} list={pdfList}/>
            </div>
            <div className='snap'>
              <ArianeDescription odd="odd" color="accent" img={saveImg} title={saveTitle} subTitle={saveSubtitle} description={saveDescription} list={saveList}/>
            </div>
            <div className='snap'>
              <ArianeContribution/>     
            </div>
          </div>
          <ArianeDescriptionMobile color="primary" img={mapImg} title={mapTitle} subTitle={mapSubtitle} description={mapDescription} list={mapList}/>
          <ArianeDescriptionMobile color="accent" img={pdfImg} title={pdfTitle} subTitle={pdfSubtitle} description={pdfDescription} list={pdfList}/>
          <ArianeDescriptionMobile color="secondary" img={saveImg} title={saveTitle} subTitle={saveSubtitle} description={saveDescription} list={saveList}/>
          <ArianeContributionMobile/>     
        </main>
      </>
    );
  }
