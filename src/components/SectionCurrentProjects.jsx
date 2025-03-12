
function SectionCurrentProjects() {
  const subTitle = "Projet"
  const subTitleColored = "inspirant"
  const title = "Ariane"
  const sub = "Votre compagnon pour la création d'histoires interactives"
  const resume = "Une application innovante pour les écrivains et créateurs de jeux textuels interactifs. Découvrez comment Ariane peut transformer votre processus de création et donner vie à vos récits interactifs."

  return (
    <section id="section-curent-projects" className="bg-secondary color-text-light">
      <div className="layer px-[25px]">
        <h1 className="pale pt-[20px]">{subTitle} <span className="color-text-accent">{subTitleColored}</span></h1>
        <h2 className="deep pb-[20px]">{title}</h2>
        <p>{sub}</p>
      </div>
      <div className="layer two">
      </div>
    </section>
  );
}

export default SectionCurrentProjects;