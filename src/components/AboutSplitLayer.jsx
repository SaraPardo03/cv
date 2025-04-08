import React, {useEffect, useRef } from "react";

function AboutSplitLayer ({ subTitleFront, titleFront, textFront, subTitle, title, text, layerPosition , color}){
  const splitScreenLayer = useRef(null);

  useEffect(() => {
    if(splitScreenLayer.current){
      if(layerPosition === "two"){
        console.log("splitScreenLayer.current", splitScreenLayer.current, layerPosition, layerPosition === "two");
        splitScreenLayer.current.style.clipPath = `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`;

        setTimeout(() => {
          splitScreenLayer.current.style.transition = `clip-path 2s ease-in-out`;
          splitScreenLayer.current.style.clipPath = `polygon(0 0, 53% 0, 49% 100%, 0 100%)`;
        }, 300);

      }
    }

  }, []);

  return (
    <div ref={splitScreenLayer} className={`split-screen-layer ${layerPosition} ${color} flex flex-col`}>
      <div className="flex-non">
        <div className="flex flex-row gap-x-[100px] xl:gap-x-[200px] px-[80px] items-stretch pt-[40px]">
          <div className="back flex-1">
            <h1 className="subtitle pale">{subTitle}</h1>
            <h2 className="title deep pb-[10px]">{title}</h2>
            <p>{text}</p>
          </div>
          <div className={`front flex-1`}>
            <h1 className={`subtitle pale ${layerPosition==="two" ? "hidden": ""}`}>{subTitleFront}</h1>
            <h2 className={`title deep pb-[10px] ${layerPosition==="two" ? "hidden": ""}`}>{titleFront}</h2>
            <p className={`${layerPosition==="two" ? "hidden": ""}`}>{textFront}</p>
          </div>
        </div>
        <div className="h-[40px] flex flex-row px-[80px] my-[15px]">
          <div className="flex-1">
              <a href="https://github.com/SaraPardo03" target="_blank" rel="noopener noreferrer" className="px-[4px]">
                <i className="text-[30px] bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sarah-pardo-8a2087a2/" target="_blank" rel="noopener noreferrer" className="px-[4px]">
                <i className="text-[30px]  bi bi-linkedin"></i>
              </a>
          </div>
          <div className="flex-1 flex justify-end"></div>
        </div>
      </div>
      <div className="flex-1  img">
      </div>
    </div>
  );
}

export default AboutSplitLayer;
