import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar'
import Footer from './component/footer'
import Home from './pages/home'
import Shop from './pages/shop'
import Categories from './pages/categories'
import Deals from './pages/deals'
import Contact from './pages/contact'
import Cart from './pages/cart'
import NotFound from './pages/notFound'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
