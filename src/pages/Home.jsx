import React, { useEffect, useRef, useState } from 'react';
import MainNav from '../components/MainNav';
import CallToActionButton from '../components/CallToActionButton';
import { use } from 'react';

export function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [touches, setTouches] = useState(0);
  const [percent, setPercent] = useState(0);
  const layerTwo = useRef(null);

  // Text content for front-end and back-end sections
  const titleFront = "Calcul créatif";
  const subTitleFront = "Front-end";
  const textFront = "Le dessin, le design graphique et l'UI/UX font désormais partie intégrante de ma démarche de développeuse, me permettant de livrer des interfaces aussi ergonomiques qu'attrayantes.";
  const textFrontMobile = "Le design et l’UX guident ma démarche pour des interfaces ergonomiques et attractives.";

  const titleBack = "Art du code";
  const subTitleBack = "Back-end";
  const textBack = "Depuis 2008, je crée des applications ergonomiques en transformant des problèmes complexes en solutions simples avec un code propre et performant.";
  const textBackMobile = "Depuis 2008, je crée des applications intuitives avec un code efficace.";

  // Disable body scroll behavior to enhance custom scrolling
  document.body.style.overflow = 'hidden';

  // Navigate to About page on button click
  const handleClickGoToAbout = e => {
    navigate(`/about`);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const delta = e.deltaY;

      // Handling touch events to calculate scrolling percentage
      if (e.touches) {
        if (e.touches[0]) {
          const force = touches - e.touches[0].screenY;

          // Adjust the scrolling percentage based on the touch force
          if (force > 0 && force < 100) {
            if (percent + force <= 100) {
              setPercent((prev) => prev + force);
            }
          }

          if (force < 0 && force > -100) {
            if (percent - force >= 0) {
              setPercent((prev) => prev - Math.abs(force));
            }
          }

          // Update clipPath style based on the scrolling percentage
          if (layerTwo.current) {
            layerTwo.current.style.clipPath = `polygon(0 ${100 - percent}%, 100% ${100 - percent}%, 100% 100%, 0% 100%)`;
          }

          setTouches(e.touches[0].screenY);
        }
      }

      // Handling wheel scroll events for adjusting scrollY percentage
      if (delta) {
        setScrollY((prev) => Math.min(Math.max(prev + delta * 0.1, 0), 100));
        if (layerTwo.current) {
          layerTwo.current.style.clipPath = `polygon(0 ${100 - scrollY}%, 100% ${100 - scrollY}%, 100% 100%, 0% 100%)`;
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
  }, [scrollY, touches, percent]); // Dependencies to track scrollY, touches, and percent changes

  return (
    <main>
      <section id="home-who-section" className="lg:flex hidden">
        <div className="split-screen-wraper px-[80px] pt-[80px]">
          <h1 className="text-light-dark">{subTitleFront}</h1>
          <h2 className="text-darker pb-[40px]">{titleFront}</h2>
          <p className="text-darker">{textFront}</p>
        </div>
      </section>

      <section id="home-who-section-mobile" className="lg:hidden">
        <div className="split-screen-wraper">
          <div className="split-screen-layer one">
            <div className="layer-wraper flex flex-col">
              <div className="text flex-none px-[10px]">
                <h1 className="text-light-dark pt-[20px]">{subTitleFront}</h1>
                <h2 className="text-darker pb-[20px]">{titleFront}</h2>
                <p className="text-darker">{textFrontMobile}</p>
              </div>
              <div className="img flex-1"></div>
            </div>
          </div>

          <div ref={layerTwo} className="split-screen-layer two absolute top-0">
            <div className="layer-wraper flex flex-col">
              <div className="text flex-none px-[10px]">
                <h1 className="text-dark-light pt-[20px]">{subTitleBack}</h1>
                <h2 className="text-lighter pb-[20px]">{titleBack}</h2>
                <p className="text-lighter">{textBackMobile}</p>
              </div>
              <div className="img flex-1"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[100vh] bg-blue-300"></section>
    </main>
  );
}
