import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import './NullStyle.css';
import Basket from './page/basket/Basket';
import Home from './page/home/Home';

export const AppContext = createContext({});

function App() {

  const [arrBasket, setArrBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);


  return (
    <AppContext.Provider value={{ arrBasket, setArrBasket, totalPrice, setTotalPrice, totalCount, setTotalCount }}> 
      <div className='wrapper'>
        <Routes>
          <Route path='/React-Pizza' element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path='basket' element={<Basket/>}/>
          </Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
