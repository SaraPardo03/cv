function ArianeDescriptionMobile({color, img, title, subTitle, description, list}){
  let colorText = "color-text-dark";
  if(color === "secondary"){
    colorText = "color-text-light"
  }
  if(color === "primary"){
    colorText = "color-text-dark"
  }
  if(color === "accent"){
    colorText = "color-text-light"
  }
  return <>
    <section className={`ariane-description-section-mobile lg:hidden ${color}`}>
      <div className={`img ${color} h-[50vh]`}>
          <img className="h-full w-full object-cover" src={`${img}`}></img>
      </div>
      <div className={`description ${colorText} px-[25px] pt-[40px]`}>
        <h3 className="subtitle">{subTitle}</h3>
        <h2 className="title">{title}</h2>
        <p className="pt-[10px]">{description}</p>
        {list && list.length > 0 && (
          <ul className="py-[20px] px-[25px]">
            {list.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  </>
}

export default ArianeDescriptionMobile