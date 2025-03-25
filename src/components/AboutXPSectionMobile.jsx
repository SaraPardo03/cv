function AboutXPSectionMobile({date, companyName, companySize, companyType, teamSize, teamType, npa, title, startTitle, start, list, skills, odd}){
  return <>
    <section className={`about-xp-section-mobile lg:hidden relative ${odd ? odd : ""}`}>
      <div className={`time-line ${odd ? "light" : ""}`}>
        <p className="dot"></p>
      </div>
      <div className={`about-xp-date flex-none pt-[20px]  px-[25px] pb-[20px] ${odd ? "color-text-dark" : "color-text-light "}`}>
        <p className="company-name color-text-accent">{date}</p>
        <p className="subtitle">{companyName}</p>
        <p className="npa">{npa}</p>
      </div>
      <div className={`about-xp-text flex-1 flex flex-col px-[25px] pt-[40px] ${odd ? "color-text-light" : "color-text-dark"}`}>
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
          <div className="skills-list flex-1  items-center py-[40px] flex flex-wrap gap-y-[20px] justify-between ">
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
      <div className={`about-xp-company flex-none flex flex-col justify-end items-end px-[25px] pt-[30px] pb-[20px] ${odd ? "color-text-dark" : "color-text-light "}`}>
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

export default AboutXPSectionMobile