import "./ImagensFlutuantes.css";

import cachorro from "../assets/imgs/dog-img.png";
import pizza from "../assets/imgs/pizza-img.png";
import basquete from "../assets/imgs/ball-img.png";

function ImagensFlutuantes() {
  return (
    <div className="imagens-flutuantes">
      <img src={cachorro} alt="" className="flutuante cachorro" />

      <img src={pizza} alt="" className="flutuante pizza" />

      <img src={basquete} alt="" className="flutuante basquete" />
    </div>
  );
}

export default ImagensFlutuantes;
