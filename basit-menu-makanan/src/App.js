import './../src/styles/App.css';
import './../src/styles/Responsive.css';
import './../src/styles/Content.css';
import './../src/styles/Button.css';
import './../src/styles/Hero.css';
import './../src/styles/ProductDetail.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { NotFound } from './pages/NotFound';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/productDetail/:id' Component={ ProductDetail }/>
        <Route path='*' Component={ NotFound } />
      </Routes>
    </Router>
  );
}
