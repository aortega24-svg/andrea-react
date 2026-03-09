import { useState } from "react";

function CercleColors() {

  const [color, setColor] = useState("gray");

  return (
      <div>
      <h2>Cercle de colors</h2>
      <div style={{
        margin: '100%',
      }}></div>

      <div style={{
        borderRadius: '100%',
        background: 'grey',
        width: '250px',
        height: '250px',
      }}></div>

      <button onClick={() => setColor("red")}>Vermell</button>
      <button onClick={() => setColor("blue")}>Blau</button>
      <button onClick={() => setColor("green")}>Verd</button>
    </div>
  );
}

export default CercleColors;