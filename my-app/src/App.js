import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { HouseDetails } from './pages/HouseDetails/HouseDetails'
import { Error } from './pages/Error/Error'


function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/details" element={<HouseDetails />} />
    <Route path="*" element={<Error />} />
  </Routes>
}

export default App;
