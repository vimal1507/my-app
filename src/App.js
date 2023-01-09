import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils-Dark mode";
      // setInterval(()=>{document.title="Textutils is amazing"},1000)
      // setInterval(()=>{document.title="Download textutils"},2000)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils-Light mode";
    }
  };

  return (
    
    <>
     <Router>
        {/* <Navbar/> */}
        <Navbar title="TextUtils" about="AboutUs" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="app-container">
        <Routes>
          <Route path="/about" element={<About />}>
          
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}>
          
          </Route>
        </Routes>
        </div>
        </Router>
    </>
   
  );
 
}

export default App;
