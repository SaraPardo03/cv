
import SkillBar from "./SkillsBar";
import Tag from "./Tag";

function AboutToolsSection(){
  return <>
    <section id="about-tools-section-mobile" className="hidden lg:block">
      <div className="back-end-tools px-[25px] pt-[25px] color-text-dark">
        <h1 className="title">Outils <span>back-end</span></h1>
        <p>Développement d’APIs, gestion des bases de données et sécurité.</p>
        <div className="about-tool-container py-[25px]">
          <SkillBar skill="PHP" pourcentage="80" label="+ 10 ans"/>
          <ul className="flex flex-wrap gap-[10px] mt-[15px]">
            <Tag label="PHP 7/8"/>
            <Tag label="POO"/>
            <Tag label="API REST"/>
            <Tag label="JSON/XML"/>
            <Tag label="Sessions"/>
            <Tag label="Sécurité"/>
            <Tag label="Postman"/>
          </ul>
        </div>
        <div className="about-tool-container py-[25px]">
          <SkillBar skill="Python" pourcentage="20" label="1 ans"/>
          <ul className="flex flex-wrap gap-[10px] mt-[15px]">
            <Tag label="Python 3"/>
            <Tag label="API REST"/>
            <Tag label="Flask"/>
            <Tag label="Django"/>
            <Tag label="Pandas"/>
            <Tag label="NumPy"/>
            <Tag label="JWT"/>
          </ul>
        </div>
        <div className="about-tool-container py-[25px]">
          <SkillBar skill="BASH" pourcentage="50" label="+ 10 ans"/>
          <ul className="flex flex-wrap gap-[10px] mt-[15px]">
            <Tag label="Scripting"/>
            <Tag label="Automatisation"/>
            <Tag label="Permissions"/>
            <Tag label="Cron"/>
          </ul>
        </div>
        <div className="about-tool-container py-[25px]">
          <SkillBar skill="Base de données" pourcentage="80" label="+ 10 ans"/>
          <ul className="flex flex-wrap gap-[10px] mt-[15px]">
            <Tag label="SQL"/>
            <Tag label="NoSQL"/>
            <Tag label="MySQL"/>
            <Tag label="MongoDB"/>
            <Tag label="Firebase"/>
            <Tag label="Optimisation"/>
          </ul>
        </div>
        <div className="about-tool-container py-[25px]">
          <SkillBar skill="Méthodes" pourcentage="50" label="+ 10 ans"/>
          <ul className="flex flex-wrap gap-[10px] mt-[15px]">
            <Tag label="Git"/>
            <Tag label="GitHub"/>
            <Tag label="Bitbucket"/>
            <Tag label="Trello"/>
            <Tag label="Slack"/>
            <Tag label="Gantt"/>
            <Tag label="UML"/>
            <Tag label="Agile"/>
            <Tag label="Kanban"/>
            <Tag label="SEO"/>
          </ul>
        </div>
      </div>
      <div className="front-end-tools px-[25px] pt-[25px] color-text-light">
        <h1 className="title">Outils <span>front-end</span></h1>
        <p>Création d’interfaces optimisées et centrées sur l’expérience utilisateur.</p>
      </div>
    </section>
  </>
}

export default AboutToolsSection