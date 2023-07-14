import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home'
import { About } from './pages/About'
import { HouseDetails } from './pages/HouseDetails'
import { Error } from './pages/Error'


function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/details" element={<HouseDetails />} />
    <Route path="/error" element={<Error />} />
  </Routes>
}

export default App;
