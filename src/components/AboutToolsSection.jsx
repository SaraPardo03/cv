import SkillBar from "./SkillsBar";

function AboutToolsSection({phpTools, pythonTools, bashTools, bddTools, htmlCss, javascript, uiUx}){
  return <>
    <section id="about-tools-section" className="hidden lg:flex flex flex-row">
      <div className="back-end-tools flex-1 px-[25px] color-text-dark pt-[100px]">
        <h2 className="subtitle pale">Outils</h2>
        <h1 className="title deep mb-[10px]">Développeuse <span>back-end</span></h1>
        <p>Développement d’APIs, gestion des bases de données et sécurité.</p>
        <div className="about-tool-container flex flex-wrap gap-[20px] py-[25px]">
          <SkillBar skill="PHP" pourcentage="75" label="+ 10 ans" tools={phpTools} collapseNotAllowed={true}/>
          <SkillBar skill="PYTHON" pourcentage="30" label="1 ans" tools={pythonTools} collapseNotAllowed={true}/>
          <SkillBar skill="BASH" pourcentage="50" label="5 ans" tools={bashTools} collapseNotAllowed={true}/>
          <SkillBar skill="BDD" pourcentage="75" label="+ 10 ans" tools={bddTools} collapseNotAllowed={true}/>
        </div>
      </div>
      <div className="clip flex-none w-[50px]">
      </div>
      <div className="front-end-tools flex-1 px-[25px] pt-[100px] color-text-light">
        <h2 className="subtitle pale">Outils</h2>
        <h1 className="title deep  mb-[10px]">Développeuse <span>front-end</span></h1>
        <p>Création d’interfaces optimisées et centrées sur l’expérience utilisateur.</p>
        <div className="about-tool-container flex flex-wrap gap-[20px] py-[25px]">
          <SkillBar skill="HTML/CSS" pourcentage="80" label="+ 10 ans" tools={htmlCss} toolsColor="light" collapseNotAllowed={true}/>
          <SkillBar skill="JAVASCRIPT" pourcentage="20" label="1 ans" tools={javascript} toolsColor="light" collapseNotAllowed={true}/>
          <SkillBar skill="iUx" pourcentage="50" label="5 ans" tools={uiUx} toolsColor="light" collapseNotAllowed={true}/>
        </div>
      </div>
    </section>
  </>
}

export default AboutToolsSection