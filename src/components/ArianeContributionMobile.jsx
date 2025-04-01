function ArianeContributionMobile(){
  return <>
    <section id="ariane-contribution-section-mobile" className="lg:hidden">
      <div className="bg-accent pt-[40px] px-[25px] color-text-light">
        <h3 className="subtitle">Contributions <span>Bienvenues!</span></h3>
        <h2 className="title pb-[20px]">Rejoignez l'aventure Ariane !</h2>
      </div>
      <div className="clip h-[10px]"></div>
      <div className="bg-primary color-text-dark pt-[40px] px-[25px]">
        <h3 className="subtitle">Nous recherchons :</h3>
        <ul className="py-[20px] ps-[20px]">
          <li><span>Auteurs-testeurs </span>pour expérimenter l'outil et donner leur avis</li>
          <li><span>Développeurs passionnés </span>(React/Python) pour améliorer la plateforme</li>
          <li><span>Designers UX </span>pour peaufiner l'interface</li>  
        </ul>
      </div>
      <div className="clip secondary h-[10px]"></div>
      <div className="bg-secondary">
        <div className="bg-secondary color-text-light pt-[40px] px-[25px]">
          <h3 className="subtitle">Pourquoi contribuer ?</h3>
          <ul className="py-[20px] ps-[20px]">
            <li>Participez à un outil innovant pour créateurs</li>
            <li>Influencez le développement avec vos besoins réels</li>
            <li>Bénéficiez d'un accès privilégié aux nouvelles fonctionnalités</li>  
          </ul>
        </div>
        <div className="clip  odd h-[10px]"></div>
        <div className="bg-accent color-text-light py-[40px] px-[25px]">
          <h3 className="subtitle">Comment nous aider ?</h3>
          <div className="flex flex-col justyfy-center gap-[20px] py-[20px]">
            <button className="flex-none  clip">
              <a className="layer" href="mailto:sarah.pardo03@gmail.com">Partagez vos idées</a>
              <a className="layer two" href="mailto:sarah.pardo03@gmail.com">Partagez vos idées</a>
            </button>
            <button className="flex-none  clip primary">
              <a className="layer" href="https://github.com/SaraPardo03/ariane">Contribuez au code</a>
              <a className="layer two" href="https://github.com/SaraPardo03/ariane">Contribuez au code</a>
            </button>          
          </div>
        </div>
      </div>
    </section>
  </>
}

export default ArianeContributionMobile