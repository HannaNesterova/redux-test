import Dishes from './Components/DishesComponents/Dishes';

import './App.css';
import AllCatigories from './Components/Filter/AllCatigories';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <div className='block'>
        <AllCatigories />
        <Cart />
      </div>
      <div className='block'>
        <Dishes />
      </div>
    </div>
  );
}

export default App;
