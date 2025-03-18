  import React, { useEffect, useRef, useState} from 'react';
  import MainNav from '../components/MainNav';
  import SplitLayerMobile from '../components/SplitLayerMobile';
  import HomeWhoSection from '../components/HomeWhoSection';
  import SectionCurrentProjects from '../components/SectionCurrentProjects';

  export function Home() {
    const [mainNavVisible, setMainNavVisible] = useState(false);
    const [isAtTop, setIsAtTop] = useState(false);
    const [scrollAllowed, setScrollAllowed] = useState(false); 
    const [touches, setTouches] = useState(0);
    const layerOne = useRef(null);
    const layerTwo = useRef(null);
    const [diagonalPoints, setDiagonalPoints] = useState([
      { value: 86, min: 0, max: 116 },
      { value: 70, min: -16, max: 100 },
      
    ]);

    // Function to update diagonal (split screen) points values while ensuring it stays within its range
    const updateDiagonalPoints = (index, newValue) => {
      setDiagonalPoints((prev) =>
        prev.map((item, i) => {
          if (i === index) {
            return { ...item, value: Math.min(Math.max(newValue, item.min), item.max) };
          } else {
            return item;
          }
        })
      );
    };
        
    // Text content for front-end and back-end sections
    const titleFront = "Calcul créatif";
    const subTitleFront = "Front-end";
    const textFront = "Le dessin, le design graphique et l'UI/UX font désormais partie intégrante de ma démarche de développeuse, me permettant de livrer des interfaces aussi ergonomiques qu'attrayantes.";
    const textFrontMobile = "Le design et l’UX guident ma démarche pour des interfaces ergonomiques et attractives.";

    const titleBack = "Art du code";
    const subTitleBack = "Back-end";
    const textBack = "Depuis 2008, je crée des applications ergonomiques en transformant des problèmes complexes en solutions simples avec un code propre et performant.";
    const textBackMobile = "Depuis 2008, je crée des applications intuitives avec un code efficace.";

    
/*
    useEffect(() => {      
      //Clip for the split screen
      if (layerTwo.current) {
        layerTwo.current.style.clipPath = `polygon(0 ${diagonalPoints[0].value}%, 100% ${diagonalPoints[1].value}%, 100% 100%, 0% 100%)`;
      }

      const handleScroll = (e) => {
        //Show main nav when the projects section is on top of the screen 
        if(window.scrollY > 30){
          setMainNavVisible(true);
        }else{
          setMainNavVisible(false);
        }

        // Determine the scroll/touches force
        let scrollYForce = e.deltaY;
        let toucheForce = null;
        if (e.touches) {
          if (e.touches[0]) {
            toucheForce = touches - e.touches[0].screenY;
            setTouches(e.touches[0].screenY);
          }
        }

        // Determine the scroll/touches direction
        let scrollDirection = null;
        if(scrollYForce < 0 || toucheForce < 0){
          scrollDirection = "down";

        }

        if(scrollYForce > 0 || toucheForce > 0){
          scrollDirection = "up";
        }

        if(scrollDirection === "down"){
          scrollYForce = -20;
          if(toucheForce != null){
            toucheForce = -4;
          }
        }else{
          scrollYForce = 20;
          if(toucheForce != null){
            toucheForce = 4;
          }
        }

        //If we are in the top of the page
        if(window.scrollY === 0){
          setIsAtTop(true);
        }else{
          setIsAtTop(false);
        }


        if(diagonalPoints[1].value === diagonalPoints[1].min){
          setScrollAllowed(true);
        }
        
        if(isAtTop && scrollDirection === "down" && diagonalPoints[1].value === diagonalPoints[1].min){
          setScrollAllowed(false);
        }        

        //setScrollAllowed(true);
        if(!scrollAllowed){
          // Disable body scroll behavior to enhance custom scrolling
          e.preventDefault();

          // Handling wheel scroll events  to calculate scrolling force
          if (scrollYForce) {
            if (layerTwo.current) { 
              updateDiagonalPoints(0, diagonalPoints[0].value - scrollYForce);
              updateDiagonalPoints(1, diagonalPoints[1].value - scrollYForce);
              //console.log("scrollYForce mobile", scrollYForce);
              layerTwo.current.style.clipPath = `polygon(0 ${diagonalPoints[0].value}%, 100% ${diagonalPoints[1].value}%, 100% 100%, 0% 100%)`;
            }
          }
          // Handling touch events to calculate scrolling force
            if(toucheForce != null){
              if (layerTwo.current) { 
                updateDiagonalPoints(0, diagonalPoints[0].value - toucheForce);
                updateDiagonalPoints(1, diagonalPoints[1].value - toucheForce);
                //console.log("toucheForce mobile", toucheForce);
                layerTwo.current.style.clipPath = `polygon(0 ${diagonalPoints[0].value}%, 100% ${diagonalPoints[1].value}%, 100% 100%, 0% 100%)`;                
              }
              setTouches(e.touches[0].screenY);
            }
        }
      };
      
      // Add event listeners for wheel and touchmove events
      window.addEventListener("wheel", handleScroll, { passive: false });
      window.addEventListener("touchmove", handleScroll, { passive: false });

      // Cleanup the event listeners when the component is unmounted
      return () => {
        window.removeEventListener("wheel", handleScroll);
        window.removeEventListener("touchmove", handleScroll);
      };
    }, [diagonalPoints, touches, scrollAllowed, isAtTop, mainNavVisible]);
    */
    return (
      <main>
        <MainNav isVisible={mainNavVisible}/>
        <HomeWhoSection subTitleFront={subTitleFront} titleFront={titleFront} textFront={textFront} subTitle={subTitleBack} title={titleBack} text={textBack}/>
        {/*<section id="home-who-section" className="hidden lg:block">
          <div className="split-screen-wraper">
            <SplitLayer  subTitleFront={subTitleFront} titleFront={titleFront} textFront={textFront} subTitle={subTitleBack} title={titleBack} text={textBack} layerPosition="one" color="color-text-dark"/>
            <SplitLayer subTitleFront={subTitleFront} titleFront={titleFront} textFront={textFront} subTitle={subTitleBack} title={titleBack} text={textBack} layerPosition="two" color="color-text-light"/>
          </div>
        </section>*/}
        <section id="home-who-section-mobile" className="lg:hidden">
          <div className="split-screen-wraper">
            <SplitLayerMobile ref={layerOne} subTitle={subTitleBack} title={titleBack} text={textBackMobile} layerPosition="one" color="color-text-dark"/>
            <SplitLayerMobile ref={layerTwo} subTitle={subTitleFront} title={titleFront} text={textFrontMobile} layerPosition="two" color="color-text-light"/>
          </div>
        </section>
        <SectionCurrentProjects/>
      </main>
    );
  }
