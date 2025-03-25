import arianeImg from "../assets/img/arianeHeroBanner.png"

function ArianeHeroBanner({title, subTitle, subtileSpan, description}){
 return <>
    <section id="ariane-hero-banner" className="hidden lg:flex flex-row">
      <div className="flex flex-1 hero-img justify-center px-[10px]">
        <img className="object-contain" src={arianeImg}></img>
      </div>
      <div className="clip flex-none w-[50px]">
        <div className="bug"></div>
      </div>
      <div className="flex-1 px-[25px] pt-[120px] pb-[25px] color-text-light">
        <h1 className="subtitle pale">{subTitle}<span>{subtileSpan}</span></h1>
        <h2 className="title deep pb-[10px]">{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  </>
}

export default ArianeHeroBanner