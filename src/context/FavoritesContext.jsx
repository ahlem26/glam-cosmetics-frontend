// src/context/FavoritesContext.jsx
import { createContext, useContext } from "react";

export const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
