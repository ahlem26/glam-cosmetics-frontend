import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ToutVoir from "./pages/ToutVoir";
import ProduitDetail from "./pages/ProduitDetail";
import Nouveautes from "./pages/Nouveautes";
import Visage from "./pages/Visage";
import Accessoires from "./pages/Accessoires";
import Parfums from "./pages/Parfums";
import Cheveux from "./pages/Cheveux";
import Maquillage from "./pages/Maquillage";
import Corps from "./pages/Corps";
import Promos from "./pages/Promos";
import AproposPage from "./pages/AproposPage";
import ServiceClient from "./pages/ServiceClient";
import Adresses from "./pages/Adresses";
import LivraisonRetours from "./pages/LivraisonEtRetours";
import TermesConditions from "./pages/TermesConditions";
import MoyensPaiement from "./pages/MoyensPaiement";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueCookies from "./pages/PolitiqueCookies";
import CartSidebar from "./components/CartSidebar";
import CartPage from "./pages/CartPage";
import FavoritesSidebar from "./components/FavoritesSidebar";
import SearchSidebar from "./components/SearchSidebar";

function App() {
  return (
    <Router>
      <Navbar />
      <CartSidebar />
      <FavoritesSidebar />
      <SearchSidebar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toutvoir" element={<ToutVoir />} />
          <Route path="/produit/:id" element={<ProduitDetail />} />
          <Route path="/nouveautes" element={<Nouveautes />} />
          <Route path="/visage" element={<Visage />} />
          <Route path="/accessoires" element={<Accessoires />} />
          <Route path="/parfums" element={<Parfums />} />
          <Route path="/cheveux" element={<Cheveux />} />
          <Route path="/maquillage" element={<Maquillage />} />
          <Route path="/corps" element={<Corps />} />
          <Route path="/promos" element={<Promos />} />
          <Route path="/apropos" element={<AproposPage />} />
          <Route path="/service-client" element={<ServiceClient />} />
          <Route path="/adresses" element={<Adresses />} />
          <Route path="/livraison" element={<LivraisonRetours />} />
          <Route path="/conditions" element={<TermesConditions />} />
          <Route path="/paiement" element={<MoyensPaiement />} />
          <Route path="/mentions" element={<MentionsLegales />} />
          <Route path="/cookies" element={<PolitiqueCookies />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
