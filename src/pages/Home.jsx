  import React, { useEffect, useRef, useState} from 'react';
  import SplitLayerMobile from '../components/SplitLayerMobile';
  import MainNav from '../components/MainNav';

  export function Home() {
    const [isAtTop, setIsAtTop] = useState(false);
    const [scrollAllowed, setScrollAllowed] = useState(false); 
    const [touches, setTouches] = useState(0);
    const layerOne = useRef(null);
    const layerTwo = useRef(null);
    const [diagonalPoints, setDiagonalPoints] = useState([
      { value: 86, min: 0, max: 116 },
      { value: 70, min: -16, max: 100 },
      
    ]);

      // Function to update diagonal points values  while ensuring it stays within its range
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



    // Navigate to About page on button click
    const handleClickGoToAbout = e => {
      navigate(`/about`);
    };

    useEffect(() => {
      // Disable body scroll behavior to enhance custom scrolling
      if (!scrollAllowed) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      
      if (layerTwo.current) {
        layerTwo.current.style.clipPath = `polygon(0 ${diagonalPoints[0].value}%, 100% ${diagonalPoints[1].value}%, 100% 100%, 0% 100%)`;
      }
      const handleScroll = (e) => {
        const scrollYForce = e.deltaY;
        let toucheForce = null;
        if (e.touches) {
          if (e.touches[0]) {
            toucheForce = touches - e.touches[0].screenY;
            setTouches(e.touches[0].screenY);
          }
        }
        if(window.scrollY === 0 && !isAtTop){
          setIsAtTop(true);
        }

        if(window.scrollY !== 0 && isAtTop){
          setIsAtTop(false);
        }

        if(isAtTop && diagonalPoints[0].value === diagonalPoints[0].min){
          setScrollAllowed(true);
        }

        if(isAtTop && diagonalPoints[0].value === diagonalPoints[0].min){
            if(scrollYForce < 0){
              setScrollAllowed(false);
            }

            if(toucheForce && toucheForce < 0){
              setScrollAllowed(false);
            }
        }

        if(!scrollAllowed){
          e.preventDefault();
          // Handling wheel scroll events  to calculate scrolling force
          if (scrollYForce) {
            if (layerTwo.current) { 
              updateDiagonalPoints(0, diagonalPoints[0].value - scrollYForce);
              updateDiagonalPoints(1, diagonalPoints[1].value - scrollYForce);
              layerTwo.current.style.clipPath = `polygon(0 ${diagonalPoints[0].value}%, 100% ${diagonalPoints[1].value}%, 100% 100%, 0% 100%)`;
            }
          }
          // Handling touch events to calculate scrolling force
            if(toucheForce != null){
              if (layerTwo.current) { 
                if(toucheForce < 50 && toucheForce > -50 ){
                  updateDiagonalPoints(0, diagonalPoints[0].value - toucheForce);
                  updateDiagonalPoints(1, diagonalPoints[1].value - toucheForce);
                  layerTwo.current.style.clipPath = `polygon(0 ${diagonalPoints[0].value}%, 100% ${diagonalPoints[1].value}%, 100% 100%, 0% 100%)`;
                }
                
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
    }, [diagonalPoints, touches, scrollAllowed, isAtTop]);

    return (
      <main>
        <MainNav isVisible={scrollAllowed}/>
        <section id="home-who-section" className="lg:flex hidden">
          <div className="split-screen-wraper px-[80px] pt-[80px]">
            <h1 className="text-light-dark">{subTitleFront}</h1>
            <h2 className="text-darker pb-[40px]">{titleFront}</h2>
            <p className="text-darker">{textFront}</p>
          </div>
        </section>
        <section id="home-who-section-mobile" className="lg:hidden">
          <div className="split-screen-wraper">
            <SplitLayerMobile ref={layerOne} subTitle={subTitleBack} title={titleBack} text={textBackMobile} layerPosition="one"/>
            <SplitLayerMobile ref={layerTwo} subTitle={subTitleFront} title={titleFront} text={textFrontMobile} layerPosition="two"/>
          </div>
        </section>
        <section className="h-[100vh] bg-blue-300"> toto</section>
        <section className="h-[100vh] bg-green-300"> green</section>
      </main>
    );
  }
