
import './App.css';
import { useState } from 'react';

import Exercici1 from './components/tasca1/Exercici1';
import Exercici2 from './components/tasca1/Exercici2';
import Exercici3 from './components/tasca1/Exercici3';
import Exercici4 from './components/tasca1/Exercici4';

import Component1 from './components/tasca2/tasca_1';
import Component2 from './components/tasca2/tasca_2';

import Tasca3 from './components/tasca3/Tasca3';

import uno from './imatges/uno.jfif';




import Menu from './Menu';
function App() {
  const [tascaSeleccionada, setTascaSeleccionada] = useState("tasca 1")

  function getTascaComponent() {
    switch (tascaSeleccionada) {
      case "tasca 1":
        return <Exercici1 />
      case "tasca 2":
        return <Exercici2 />
      case "tasca 3":
        return <Exercici3 />
      case "tasca 4":
        return <Exercici4 />
      case "tasca 2.1":
        return <Component1 />
      case "tasca 2.2":
        return <Component2 />
      case "tasca 3.2":
       return <div>
          <Tasca3 imatge={uno} titol="Lizard" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" textBoto1="SHARE" linkBoto1="#" textBoto2="LEARN MORE" linkBoto2="#" />
          <Tasca3 imatge={uno} titol="Lizard" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" textBoto1="SHARE" linkBoto1="#" textBoto2="LEARN MORE" linkBoto2="#" />
          <Tasca3 imatge={uno} titol="Lizard" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" textBoto1="SHARE" linkBoto1="#" textBoto2="LEARN MORE" linkBoto2="#" />
          <Tasca3 imatge={uno} titol="Lizard" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" textBoto1="SHARE" linkBoto1="#" textBoto2="LEARN MORE" linkBoto2="#" />
          <Tasca3 imatge={uno} titol="Lizard" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" textBoto1="SHARE" linkBoto1="#" textBoto2="LEARN MORE" linkBoto2="#" />
        </div>
      
      default:
      return null
    }
  }
  return (
    <div>
      <Menu canviarTasca={setTascaSeleccionada} />
      {getTascaComponent()}
    </div>
  )
}

export default App;
