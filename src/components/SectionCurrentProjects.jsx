
import { useNavigate } from "react-router-dom";
import ImgAraineMobile from "../assets/img/ariane-mobile.jpg";
function SectionCurrentProjects() {
  const navigate = useNavigate();
  const subTitle = "Projet"
  const subTitleColored = "inspirant"
  const title = "Ariane"
  const sub = "Votre compagnon pour la création d'histoires interactives"
  //const resume = "Une application innovante pour les écrivains et créateurs de jeux textuels interactifs. Découvrez comment Ariane peut transformer votre processus de création et donner vie à vos récits interactifs."
  const resume = "Je travaille actuellement sur Ariane, une application pensée pour les écrivains et créateurs de jeux narratifs. Mon objectif ? Offrir un outil intuitif et puissant pour imaginer, structurer et donner vie à des histoires interactives captivantes."
  const handleClickGoToProjects = e =>{
    navigate(`/projects`);
  }
  return (<>
  <section id="section-curent-projects" className="hidden lg:flex flex-row bg-secondary color-text-light">
    <button onClick={handleClickGoToProjects} className="px-[40px] py-[10px]">En savoir plus sur Ariane</button>
    <div className="text-box flex-1">
      <div className="px-[80px]">
        <h1 className="pale pt-[40px]">{subTitle} <span className="color-text-accent">{subTitleColored}</span></h1>
        <h2 className="deep pb-[40px]">{title}</h2>
        <p className="pb-[40px]">{resume}</p>
      </div>
    </div>
    <div className="img-box flex-1 relative">
      <div className="layer">
      </div>
    </div>
  </section>
    <section id="section-curent-projects-mobile" className="lg:hidden bg-secondary color-text-light">
      <div className="px-[25px]">
        <h1 className="pale pt-[20px]">{subTitle} <span className="color-text-accent">{subTitleColored}</span></h1>
        <h2 className="deep pb-[20px]">{title}</h2>
        <p className="pb-[20px]">{resume}</p>
        <button onClick={handleClickGoToProjects} className="mb-[20px] px-[20px] py-[10px]">En savoir plus sur Ariane</button>
      </div>
      <div className="h-[50vh] relative">
        <div className="layer two">
        </div>
      </div>
    </section>
  </>
  );
}

export default SectionCurrentProjects;