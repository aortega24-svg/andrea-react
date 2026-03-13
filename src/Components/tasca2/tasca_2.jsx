import { useState } from "react"; 
import imagens1 from "../../imatges/imagens1.png";
import imagens2 from "../../imatges/imagens2.png";
import imagens3 from "../../imatges/imagens3.png";
import imagens4 from "../../imatges/imagens4.png";

function Component2() {
  const imatges = [imagens1, imagens2, imagens3, imagens4];
  const [index, setIndex] = useState(0);

  const següent = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imatges.length);
  };

  const anterior = () => {
    setIndex((prevIndex) => (prevIndex - 1 + imatges.length) % imatges.length);
  };

  const imgStyle = {
    width: '100%',
    maxWidth: '400px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '8px',
    display: 'block',
    margin: '10px auto'
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Galeria Fotogràfica</h2>
      
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img 
          src={imatges[index]} 
          alt={`Imatge ${index + 1}`} 
          style={imgStyle} 
        />
        <p>Imatge {index + 1} de {imatges.length}</p>
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={anterior} style={buttonStyle}>⬅ Anterior</button>
        <button onClick={següent} style={buttonStyle}>Següent ➡</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  margin: '0 5px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#f9f9f9'
};

export default Component2;