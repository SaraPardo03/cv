import SkillBar from "./SkillsBar";

function AboutToolsSectionMobile({phpTools, pythonTools, bashTools, bddTools, htmlCss, javascript, uiUx}){
  
  return <>
    <section id="about-tools-section-mobile" className="lg:hidden">
      <div className="back-end-tools px-[25px] pt-[40px] color-text-light">
        <h1 className="title">Outils <span>back-end</span></h1>
        <p>Développement d’APIs, gestion des bases de données et sécurité.</p>
        <div className="about-tool-container flex flex-wrap gap-[20px] py-[25px]">
          <SkillBar skill="PHP" pourcentage="75" label="+ 10 ans" tools={phpTools} toolsColor="light"/>
          <SkillBar skill="PYTHON" pourcentage="30" label="1 ans" tools={pythonTools} toolsColor="light"/>
          <SkillBar skill="BASH" pourcentage="50" label="5 ans" tools={bashTools} toolsColor="light"/>
          <SkillBar skill="BDD" pourcentage="75" label="+ 10 ans" tools={bddTools}toolsColor="light" />
        </div>
      </div>
      <div className="front-end-tools px-[25px] pt-[80px] color-text-dark">
        <h1 className="title">Outils <span>front-end</span></h1>
        <p>Création d’interfaces optimisées et centrées sur l’expérience utilisateur.</p>
        <div className="about-tool-container flex flex-wrap gap-[20px] py-[25px]">
          <SkillBar skill="HTML/CSS" pourcentage="80" label="+ 10 ans" tools={htmlCss} />
          <SkillBar skill="JAVASCRIPT" pourcentage="20" label="1 ans" tools={javascript} />
          <SkillBar skill="iUx" pourcentage="50" label="5 ans" tools={uiUx} />
        </div>
      </div>
    </section>
  </>
}

export default AboutToolsSectionMobile