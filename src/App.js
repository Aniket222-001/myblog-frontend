import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Blogupload from './Components/Blogupload';
import Blogpage from './Components/Blogpage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Blogupload' element={<Blogupload/>}></Route>
        <Route path='/Blogpage/:id' element={<Blogpage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
