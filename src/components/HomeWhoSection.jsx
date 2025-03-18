import React, { useEffect, useRef, useState} from 'react';
import SplitLayer from "./SplitLayer";
import { Touchpad } from 'lucide-react';

function HomeWhoSection({subTitleFront, titleFront, textFront, subTitle, title, text}){
  const whoSectionLayerOne = useRef(null);
  const whoSectionLayerTwo= useRef(null);
  const [scrollAllowed, setScrollAllowed] = useState(false); 
  const [isTouchpad, setIsTouchpad] = useState(false); // Détection du touchpad
  const [previousTouche, setPreviousTouche] = useState(0);
  const [diagonalPoints, setDiagonalPoints] = useState([
    { value: 10, min: 0, max: 110 },
    { value: 0, min: -10, max: 100 },
    
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
  useEffect(() => {   
    //Clip for the split screen
    if (whoSectionLayerTwo.current) {
      whoSectionLayerTwo.current.style.clipPath = `polygon(0 0, ${diagonalPoints[0].value}% 0%, ${diagonalPoints[1].value}% 100%, 0 100%)`;
    }

    const handleScroll = (e) => {
      // Determine the scroll/touches force
      let scrollYForce = e.deltaY;
      let toucheForce = null;
      let scrollTouchForce = null
      
      if (scrollYForce !== 0) {
        if (Math.abs(scrollYForce) < 50) {
          setIsTouchpad(true); // Petit mouvement → touchpad
        } else {
          setIsTouchpad(false); // Grand mouvement → molette
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
        scrollTouchForce = 4;
        if(!isTouchpad && !toucheForce){
          scrollTouchForce = 20;
        }
        
      }

      if(scrollYForce > 0 || toucheForce > 0){
        scrollDirection = "up";
        scrollTouchForce = -4;
        if(!isTouchpad && !toucheForce){
          scrollTouchForce = -20;
        }
      }

      if(diagonalPoints[1].value === diagonalPoints[1].max){
        setScrollAllowed(true);
      }

      if(window.scrollY === 0 && scrollDirection === "down"){
        setScrollAllowed(false);
      }

      if(!scrollAllowed){
        e.preventDefault();
        if(whoSectionLayerTwo && scrollTouchForce){
          updateDiagonalPoints(0, diagonalPoints[0].value - scrollTouchForce);
          updateDiagonalPoints(1, diagonalPoints[1].value - scrollTouchForce);
          whoSectionLayerTwo.current.style.clipPath = `polygon(0, 0,  ${diagonalPoints[0].value}%, 0, ${diagonalPoints[1].value}%, 100% , 0% 100%)`;
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
  }, [scrollAllowed, diagonalPoints, previousTouche, isTouchpad]);
  return <>
    <section id="home-who-section" className="hidden lg:block">
      <div className="split-screen-wraper">
        <SplitLayer ref={whoSectionLayerOne} subTitleFront={subTitleFront} titleFront={titleFront} textFront={textFront} subTitle={subTitle} title={title} text={text} layerPosition="one" color="color-text-dark"/>
        <SplitLayer ref={whoSectionLayerTwo}  subTitleFront={subTitleFront} titleFront={titleFront} textFront={textFront} subTitle={subTitle} title={title} text={text} layerPosition="two" color="color-text-light"/>
      </div>
    </section>
  </>
}

export default HomeWhoSection