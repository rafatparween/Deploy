import React from 'react';
import Navbar from './pages/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './sections/Footer';
import About from './pages/About';
import Services from './pages/service/Servies';
import PrinterSetupPage from './pages/service/PrinterSetupPage';
import ComputerSetupPage from './pages/service/ComputerSetupPage';
import PrinterFormPage from './pages/service/PrinterFormPage';
import ComputerFormPage from './pages/service/ComputerFormPage';
import ContactPage from './pages/Contact';
import Membership from './pages/Memership';
import Disclaimer from './footersections/Disclaimer';
import PrivacyPolicy from './footersections/PrivacyPolicy';
import ReturnRefundPolicy from './footersections/RefundAndReturn';
import TermsAndConditions from './footersections/TermsAndConditions';
import PrinterProductList from './pages/product/ProductsListing';
import ProductDetail from './pages/product/ProductDetail';
import Cart from './pages/product/Cart';
import CartProvider from './pages/product/CartContext';
import ProductDetailSingle from './pages/product/productDetails';
import PopularServices from './pages/Popularservice';
import Printer from './pages/Printer';
import Mobile from './pages/Mobile';
import Audio from './pages/Audio';
import Tab from './pages/Tab';
import Bestwifi from './pages/Bestwifi';
import Bestcomputer from './pages/Bestcomputer';
import Sprinters from './pages/Sprinters';
import Smobile from './pages/Smobile';
import Stab from './pages/Stab';
import Swifi from './pages/Swifi';
import Saudio from './pages/Saudio';
import Scomputer from './pages/Scomputer';

const App = () => {
  return (
    
    
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/printersetup" element={<PrinterSetupPage />} />
          <Route path="/computersetup" element={<ComputerSetupPage />} />
          <Route path="/printerformPage" element={<PrinterFormPage />} />
          <Route path="/computerFormPage" element={<ComputerFormPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/product" element={<PrinterProductList />} />
          <Route path="/product" element={<PrinterProductList />} />
          <Route path="/productdetail/:productID" element={<ProductDetail />} />
          <Route path="/productdetails/:productID" element={<ProductDetailSingle />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart" element={<Cart />} />

          {/* Popular services */}
          <Route path="/" element={<PopularServices />} />
          <Route path="/service/Printer" element={<Printer />} />
          <Route path="/service/Tab" element={<Tab />} />
          <Route path="/service/Audio" element={<Audio />} />
          <Route path="/service/Mobile" element={<Mobile />} />
          <Route path="/service/Bestwifi" element={<Bestwifi />} />
          <Route path="/service/Bestcomputer" element={<Bestcomputer />} />
          {/* Slider Dropdown */}
          <Route path="/Sprinters" element={<Sprinters />} />
          <Route path="/Swifi" element={<Swifi />} />
          <Route path="/Stab" element={<Stab />} />
          <Route path="/Smobile" element={<Smobile />} />
          <Route path="/Scomputer" element={<Scomputer />} />
          <Route path="/Saudio" element={<Saudio />} />
          


          {/* Footer Sections */}
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/return-refundpolicy" element={<ReturnRefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
        </Routes>

        <Footer />
      </CartProvider>
    </Router>
  );
};

export default App;


