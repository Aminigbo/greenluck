import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Screens/Home';
import Signup from './Screens/signup';
import Login from './Screens/login';
import About from './Screens/about';
import Disclaimer from './Screens/disclainer';
import Privacy from './Screens/privacy';
import Refund from './Screens/refund';

function App() {


  return (
    
    <div>

     
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/disclaimer' element={<Disclaimer/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/refund' element={<Refund/>}/>
      
    </Routes>

    </div>

    
  );
}

export default App;
