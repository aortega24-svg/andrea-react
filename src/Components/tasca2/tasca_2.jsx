import { useState } from "react"; 
import imatge1 from "../../imatges/imagen1.png";
import imatge2 from "../../imatges/imagen2.png";
import imatge3 from "../../imatges/imagen3.png";
import imatge4 from "../../imatges/imagen4.png";

function Component1() {
  const llistaImatges = [imatge1, imatge2, imatge3, imatge4];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {llistaImatges.map((img, index) => (
        <img 
          key={index} 
          src={img} 
          alt={`Foto número ${index + 1}`} 
          style={{ width: "150px", borderRadius: "10px" }}
        />
      ))}
    </div>
  );
}

export default Component1;