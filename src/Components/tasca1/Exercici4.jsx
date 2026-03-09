import { useState } from "react";
import img1 from "../../imatges/rojo.png";
import img2 from "../../imatges/verde.png";

function CambiarImatge() {

  const [] = useState(true);

  return (
    <div>
      <h2>Canvi d'Imatge</h2>
      <div style={{
        margin: '100%',
      }}></div>


      <button onClick={(CambiarImatge)}>
        Canviar imatgee
      </button>
    </div>
  );
}

export default CambiarImatge;