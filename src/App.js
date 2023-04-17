// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Aboutus from './Components/Aboutus/Aboutus';
import Services from './Components/Services/Services';


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='#Aboutus' element={<Aboutus/>}/>
   <Route path='#Services' element={<Services/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
