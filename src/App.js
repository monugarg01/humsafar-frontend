import './App.css';
import Card from './component/card';
import DataCard from './component/card';
import Header from './component/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/about';
import TotalPrediction from './component/total-prediction';
import FormForInsertion from './component/formforinsertion';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <div className='header'>
      <div>
      <div className='heading'>Humsafar</div>
      </div>
      </div>
    <Routes>
    <Route path='/' element={<DataCard/>}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/totalprediction" element={<TotalPrediction />}></Route>
    <Route path="/05499b5ef634" element={<FormForInsertion />}></Route>
      </Routes>
     
    </BrowserRouter>
    </>
  );
}

export default App;
