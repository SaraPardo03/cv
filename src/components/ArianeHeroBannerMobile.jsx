import arianeImg from "../assets/img/arianeHeroBanner.png"

function ArianeHeroBannerMobile({title, subTitle, subtileSpan, description}){
return <>
    <section id="ariane-hero-banner-mobile" className="lg:hidden">
      <div className="hero-img h-[100vw] pt-[80px] px-[10px]">
        <img className="h-full w-full object-contain" src={arianeImg}></img>
      </div>
      <div className="px-[25px] py-[25px] color-text-light">
        <h1 className="subtitle pale">{subTitle}<span>{subtileSpan}</span></h1>
        <h2 className="title deep pb-[10px]">{title}</h2>
        <p>{description}</p>
      </div>
      
    </section>
  </>
}

export default ArianeHeroBannerMobile