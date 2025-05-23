import React, {forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const SplitLayer = forwardRef(({ subTitleFront, titleFront, textFront, subTitle, title, text, layerPosition , color}, ref) => {
  const navigate = useNavigate();
  // Navigate to About page on button click
  const handleClickGoToAbout = e => {
    navigate(`/about`);
  };
  return (
    <div ref={ref} className={`split-screen-layer ${layerPosition} ${color} flex flex-col`}>
      <div className="flex-non">
        <div className="flex flex-row gap-x-[100px] xl:gap-x-[200px] px-[80px] items-stretch pt-[40px]">
          <div className="back flex-1">
            <h1 className="subtitle pale">{subTitle}</h1>
            <h2 className="title deep pb-[10px]">{title}</h2>
            <p className="">{text}</p>
          </div>
          <div className={`front flex-1 flex flex-col items-end`}>
            <h1 className={`subtitle pale ${layerPosition==="two"? "hidden":""}`}>{subTitleFront}</h1>
            <h2 className={`title deep pb-[10px] ${layerPosition==="two"? "hidden":""}`}>{titleFront}</h2>
            <p className={`text-right ${layerPosition==="two"? "hidden":""}`}>{textFront}</p>
          </div>
        </div>
        <div className="h-[40px] flex flex-row px-[80px] my-[30px]">
          <div className="hidden flex-1">
              <a href="https://github.com/SaraPardo03" target="_blank" rel="noopener noreferrer" className="px-[4px]">
                <i className="text-[30px] bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sarah-pardo-8a2087a2/" target="_blank" rel="noopener noreferrer" className="px-[4px]">
                <i className="text-[30px]  bi bi-linkedin"></i>
              </a>
          </div>
          <div className={`flex-1  flex justify-center`}>      
            <button onClick={handleClickGoToAbout} className="px-[40px] pt-[8px] pb-[10px] ">Mon parcours</button>
          </div>
          <div className="hidden flex-1 flex justify-end"></div>
        </div>
      </div>
      <div className="flex-1  img">
      </div>
    </div>
  );
});

export default SplitLayer;
