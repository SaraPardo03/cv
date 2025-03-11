import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const SplitLayerMobile = forwardRef(({ subTitle, title, text, layerPosition , color}, ref) => {
  return (
    <div ref={ref} className={`split-screen-layer ${layerPosition} ${color}`}>
      <div className="layer-wraper relative flex flex-col">
        <div className="flex-none px-[25px]">
          <div className='text'>
            <h1 className="pale pt-[20px]">{subTitle}</h1>
            <h2 className="deep pb-[20px]">{title}</h2>
            <p>{text}</p>
          </div>
          <div className='w-[100%]  flex flex-row items-center pt-[20px]'>
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
                href="https://github.com/SaraPardo03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-[4px]"
              >
                <i className="text-[30px] bi bi-github"></i>
              </a>
            </div>
            <div className='flex-1 '></div>
            <div className=''>
              <button className="px-2 py-1">En savoir plus</button>
            </div>
          </div>
        </div>
        <div className="img flex-1"></div>
      </div>
    </div>
  );
});

export default SplitLayerMobile;
