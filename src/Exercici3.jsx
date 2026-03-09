import { useState } from 'react'
import './App.css'

function LoremText() {

  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  return (
    <div>
      <h2>Lorem Ipsum</h2>

      <p
        style={{
          fontWeight: bold ? "bold" : "normal",
          fontStyle: italic ? "italic" : "normal",
          textDecoration: underline ? "underline" : "none"
        }}
      >
        Lorem Ipsum
      </p>

      <button onClick={() => setBold(!bold)}>Negreta</button>
      <button onClick={() => setItalic(!italic)}>Cursiva</button>
      <button onClick={() => setUnderline(!underline)}>Subratllat</button>
    </div>
  );
}

export default LoremText;