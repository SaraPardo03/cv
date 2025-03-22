function AboutXPSection({date, companyName, companySize, companyType, teamSize, teamType, npa, title, startTitle, start, list, skills, odd}){
  return <>
    <section id="about-xp-section" className={`hidden lg:flex flex-row relative ${odd ? odd : ""}`}>
      <div className={`time-line ${odd ? "light" : ""}`}>
        <p className="dot"></p>
      </div>
      <div className={`about-xp-date flex-none px-[25px] w-[300px] pt-[100px] ${odd ? "color-text-dark" : "color-text-light "}`}>
        <p className="company-name color-text-accent">{date}</p>
        <p className="subtitle">{companyName}</p>
        <p className="npa">{npa}</p>
      </div>
      <div className={`about-xp-text flex-1 px-[25px]  pt-[100px] ${odd ? "color-text-light" : "color-text-dark"}`}>
        <h3 className="subtitle">Expérience</h3>
        <h2 className="title mb-[20px]"><span>{title}</span></h2>
        {list && list.length > 0 && (
          <ul className="ps-[25px]">
            {list.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        )}
        <p className="color-text-accent subtitle mt-[20px] mb-[10px]"><span>{startTitle}</span></p>
        <p className="pb-[20px]">{start}</p>
        {skills && skills.length > 0 && (
          <div className="skills-list lg:hidden xl:flex felx-col justify-between ">
            {skills.map((skill, index) => (
              <div key={index} className="relative">
                <div  className="skill flex items-center justify-center">
                  <p className="">{skill}</p>
                </div>
                <div className="skill layer two flex items-center justify-center">
                  <p className="">{skill}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={`about-xp-company flex-none flex flex-col justify-end items-end w-[300px] pb-[20px] px-[25px] ${odd ? "color-text-dark" : "color-text-light "}`}>
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