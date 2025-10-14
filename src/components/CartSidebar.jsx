import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function CartSidebar() {
  const { cart, isOpen, toggleCart, removeFromCart, addToCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + item.prix * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex justify-end backdrop-blur-sm">
      {/* 🔹 Fond semi-transparent */}
      <div
        className="absolute inset-0 bg-black/50 bg-opacity-50"
        onClick={toggleCart}
      ></div>

      {/* 🔹 Panneau latéral */}
      <div className="relative bg-white w-[400px] h-full shadow-2xl p-6 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-2xl font-bold">Panier</h2>
          <button onClick={toggleCart}>
            <X size={24} />
          </button>
        </div>

        {/* Contenu */}
        <div className="flex-1 overflow-y-auto space-y-6">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              Votre panier est vide 😢
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-3 border-b pb-3"
              >
                <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.nom}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">
                    {item.nom}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.prix},00 €
                  </p>

                  {/* 🔹 Contrôle quantité */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        item.quantity > 1 &&
                        addToCart({ ...item, quantity: -1 })
                      }
                      className="border w-6 h-6 flex items-center justify-center rounded"
                    >
                      −
                    </button>
                    <span className="text-gray-700">{item.quantity}</span>
                    <button
                      onClick={() =>
                        addToCart({ ...item, quantity: 1 })
                      }
                      className="border w-6 h-6 flex items-center justify-center rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">
                    {(item.prix * item.quantity).toFixed(2)} €
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-red-500 hover:underline mt-2"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pied du panier */}
        {cart.length > 0 && (
          <div className="mt-6 border-t pt-4 space-y-3">
            <div>
              <label className="text-gray-600 text-sm block mb-1">
                Saisissez un code promo
              </label>
              <input
                type="text"
                placeholder="Ex: PROMO10"
                className="w-full border rounded p-2 text-sm"
              />
            </div>

            <div className="flex justify-between text-lg font-semibold">
              <span>Total estimé</span>
              <span>{total.toFixed(2)} €</span>
            </div>

            <button
              className="w-full bg-orange-600 text-white py-3 rounded-md font-semibold hover:bg-orange-500 transition"
            >
              Page de paiement
            </button>

            <button
              onClick={() => {
                toggleCart();
                navigate("/cart");
              }}
              className="w-full border border-gray-400 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Voir le panier
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
