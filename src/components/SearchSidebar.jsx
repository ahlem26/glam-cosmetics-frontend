import React, { useState, useMemo, useEffect } from "react";
import { X, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { getProduits } from "../api/api";

const SearchSidebar = () => {
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

  const { isOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState("");

  // 🔍 Filtrage dynamique selon la recherche
  const filteredProduits = useMemo(() => {
    const q = query.toLowerCase();
    if (!q.trim()) return [];
    return produits.filter(
      (p) =>
        p.nom.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.categorie.toLowerCase().includes(q)
    );
  }, [query, produits]);

  // 🔝 Produits les plus populaires
  const topProduits = useMemo(
    () => [...produits].sort((a, b) => b.ventes - a.ventes).slice(0, 6),
    [produits]
  );

  if (!isOpen) return null;

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
    <>
      {/* Overlay flou */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={closeSearch}
      />

      {/* Fenêtre principale plein écran */}
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto transition-all duration-300">

        <div className="p-6 max-w-6xl mx-auto space-y-8">
          {/* Barre de recherche */}
          <div className="flex items-center gap-3 border-b border-gray-300 pb-3">
            <Search className="w-6 h-6 text-orange-600" />
            <input
              type="text"
              placeholder="Rechercher un produit, une catégorie..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full outline-none text-gray-700 text-lg"
            />
            <button
              className="bg-orange-600 text-white py-3 px-8 rounded-full hover:bg-orange-700 transition"
              onClick={closeSearch}
            >
              Fermer
            </button>
          </div>

          {/* Résultats de recherche */}
          {query ? (
            filteredProduits.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProduits.map((p) => (
                  <Link
                    key={p.id}
                    to={`/produit/${p.id}`}
                    onClick={closeSearch}
                    className="border rounded-xl p-4 hover:shadow-lg transition relative"
                  >
                    {p.promo && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Promo
                      </span>
                    )}
                    <img
                      src={p.image}
                      alt={p.nom}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h4 className="mt-3 font-semibold text-gray-800">
                      {p.nom}
                    </h4>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {p.description}
                    </p>
                    {p.promo ? (
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-gray-400 line-through text-sm">
                          {p.prix.toFixed(2)} €
                        </span>
                        <span className="text-orange-600 font-semibold">
                          {p.promoPrix.toFixed(2)} €
                        </span>
                      </div>
                    ) : (
                      <p className="text-orange-600 font-semibold mt-2">
                        {p.prix.toFixed(2)} €
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-10">
                Aucun produit trouvé.
              </p>
            )
          ) : (
            <>
              {/* 🔥 Articles populaires */}
              <h3 className="text-lg font-semibold text-gray-700">
                Articles les plus populaires
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {topProduits.map((produit) => (
                  <Link
                    to={`/produit/${produit.id}`}
                    key={produit.id}
                    onClick={closeSearch}
                    className="border rounded-xl p-4 hover:shadow-lg transition relative"
                  >
                    {produit.promo && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Promo
                      </span>
                    )}
                    <img
                      src={produit.image}
                      alt={produit.nom}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h4 className="mt-3 font-semibold text-gray-800">
                      {produit.nom}
                    </h4>
                    {produit.promo ? (
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 line-through text-sm">
                          {produit.prix.toFixed(2)} €
                        </span>
                        <span className="text-orange-600 font-semibold">
                          {produit.promoPrix.toFixed(2)} €
                        </span>
                      </div>
                    ) : (
                      <p className="text-gray-700 font-medium">
                        {produit.prix.toFixed(2)} €
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchSidebar;
