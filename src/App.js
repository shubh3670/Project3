import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Brief from "./Pages/Brief";
import Project from "./Pages/Project";
import { BrowserRouter as Router, Routes, Route ,Switch,useLocation} from 'react-router-dom';
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
    
       <AnimatedRoutes/>
      </div>
    </Router>
  );
}

export default App;
