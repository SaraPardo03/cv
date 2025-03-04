import { useNavigate } from "react-router-dom";

export default function CallToActionButton({ link, text }) {
  const navigate = useNavigate();

  const handleClickCallToAction = () => {
    if (link) {
      navigate(`/${link}`);
    } else {
      console.warn("Lien invalide !");
    }
  };

  return (
    <button onClick={handleClickCallToAction} className="call-to-action-button px-[15px] py-[5px] relative">
      <div className="absolute top-0 layer one">
        <p className="text-darker whitespace-nowrap">{text}</p>
      </div>
      <div className="absolute top-0 layer two">
        <p className="text-lighter whitespace-nowrap">{text}</p>
      </div>
    </button>
  );
}
