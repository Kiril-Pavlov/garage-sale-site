import './App.css';
import {Route, Routes} from "react-router"

//components
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

//pages
import Home from "./pages/Home/index";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import CartPage from "./pages/Cart Page/CartPage";
import Contact from "./pages/Contact/Contact"

function App() {
  const linksList = [
    { linkTo: "/", linkName: "Home" },
    { linkTo: "/about", linkName: "About" },
    { linkTo: "/products", linkName: "Products" },
    { linkTo: "/cartpage", linkName: "Cart" },
    { linkTo: "/contact", linkName: "Contact" },
  ];
  return (
    <div className="App">
      <Header/>
      <Navbar links = {linksList}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cartpage' element={<CartPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer  links = {linksList}/>
      {/* Header component */}
      {/* Navbar component Multiple lists and droipdown menus */}
      {/* Hero carousel component with 3 most sold products */}
{/* Products page. On click detailed product description */}
{/* Cart page */}
{/* Cart component */}
      {/* Random products section */}
      {/* Detailed footer component */}


    </div>
  );
}

export default App;
