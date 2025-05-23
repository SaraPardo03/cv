import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const SplitLayerMobile = forwardRef(({ subTitle, title, text, layerPosition , color}, ref) => {
  const navigate = useNavigate();
  // Navigate to About page on button click
  const handleClickGoToAbout = e => {
    navigate(`/about`);
  };
  return (
    <div ref={ref} className={`split-screen-layer ${layerPosition} ${color}`}>
      <div className="layer-wraper relative flex flex-col">
        <div className="flex-none px-[25px] pt-[40px]">
          <div className='text'>
            <h1 className="subtitle pale">{subTitle}</h1>
            <h2 className="title deep pb-[10px]">{title}</h2>
            <p>{text}</p>
          </div>
          <div className='w-[100%] flex flex-row items-center '>
            <div className='flex justify-between'>
              <a 
                href="https://github.com/SaraPardo03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-[4px]"
              >
                <i className="text-[30px] bi bi-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/sarah-pardo-8a2087a2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-[4px]"
              >
                <i className="text-[30px]  bi bi-linkedin"></i>
              </a>
            </div>
            <div className='flex-1 '></div>
            <div className=''>
              <button onClick={handleClickGoToAbout} className="px-[20px] py-[10px]">Mon parcours</button>
            </div>
          </div>
        </div>
        <div className="img flex-1"></div>
      </div>
    </div>
  );
});

export default SplitLayerMobile;
