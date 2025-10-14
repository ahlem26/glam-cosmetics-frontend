// src/context/FavoritesProvider.jsx
import React, { useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // ➕ Ajouter aux favoris
  const addToFavorites = (product) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev; // déjà ajouté
      return [...prev, product];
    });
  };

  // ❌ Retirer un favori
  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔄 Ouvrir / fermer la sidebar
  const toggleFavorites = () => setIsOpen((prev) => !prev);
  const closeFavorites = () => setIsOpen(false);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isOpen,
        toggleFavorites,
        closeFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
