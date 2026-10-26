import "./ImagensFlutuantes.css";

import cachorro from "../assets/imgs/dog-img.webp";
import pizza from "../assets/imgs/pizza-img.webp";
import basquete from "../assets/imgs/ball-img.webp";

function ImagensFlutuantes() {
  return (
    <div className="imagens-flutuantes">
      <img
        src={cachorro}
        alt=""
        width="320"
        height="366"
        loading="lazy"
        decoding="async"
        className="flutuante cachorro"
      />

      <img
        src={pizza}
        alt=""
        width="320"
        height="270"
        loading="lazy"
        decoding="async"
        className="flutuante pizza"
      />

      <img
        src={basquete}
        alt=""
        width="320"
        height="322"
        loading="lazy"
        decoding="async"
        className="flutuante basquete"
      />
    </div>
  );
}

export default ImagensFlutuantes;
