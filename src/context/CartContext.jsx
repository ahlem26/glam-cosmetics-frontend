import { createContext, useContext } from "react";

// 🔹 Création du contexte
export const CartContext = createContext();

// 🔹 Hook personnalisé pour simplifier l'utilisation
export const useCart = () => useContext(CartContext);
