import { Route, Routes } from "react-router-dom";
import { About } from './pages/About/About.jsx'
import { HouseDetails } from './pages/HouseDetails/HouseDetails.jsx'
import { Error } from './pages/Error/Error.jsx'
import { Home } from './pages/Home/Home.jsx'


function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/details/:id" element={<HouseDetails />} />
    <Route path="*" element={<Error />} />
  </Routes>
}

export default App;
