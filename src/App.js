import Header from "./components/header/Header";
import Body from "./components/body/Body";
import UploadPage from "./pages/UploadPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          
          <Routes>
            <Route path="/" element={<Body />}/>
            <Route path="/upload" element={<UploadPage/>}></Route>
          </Routes>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
