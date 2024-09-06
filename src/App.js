import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Screens/Home';
import Signup from './Screens/signup';
import Login from './Screens/login';

function App() {


  return (
    
    <div>

     
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      
    </Routes>

    </div>

    
  );
}

export default App;
