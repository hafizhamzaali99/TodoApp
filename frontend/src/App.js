import './App.css';
import NavBar from './Components/NavBar';
import ToDo from './Components/ToDo';
// import Check from './Components/Check'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Login';
import SignUp from './Components/SignUp';

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route  path='/' element={<Item />}/>
          <Route  path='/login' element={<Login />}/>
          <Route  path='/signup' element={<SignUp />}/>
        </Routes>
      </Router>

    </div>

  );
}
const Item =()=>{
  return(
    <div className='container'>
      <ToDo />
    </div>
  )
}

export default App;
