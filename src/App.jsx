import Navbar from './component/navbar'
import Footer from './component/footer'
import ProductListing from './component/productListing'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ProductListing />
      </main>
      <Footer />
    </div>
  )
}

export default App
