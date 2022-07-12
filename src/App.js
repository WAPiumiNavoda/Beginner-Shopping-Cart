
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/component/Home';
import Cart from './component/Cart';
import {CartProvider} from 'react-use-cart';

function App() {
  return (
    <>
    <CartProvider>
     <Home/>
     <Cart/>
     </CartProvider>
    </>
  );
}

export default App;
