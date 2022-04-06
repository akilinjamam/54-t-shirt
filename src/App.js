
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GrandPaa from './Component/GrandPaa/GrandPaa';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Order from './Component/Order/Order';
import Review from './Component/Review/Review';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/review' element={<Review></Review>} ></Route>
        <Route path='/grandpaa' element={<GrandPaa></GrandPaa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
