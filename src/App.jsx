import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Academics from "./pages/Academics"
import Teachers from "./pages/Teachers"
import Announcements from "./pages/Announcements"
import Gallery from "./pages/Gallery"
import Alumni from "./pages/Alumni"
import Contact from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
