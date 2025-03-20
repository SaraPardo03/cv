import React, { useEffect, useRef, useState} from 'react';
import SplitLayerMobile from './SplitLayerMobile';

function HomeWhoSectionMobile({subTitleFront, titleFront, textFront, subTitle, title, text}){
  const whoSectionLayerOne = useRef(null);
  const whoSectionLayerTwo= useRef(null);
  const [scrollAllowed, setScrollAllowed] = useState(false); 
  const [whoSplitScreenDone, setWhoSplitScreenDone] = useState(false);
  const [isTouchpad, setIsTouchpad] = useState(false);
  const [previousTouche, setPreviousTouche] = useState(0);
  const [diagonalPoints, setDiagonalPoints] = useState([
    { value: 100, min: 0, max: 110 },
    { value:90, min: -10, max: 100 },
    
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
  const moveDiagonalMidle = () =>{
    if(whoSplitScreenDone){
      updateDiagonalPoints(0, diagonalPoints[0].value + 60);
      updateDiagonalPoints(1, diagonalPoints[1].value + 60);
      whoSectionLayerTwo.current.style.transition = `clip-path 2s ease-in-out`;
      whoSectionLayerTwo.current.style.clipPath = `polygon(0, 0,  ${diagonalPoints[0].value}%, 0, ${diagonalPoints[1].value}%, 100% , 0% 100%)`;
      whoSectionLayerTwo.current.style.transition = `clip-path 0.5s ease-in-out`;
      if(diagonalPoints[0].value >= 55){
        setWhoSplitScreenDone(false);
      }
    }
  }

  useEffect(() => {   
    //Clip for the split screen
    if (whoSectionLayerTwo.current) {
      whoSectionLayerTwo.current.style.clipPath = `polygon(0 ${diagonalPoints[0].value}%, 100% ${diagonalPoints[1].value}%, 100% 100%, 0% 100%)`;
    }

    const handleScroll = (e) => {

      // Determine the scroll/touches force
      let scrollYForce = e.deltaY;
      let toucheForce = null;
      let scrollTouchForce = null
      
      if (scrollYForce !== 0) {
        if (Math.abs(scrollYForce) < 50) {
          setIsTouchpad(true); // smal mouvement → touchpad
        } else {
          setIsTouchpad(false); // Big mouvement → molette
        }
      }
      if (e.touches) {
        if (e.touches[0]) {
          toucheForce = previousTouche - e.touches[0].screenY;
          setPreviousTouche(e.touches[0].screenY);
        }
      }

      // Determine the scroll/touches direction
      let scrollDirection = null;
      if(scrollYForce < 0 || toucheForce < 0){
        scrollDirection = "down";
        scrollTouchForce = -4;
        if(!isTouchpad && !toucheForce){
          scrollTouchForce = -20;
        }
        
      }

      if(scrollYForce > 0 || toucheForce > 0){
        scrollDirection = "up";
        scrollTouchForce = 4;
        if(!isTouchpad && !toucheForce){
          scrollTouchForce = 20;
        }
      }
      if(diagonalPoints[1].value === diagonalPoints[1].min){
        //setWhoSplitScreenDone(true);
        //moveDiagonalMidle();
        setScrollAllowed(true);
      }

      if(window.scrollY === 0  && scrollDirection === "down" && diagonalPoints[1].value === diagonalPoints[1].min){
        setScrollAllowed(false);
      }   

      if(!scrollAllowed){
        e.preventDefault();
        if(whoSectionLayerTwo && scrollTouchForce){
          updateDiagonalPoints(0, diagonalPoints[0].value - scrollTouchForce);
          updateDiagonalPoints(1, diagonalPoints[1].value - scrollTouchForce);
          whoSectionLayerTwo.current.style.clipPath = `polygon(0 ${diagonalPoints[0].value}%, 100% ${diagonalPoints[1].value}%, 100% 100%, 0% 100%)`;
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
  }, [scrollAllowed, diagonalPoints, previousTouche, isTouchpad, whoSplitScreenDone]);
  return <>
    <section id="home-who-section-mobile" className="lg:hidden">
      <div className="split-screen-wraper">
        <SplitLayerMobile ref={whoSectionLayerOne} subTitle={subTitle} title={title} text={text} layerPosition="one" color="color-text-light"/>
        <SplitLayerMobile ref={whoSectionLayerTwo} subTitle={subTitleFront} title={titleFront} text={textFront} layerPosition="two" color="color-text-dark"/>
      </div>
    </section>
  </>
}

export default HomeWhoSectionMobile