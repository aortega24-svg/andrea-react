import { useState } from "react";

function LoremText() {

  const [negreta, setNegreta] = useState(false);
  const [cursiva, setCursiva] = useState(false);
  const [subratllat, setSubratllat] = useState(false);

  function onClickCursiva(){
    setCursiva(!cursiva)
  }

  function onClickNegreta(){
    setNegreta(!negreta)
  }

  function onClickSubrallat(){
     setSubratllat(!subratllat)
  }

  return (
    <div>
      <h2
          style={{
              fontWeight: negreta ? 'bold': 'normal',
              fontStyle: cursiva ? 'italic': 'normal',
              textDecoration: subratllat ? 'underline': 'none'
          }}
     
      >Lorem Ipsum</h2>
      <button onClick={onClickNegreta}>Negreta</button>
      <button onClick={onClickCursiva}>Cursiva</button>
      <button onClick={onClickSubrallat}>Subratllat</button>
    </div>
  );
}

export default LoremText;