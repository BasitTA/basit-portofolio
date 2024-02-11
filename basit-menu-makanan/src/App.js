import './../src/styles/App.css';
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
      <nav className="Navbar"><Navbar /></nav>
      {/* Hero */}
      <section className="Hero"><Hero /></section>
      {/* Content */}
      <section className="Content"><Content menu={ menu }/></section>
      {/* Footer */}
      <footer className="Footer">

      </footer>
    </>
  );
}

export default App;
