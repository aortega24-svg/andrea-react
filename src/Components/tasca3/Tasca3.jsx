function Props_tasca3({ imatge, titol, text, textBoto1, linkBoto1, textBoto2, linkBoto2 }) {
 
  return (

    <div style={{
      display: "inline-block",
      margin: "10px"
    }}>

      <div style={{ 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        overflow: 'hidden', 
        width: '300px', 
         marginTop: '30px'}}>

        <img src={imatge} alt={titol} style={{ width: '100%' }} />

        <div style={{ 
          padding: '16px',
          textAlign: "left"}}>
          <h2>{titol}</h2>
          <p>{text}</p>

          <div style={{ display: 'flex', gap: '15px' }}>
            <a href={linkBoto1} style={{ textDecoration: 'none', color: '#c0d6ec', fontWeight: 'bold' }}>{textBoto1}</a>
            <a href={linkBoto2} style={{ textDecoration: 'none', color: '#c0d6ec', fontWeight: 'bold' }}>{textBoto2}</a>
          </div>
        
        </div>
      </div>

    </div>
  );
}

export default Props_tasca3;