// src/components/FavoritesSidebar.jsx
import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { X } from "lucide-react";

const FavoritesSidebar = () => {
  const { favorites, isOpen, closeFavorites, removeFromFavorites } = useContext(FavoritesContext);

  return (
    <>
      {/* Overlay sombre */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeFavorites}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 z-50 p-4 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Mes Favoris ❤️</h2>
          <button onClick={closeFavorites}>
            <X />
          </button>
        </div>

        {favorites.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">Aucun favori pour le moment.</p>
        ) : (
          <div className="space-y-4">
            {favorites.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.nom} className="w-12 h-12 object-cover rounded" />
                  <div>
                    <p className="font-medium">{item.nom}</p>
                    <p className="text-sm text-gray-500">{item.prix} €</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromFavorites(item.id)}
                  className="text-red-500 text-sm"
                >
                  Retirer
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FavoritesSidebar;
