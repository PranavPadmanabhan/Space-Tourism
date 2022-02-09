import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home';
import Destination from './screens/destination/Destination';
import NavbarContextProvider from './components/navbar/NavbarContext';
import Crew from './screens/crew/Crew';



function App() {
  return (
    <Router>
      <NavbarContextProvider>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/destination"} element={<Destination />} />
          <Route path={"/crew"} element={<Crew />} />
        </Routes>
      </NavbarContextProvider>
    </Router>
  );
}

export default App;
