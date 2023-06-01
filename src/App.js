import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Body />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
