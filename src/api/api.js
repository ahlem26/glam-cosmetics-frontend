import axios from "axios";

// ✅ Crée une instance Axios configurée pour ton backend
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL_LOCAL, // par sécurité
    withCredentials: true,
});

// ==========================
// 🔹 PRODUITS
// ==========================

// Obtenir tous les produits
export const getProduits = async () => {
    const res = await api.get("/products");
    console.log("✅ Produits chargés :", res.data);
    return res.data;
};

// Ajouter un produit
export const addProduit = async (produitData) => {
    const res = await api.post("/products", produitData);
    return res.data;
};

// Obtenir un produit par ID
export const getProduitById = async (id) => {
    const res = await api.get(`/products/${id}`);
    return res.data;
};

// Supprimer un produit
export const deleteProduit = async (id) => {
    const res = await api.delete(`/products/${id}`);
    return res.data;
};

export default api;
