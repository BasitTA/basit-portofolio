import './../src/styles/App.css';
import './../src/styles/Responsive.css';
import './../src/styles/Content.css';
import './../src/styles/Button.css';
import './../src/styles/Hero.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { DetailProduct } from './pages/DetailProduct';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/detail' element={ <DetailProduct /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </Router>
  );
}
