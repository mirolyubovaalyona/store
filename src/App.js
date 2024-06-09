import logo from './logo.svg';
import './App.css';
import General from './routes/General/General';
import Shop from './routes/Shop/Shop';
import News from './routes/News/News';
import Products from './routes/Products/Products';
import {  BrowserRouter ,  Routes,  Route} from "react-router-dom";

function App() {
  return (
    <Routes> 
      <Route path="/" >
        <Route index   element={<General />} /> 
        <Route path="shop" element={<Shop />} />
        <Route path="news" element={<News />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
