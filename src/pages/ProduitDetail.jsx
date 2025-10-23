import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProduits } from "../api/api";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { CartContext } from "../context/CartContext"; // ✅ Import direct du contexte
import { FavoritesContext } from "../context/FavoritesContext";

export default function ProduitDetail() {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        setLoading(true);
        const data = await getProduits();

        // Vérification du type de réponse
        if (Array.isArray(data)) {
          setProduits(data);
        } else if (data.products && Array.isArray(data.products)) {
          setProduits(data.products);
        } else {
          console.error("⚠️ Format de données inattendu :", data);
          setError("Les données reçues ne sont pas valides");
        }
      } catch (err) {
        console.error("Erreur lors du chargement des produits :", err);
        setError("Impossible de charger les produits");
      } finally {
        setLoading(false);
      }
    };

    fetchProduits();
  }, []);

  const { id } = useParams();
  const produitIndex = produits.findIndex((p) => p.id === parseInt(id));
  const produit = produits[produitIndex];
  const navigate = useNavigate();

  const [quantite, setQuantite] = useState(1);
  const [activeSection, setActiveSection] = useState(null);

  // ✅ Utilisation du contexte
  const { addToCart, toggleCart } = useContext(CartContext);

  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  // 🔹 Vérifie si ce produit est déjà dans les favoris
  const isFavorite = favorites.some((item) => item.id === produit.id);

  // 🔹 Fonction au clic
  const handleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(produit.id);
    } else {
      addToFavorites(produit);
    }
  };

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  if (!produit) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-10">
        <h2 className="text-2xl font-semibold mb-4">Produit introuvable</h2>
        <Link
          to="/toutvoir"
          className="text-orange-600 hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Retour à la boutique
        </Link>
      </div>
    );
  }

  const produitPrecedent = produits[produitIndex - 1];
  const produitSuivant = produits[produitIndex + 1];

  // 🔹 🧠 1️⃣ Gérer chargement
  if (loading) {
    return (
      <div className="py-40 flex flex-col items-center justify-center space-y-4">
        {/* Squelettes (loading skeletons) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-[80%]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-gray-100 rounded-2xl h-64 shadow-sm"
            ></div>
          ))}
        </div>
        <p className="text-gray-500 text-lg">Chargement des produits...</p>
      </div>
    );
  }

  // 🔹 🧠 2️⃣ Gérer erreur
  if (error) {
    return (
      <div className="text-center text-red-500 py-40 text-lg font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="px-20 py-12">
      {/* 🔹 Fil d’Ariane + navigation */}
      <div className="flex justify-between mb-10">
        <div className="text-black">
          <Link to="/" className="hover:underline">
            Accueil
          </Link>{" "}
          /{" "}
          <Link to="/toutvoir" className="hover:underline">
            TOUT VOIR
          </Link>{" "}
          / <span className="text-gray-500">{produit.nom}</span>
        </div>

        <div className="flex items-center gap-4">
          {produitPrecedent ? (
            <button
              onClick={() => navigate(`/produit/${produitPrecedent.id}`)}
              className="flex items-center text-black gap-1 hover:underline"
            >
              <ArrowLeft size={18} /> Précédent
            </button>
          ) : (
            <span className="text-gray-400 flex items-center gap-1">
              <ArrowLeft size={18} /> Précédent
            </span>
          )}

          <span className="text-black">|</span>

          {produitSuivant ? (
            <button
              onClick={() => navigate(`/produit/${produitSuivant.id}`)}
              className="flex items-center text-black gap-1 hover:underline"
            >
              Suivant <ArrowRight size={18} />
            </button>
          ) : (
            <span className="text-gray-400 flex items-center gap-1">
              Suivant <ArrowRight size={18} />
            </span>
          )}
        </div>
      </div>

      {/* 🔹 Contenu principal */}
      <div className="flex gap-10 items-start">
        {/* Image fixe */}
        <div className="bg-gray-100 w-[500px] h-[670px] flex items-center justify-center flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={produit.image}
            alt={produit.nom}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Détails produit */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-3">{produit.nom}</h1>
          <p className="text-gray-700 text-lg mb-6">
            SKU : {produit.sku || "0001"}
          </p>

          {produit.promo ? (
            <div className="mb-4">
              <span className="line-through text-gray-500 mr-2 text-lg">
                {produit.prix},00 €
              </span>
              <span className="text-2xl font-semibold text-orange-600">
                {produit.promoPrix},00 €
              </span>
            </div>
          ) : (
            <div className="mb-4">
              <span className="text-2xl font-semibold text-gray-800">
                {produit.prix},00 €
              </span>
            </div>
          )}

          {/* 🔹 Quantité */}
          <div className="mb-6">
            <label className="block text-gray-800 mb-2 text-lg">Quantité*</label>
            <div className="flex items-center justify-around border border-gray-300 rounded-md px-2 py-1 w-28">
              <button
                type="button"
                onClick={() => setQuantite((prev) => Math.max(1, prev - 1))}
                disabled={quantite === 1}
                className={`w-8 h-8 flex items-center justify-center text-2xl transition ${quantite === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-black cursor-pointer"
                  }`}
              >
                –
              </button>
              <p className="text-lg select-none">{quantite}</p>
              <button
                type="button"
                onClick={() => setQuantite((prev) => prev + 1)}
                className="w-8 h-8 flex items-center justify-center text-2xl text-black cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* 🔹 Ajouter au panier + Favori */}
          <div className="flex items-center gap-3 mb-12">
            <button
              onClick={() => {
                addToCart({ ...produit, quantity: quantite }); // 🧠 Ajout au panier
                toggleCart();
              }}
              className="bg-orange-600 text-black py-3 px-6 font-semibold rounded-md hover:bg-orange-500 transition">
              Ajouter au panier
            </button>
            <button
              onClick={handleFavorite}
              type="button"
              className={"p-3 h-12 w-12 border rounded-md flex items-center justify-center transition border-orange-600 hover:bg-orange-50"}
            >
              <Heart
                className="w-6 h-6"
                color={isFavorite ? "#ea580c" : "#ea580c"} // couleur lucide
                fill={isFavorite ? "#ea580c" : "white"} // cœur plein si favori
              />
            </button>
          </div>

          {/* 🔹 Sections extensibles */}
          <div className="mt-10 space-y-8">
            {/* Infos d'article */}
            <div>
              <button
                className="flex justify-between items-center w-full text-2xl font-bold mb-3"
                onClick={() => toggleSection("infos")}
              >
                INFOS D'ARTICLE
                <span>{activeSection === "infos" ? "−" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === "infos" ? "max-h-[300px]" : "max-h-0"
                  }`}
              >
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  Détails de l'article. C'est l'espace idéal pour présenter les
                  caractéristiques de votre article : taille, matière, instructions
                  de lavage, etc. Vous pouvez également expliquer ce qui rend votre
                  article spécial et comment vos clients peuvent en bénéficier.
                </p>
              </div>
            </div>

            {/* Politique d'échange */}
            <div>
              <button
                className="flex justify-between items-center w-full text-2xl font-bold mb-3"
                onClick={() => toggleSection("echange")}
              >
                POLITIQUE D'ÉCHANGE ET DE REMBOURSEMENT
                <span>{activeSection === "echange" ? "−" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === "echange" ? "max-h-[200px]" : "max-h-0"
                  }`}
              >
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  Les articles peuvent être échangés ou remboursés dans un délai de
                  14 jours après réception, à condition qu'ils soient dans leur état
                  d'origine.
                </p>
              </div>
            </div>

            {/* Politique de livraison */}
            <div>
              <button
                className="flex justify-between items-center w-full text-2xl font-bold mb-3"
                onClick={() => toggleSection("livraison")}
              >
                POLITIQUE DE LIVRAISON
                <span>{activeSection === "livraison" ? "−" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === "livraison" ? "max-h-[200px]" : "max-h-0"
                  }`}
              >
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  La livraison est effectuée sous 3 à 7 jours ouvrés selon la
                  destination. Des frais supplémentaires peuvent s’appliquer pour les
                  livraisons internationales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Description finale */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Description de l'article</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          {produit.description ||
            "C'est l'espace idéal pour présenter les caractéristiques de votre article : taille, matière, instructions de lavage, etc."}
        </p>
      </div>
    </div>
  );
}
