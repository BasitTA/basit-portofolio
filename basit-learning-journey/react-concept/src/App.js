import './App.css';
import Login from './component/Login';
import CartCoffee from './hooks/useState-useEffect-localStorage-lifecycle/CartCoffee';

function App() {
  return (
    <div className="App">
      {/* <Cart /> */}
      <CartCoffee />
      <Login />
    </div>
  );
}

export default App;
