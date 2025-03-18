import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const SplitLayer = forwardRef(({ subTitleFront, titleFront, textFront, subTitle, title, text, layerPosition , color}, ref) => {
  const navigate = useNavigate();
  // Navigate to About page on button click
  const handleClickGoToAbout = e => {
    navigate(`/about`);
  };
  return (
    <div ref={ref} className={`split-screen-layer ${layerPosition} ${color} flex flex-col`}>
      {/*<div className="profile-container relative flex flex-col">
          <div className="bg-profile flex flex-col">
            <div className="flex-none min-h-[33vh]"></div>
            <div className="flex-1 img"></div>
          </div>
          <div className="z-10 flex-1 flex w-[100%] justify-end px-[80px]">
            <div className="w-[40%]">
              <h1 className="pale pt-[20px]">{subTitle}</h1>
              <h2 className="deep pb-[20px]">{title}</h2>
              <p>{text}</p>
            </div>
          </div>
          <div className="flex-1 w-[100%] px-[80px] bg-red-300">
            <div className="w-[40%]">
              <h1 className="pale pt-[20px]">{subTitleFront}</h1>
              <h2 className="deep pb-[20px]">{titleFront}</h2>
              <p>{textFront}</p>
            </div>
          </div>
      </div>*/}
      <div className="flex-non">
        <div className="flex flex-row gap-x-[200px] px-[80px] items-stretch pt-[40px]">
          <div className="flex-1">
            <h1 className="pale pt-[20px]">{subTitle}</h1>
            <h2 className="deep pb-[20px]">{title}</h2>
            <p>{text}</p>
          </div>
          <div className="flex-1">
            <h1 className="pale pt-[20px]">{subTitleFront}</h1>
            <h2 className="deep pb-[20px]">{titleFront}</h2>
            <p>{textFront}</p>
          </div>
        </div>
        <div className="bg-green-300 h-[40px]"></div>
      </div>
      <div className="flex-1  img">
      </div>
    </div>
  );
});

export default SplitLayer;
