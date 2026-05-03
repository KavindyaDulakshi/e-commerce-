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
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-amber-300 text-slate-950 rounded-md px-3 py-2">Skip to content</a>
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          	<Route path="/login" element={<Login />} />
          	<Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
