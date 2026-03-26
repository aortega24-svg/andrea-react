import { useState } from "react"; 
import imatge1 from "../../imatges/imagen1.png";
import imatge2 from "../../imatges/imagen2.png";

function CambiarImatge() {
  
  const [mostraPrimera, setMostraPrimera] = useState(true);

 
  const handleClic = () => {
    setMostraPrimera(!mostraPrimera); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Canvi d'Imatge</h2>

     
      <div style={{ marginBottom: "20px" }}>
        <img 
          src={mostraPrimera ? imatge1 : imatge2} 
          alt="Imatge variable" 
          style={{ width: "300px", borderRadius: "10px" }} 
        />
      </div>

      
      <button onClick={handleClic}>
        Canviar a la imatge {mostraPrimera ? "2" : "1"}
      </button>
    </div>
  );
}

export default CambiarImatge;