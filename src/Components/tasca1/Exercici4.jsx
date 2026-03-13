import { useState } from "react"; // 1. No oblidis importar el useState!
import imatge1 from "../../imatges/imagen1.png";
import imatge2 from "../../imatges/imagen2.png";

function CambiarImatge() {
  // 2. Creem l'estat. Comença sent "true" (mostrarem la primera)
  const [mostraPrimera, setMostraPrimera] = useState(true);

  // 3. Funció que s'executa en fer clic
  const handleClic = () => {
    setMostraPrimera(!mostraPrimera); // El simbol "!" inverteix el valor (de true a false)
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Canvi d'Imatge</h2>

      {/* 4. Condicional: si mostraPrimera és true, posa imatge1. Si no, imatge2 */}
      <div style={{ marginBottom: "20px" }}>
        <img 
          src={mostraPrimera ? imatge1 : imatge2} 
          alt="Imatge variable" 
          style={{ width: "300px", borderRadius: "10px" }} 
        />
      </div>

      {/* 5. Cridem a la funció handleClic quan premem el botó */}
      <button onClick={handleClic}>
        Canviar a la imatge {mostraPrimera ? "2" : "1"}
      </button>
    </div>
  );
}

export default CambiarImatge;