import { useState } from "react";

function CercleColors() {

  const [color, setColor] = useState("gray");

  function vermell() {
    setColor('red');
  }

  function groc() {
    setColor('yellow');
  }

  function blau() {
    setColor('blue');
  }

  return (
    <div>
      <h2>Cercle de colors</h2>

      <div style={{
        borderRadius: '100%',
        backgroundColor: color,
        width: '250px',
        height: '250px',
      }}></div>

      <div style={{ textAlign: 'center' }}>
        <button onClick={vermell}>Vermell</button>
        <button onClick={blau}>Blau</button>
        <button onClick={groc}>Groc</button>
      </div>
    </div>
  );
}

export default CercleColors;