import './../src/styles/App.css';
import './../src/styles/Responsive.css';
import './../src/styles/Content.css';
import './../src/styles/Button.css';
import './../src/styles/Hero.css';

import Navbar from './containers/Navbar';
import Hero from './containers/Hero';
import Content from './containers/Content';
import { useState, useEffect, useRef} from 'react';

function App() {

  const [menu, setMenu] = useState(null);

  const fetchData = async() => {
    const link = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert';
    const data = await fetch(link);
    const menu = await data.json();
    setMenu(menu.meals);
  }

  useEffect(()=>{
    // run fetch data
    fetchData();
  },[menu]);

  if(!menu) return 'Tunggu sebentar, sedang mengambil data..';

  return (
    <>
      {/* Header */}
      <header className="Header">
        <nav><Navbar /></nav>
        <section><Hero /></section>
      </header>
      {/* Content */}
      <section><Content menu={ menu }/></section>
      {/* Footer */}
      <footer>

      </footer>
    </>
  );
}

export default App;
