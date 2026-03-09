import { useState } from 'react'
import './App.css'
import img1 from "./imatges/rojo.png";
import img2 from "./imatges/verde.png";

function CambiarImatge() {

  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <h2>Canvi d'Imatge</h2>

      <img
        src={toggle ? img1 : img2}
        alt="imatge"
        style={{ width: "250px" }}
      />

      <br />

      <button onClick={() => setToggle(!toggle)}>
        Canviar imatge
      </button>
    </div>
  );
}

export default CambiarImatge;