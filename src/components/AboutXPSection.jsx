function AboutXPSection({date, companyName, companySize, companyType, teamSize, teamType, npa, title, list, skills, star, odd}){
  return <>
    <section className={`about-xp-section  relative ${odd ? odd : ""}`}>
      <div className={`time-line`}>
        <p className="dot"></p>
      </div>
      <div className={`about-xp-date bg-accent w-full color-text-light px-[25px]`}>
        <p className="subtitle pale pt-[20px]">{date}</p>
        <h2 className="title deep ">{title}</h2>
        <p className="subtitle pale pb-[20px]">{companyName}</p>
      </div>
      <div className={`relative about-xp-text flex w-full  py-[40px] px-[25px] ${odd ? "color-text-light" : "color-text-dark"}`}>
        <div className={`time-line ${odd ? "" : "accent"}`}>
        </div>
        <div className="flex-1">
          {list && list.length > 0 && (
            <ul className="ps-[25px]">
              {list.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex-1">
        {skills && skills.length > 0 && (
          <div className="pl-[25px] pb-[40px] skills-list grid grid-flow-col grid-rows-2 gap-[20%] justify-center">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col relative">
                <div className="skill ">
                  <img className="h-[70px] w-full object-contain" src={`./src/assets/img/${skill}_c.png`}></img>
                </div>
                <div className="skill layer two flex items-center justify-center">
                  <img className="h-[70px] w-full object-contain" src={`./src/assets/img/${skill}.png`}></img>
                </div>
                <p className="w-full text-center uppercase text-[0.9rem]">{skill}</p>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
      {star && (
        <div className="hidden start flex justify-center">
          <div className="w-[80%]">
            <h4>Projets clés</h4>
            <p>{star}</p>
          </div>
        </div>
      )}
    </section>
    <section className={`lg:hidden about-xp-section hidden lg:flex flex-row relative ${odd ? odd : ""}`}>
      <div className={`time-line ${odd ? "light" : ""}`}>
        <p className="dot"></p>
      </div>
      <div className={`about-xp-date flex-none ps-[25px] w-[300px] pt-[100px] ${odd ? "color-text-dark" : "color-text-light "}`}>
        <p className="company-name color-text-accent">{date}</p>
        <p className="subtitle">{companyName}</p>
        <p className="npa">{npa}</p>
      </div>
      <div className={`about-xp-text flex-1 flex flex-col pt-[100px] ${odd ? "color-text-light" : "color-text-dark"}`}>
        <div className="flex-1">
          <h3 className="subtitle">Expérience</h3>
          <h2 className="title mb-[20px]"><span>{title}</span></h2>
          {list && list.length > 0 && (
            <ul className="ps-[25px]">
              {list.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ul>
          )}
        </div>
        {skills && skills.length > 0 && (
          <div className="skills-list flex-1  items-center py-[20px] flex flex-wrap justify-between ">
            {skills.map((skill, index) => (
              <div key={index} >  
                <div className="relative">
                  <div  className="skill flex items-center justify-center">
                    <img className="h-[70px] w-full object-contain" src={`./src/assets/img/${skill}_c.png`}></img>
                  </div>
                  <div className="skill layer two flex items-center justify-center">
                    <img className="h-[70px] w-full object-contain" src={`./src/assets/img/${skill}.png`}></img>
                  </div>
                </div>
                <p className="w-full text-center uppercase text-[0.9rem]">{skill}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={`about-xp-company flex-none flex flex-col justify-end items-end w-[300px] pb-[20px] pe-[25px] ${odd ? "color-text-dark" : "color-text-light "}`}>
        <p className=" color-text-accent">{companyName}</p>
        <p className="company-infos">{companySize}</p>
        <p className="company-infos">{companyType}</p>

        <p className="color-text-accent">Équipe</p>
        <p className="company-infos">{teamSize}</p>
        <p className="company-infos">{teamType}</p>
      </div>
    </section>
  </>
}

export default AboutXPSection