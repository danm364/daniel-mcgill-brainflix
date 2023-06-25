import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './App.scss';
import { useEffect } from "react";


function App() {

  
 
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/videos" element={<HomePage />}/>
            <Route path="/videos/:id" element={<HomePage  />}></Route>
            <Route path="/upload" element={<UploadPage/>}></Route>
            
          </Routes>
          
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
