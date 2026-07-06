import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Booking from './pages/Booking'
import Gallery from './pages/Gallery'
import ReviewsPage from './pages/ReviewsPage'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/dich-vu" element={<Services />} />
        <Route path="/dat-lich-kham" element={<Booking />} />
        <Route path="/thu-vien-anh" element={<Gallery />} />
        <Route path="/danh-gia-khach-hang" element={<ReviewsPage />} />
        <Route path="/lien-he" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
