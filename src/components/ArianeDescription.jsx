function ArianeDescription({odd, color, img, title, subTitle, description, list}){
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
    <section className={`ariane-description-section hidden lg:flex flex-row ${color} ${odd ? "odd" : ""}`}>
      <div className={`description ${colorText} ${odd ? "flex flex-col items-end  " : ""} flex-1 px-[25px] pt-[120px] color-text-light`}>
        <h3 className="subtitle">{subTitle}</h3>
          <h2 className="title">{title}</h2>
          <p className="pt-[10px]">{description}</p>
          {list && list.length > 0 && (
            <div className="py-[20px]">
              {list.map((element, index) => (
                <p key={index}>{element}</p>
              ))}
            </div>
          )}
      </div>
    </section>
  </>
}

export default ArianeDescription