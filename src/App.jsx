import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { CartContextProvider } from "./context/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
