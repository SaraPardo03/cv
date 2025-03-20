import React, { useEffect, useRef, useState} from 'react';



const SkillBar = ({skill, pourcentage, label }) => {
  const layerTwo = useRef(null);
  useEffect(() => {   
      //Clip for the split screen
      if (layerTwo.current) {
        let diagonnalPoints = [100 - pourcentage, 90 - pourcentage];
        console.log("diagonnalPoints", diagonnalPoints);
        layerTwo.current.style.clipPath = `polygon(${diagonnalPoints[0]}% 0, 100% 0, 100% 100%, ${diagonnalPoints[1]}% 100%)`;
      }
    }, []);
  return (
      <div className="skill-bar-container">
        <div className="layer one flex flex-row">
          <div className='flex-1'>{skill}</div>
          <div className='flex-1 flex justify-end'>{label} <i className="lg:hidden ms-[10px] bi bi-caret-down-fill"></i></div>
        </div>
        <div ref={layerTwo} className="layer two flex flex-row">
          <div className='flex-1'>{skill}</div>
          <div className='flex-1 flex justify-end'>{label} <i className="lg:hidden  ms-[10px] bi bi-caret-down-fill"></i></div>
        </div>
      </div>
  );
};

export default SkillBar;
