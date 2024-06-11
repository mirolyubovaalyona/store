import logo from './logo.svg';
import './App.css';
import React from "react";
import General from './routes/General/General';
import Shop from './routes/Shop/Shop';
import News from './routes/News/News';
import Products from './routes/Products/Products';
import {  BrowserRouter ,  Routes,  Route} from "react-router-dom";
import ContextData from './context/data/ContextData';
import ReducerData from './context/data/ReducerData';
import StateData from './context/data/StateData';

function App() {
  const [stateData, dispatchData] = React.useReducer(ReducerData,  StateData)
  return (
    <ContextData.Provider value={{stateData, dispatchData}}>
      <Routes> 
        <Route path="/" >
          <Route index   element={<General />} /> 
          <Route path="shop" element={<Shop />} />
          <Route path="news" element={<News />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </ContextData.Provider>
  );
}

export default App;
