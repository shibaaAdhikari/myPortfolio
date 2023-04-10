import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button';
import Cards from './Components/Cards/Cards';
// import ImageI from "../public/Assests/react.png"


function App() {
  return (
    <div className="App">
     <Button text="SignUp"></Button>
     <Cards title="ui/ux" descriptions="hello,world how are you"></Cards>
    </div>
  );
}

export default App;
