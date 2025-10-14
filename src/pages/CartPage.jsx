import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Trash2 } from "lucide-react";

const CartPage = () => {
  const { cart, setCart, removeFromCart, clearCart } = useContext(CartContext);
  const [promo, setPromo] = useState("");
  const [note, setNote] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [country, setCountry] = useState("Algérie");
  const [postalCode, setPostalCode] = useState("");
  const [livraison, setLivraison] = useState(0);

  // 🔹 Calcul du sous-total
  const subtotal = cart.reduce((acc, item) => acc + item.prix * item.quantity, 0);
  const total = subtotal + livraison;

  // 🔹 Modifier la quantité d’un produit
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // 🔹 Mettre à jour la livraison selon le pays
  const handleUpdateLivraison = () => {
    let frais = 0;
    switch (country) {
      case "Algérie":
        frais = 0;
        break;
      case "France":
        frais = 15;
        break;
      case "Maroc":
        frais = 10;
        break;
      case "Tunisie":
        frais = 8;
        break;
      default:
        frais = 0;
    }
    setLivraison(frais);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 relative">
      <h1 className="text-3xl font-semibold mb-8 text-center text-[#e8ad9a] uppercase">
        Mon panier
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Votre panier est vide.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* 🔹 Liste des produits */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.nom}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">{item.nom}</h3>
                    <p className="text-gray-600">{item.prix.toFixed(2)} €</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* 🔹 Contrôle quantité */}
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="px-2 py-1 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, Number(e.target.value))
                      }
                      className="w-12 text-center border-x outline-none"
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="px-2 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <p className="font-semibold w-16 text-right">
                    {(item.prix * item.quantity).toFixed(2)} €
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-4 flex justify-between">
              <button
                onClick={clearCart}
                className="text-sm text-gray-600 underline hover:text-red-600"
              >
                Vider le panier
              </button>
            </div>

            {/* 🔹 Code promo */}
            <div className="mt-8">
              <label className="block font-medium mb-2">Saisir un code promo</label>
              <div className="flex">
                <input
                  type="text"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  placeholder="Code promo"
                  className="w-full border px-3 py-2 rounded-l-md focus:outline-none"
                />
                <button className="bg-black text-white px-5 rounded-r-md hover:bg-[#e8ad9a] hover:text-black">
                  Appliquer
                </button>
              </div>
            </div>

            {/* 🔹 Ajouter une note */}
            <div className="mt-6">
              <label className="block font-medium mb-2">Ajouter une note</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Ex: livraison à domicile, message au livreur..."
                className="w-full border px-3 py-2 rounded-md focus:outline-none"
                rows="3"
              ></textarea>
            </div>
          </div>

          {/* 🔹 Résumé de la commande */}
          <div className="border rounded-lg p-6 bg-gray-50">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Résumé de la commande
            </h3>

            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)} €</span>
              </div>

              {/* 🔹 Clique ici pour ouvrir la modale */}
              <div
                className="flex justify-between cursor-pointer hover:text-[#e8ad9a] transition"
                onClick={() => setIsModalOpen(true)}
              >
                <span>Estimation de la livraison</span>
                <span>{livraison.toFixed(2)} €</span>
              </div>

              <hr />

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>{total.toFixed(2)} €</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-black text-white py-3 rounded-md hover:bg-[#e8ad9a] hover:text-black transition">
              Paiement
            </button>

            <p className="text-center text-sm text-gray-500 mt-2">
              Paiement sécurisé 💳
            </p>
          </div>
        </div>
      )}

      {/* 🔹 Fenêtre modale pour la livraison */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Sélectionner votre destination
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Pays</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full border px-3 py-2 rounded-md"
                >
                  <option>Algérie</option>
                  <option>France</option>
                  <option>Maroc</option>
                  <option>Tunisie</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Code postal</label>
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="Ex: 16000"
                  className="w-full border px-3 py-2 rounded-md"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Annuler
              </button>
              <button
                onClick={handleUpdateLivraison}
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-[#e8ad9a] hover:text-black"
              >
                Mettre à jour
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
