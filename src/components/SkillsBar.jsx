import React, { useEffect, useRef, useState} from 'react';
import Tag from "./Tag";


const SkillBar = ({skill, pourcentage, label , tools, toolsColor, collapseNotAllowed}) => {
  const [isTagsListOpen, setIsTagsListOpen,] = useState(false);
  const layerTwo = useRef(null);
  const tagsList = useRef(null);
  
  const handleToggleTags = e => {
    if(!collapseNotAllowed && tagsList.current){
      
      if(tagsList.current.style.maxHeight > "0px"){
        tagsList.current.style.maxHeight = `0px`;
        setIsTagsListOpen(false);
      }else{
        tagsList.current.style.maxHeight = `${Math.ceil(tools.length / 3) * 40}px`;
        setIsTagsListOpen(true);
      }
    }
  };
  useEffect(() => {   
      //Clip for the split bar
      if (layerTwo.current) {
        let diagonnalPoints = [100 - pourcentage, 95 - pourcentage];
        if(collapseNotAllowed){
          diagonnalPoints = [100 - pourcentage, 98 - pourcentage];
        }
        layerTwo.current.style.clipPath = `polygon(${diagonnalPoints[0]}% 0, 100% 0, 100% 100%, ${diagonnalPoints[1]}% 100%)`;

      }

      if(collapseNotAllowed && tagsList.current){
        tagsList.current.style.maxHeight = `${Math.ceil(tools.length / 3) * 40}px`;
      }
    }, []);
  return (
    <>
      <div onClick={handleToggleTags}  className={`skill-bar-container ${toolsColor}`}>
        <div className="layer one flex flex-row">
          <div className='flex-1'>{skill}</div>
          <div className='flex-1 flex justify-end'>{label} <i className={`lg:hidden ms-[10px] bi ${isTagsListOpen ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}></i>
          </div>
        </div>
        <div ref={layerTwo} className="layer two flex flex-row">
          <div className='flex-1'>{skill}</div>
          <div className='flex-1 flex justify-end'>{label} <i className={`lg:hidden ms-[10px] bi ${isTagsListOpen ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}></i>
          </div>
        </div>
      </div>
      <ul ref={tagsList} className="tags-list overflow-hidden flex flex-wrap gap-[10px]">
        {tools.map((tool, index) => (
          <Tag key={index} label={tool} color={toolsColor}/>
        ))}
      </ul>
    </>
  );
};

export default SkillBar;
