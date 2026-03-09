import { useState } from "react";

function LoremText() {

  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  return (
    <div>
      <h2>Lorem Ipsum</h2>
      <div style={{
        margin: '100%',
      }}></div>



      <button onClick={() => setBold(!bold)}>Negreta</button>
      <button onClick={() => setItalic(!italic)}>Cursiva</button>
      <button onClick={() => setUnderline(!underline)}>Subratllat</button>
    </div>
  );
}

export default LoremText;