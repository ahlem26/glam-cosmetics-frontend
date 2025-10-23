import React from 'react'
import { Link } from "react-router-dom";

export default function Grilleproduits({ produitsPage, loading, error }) {
    // 🔹 Gestion des états
    if (loading) {
        return (
            <div className="text-center py-10 text-gray-500">
                Chargement des produits...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 py-10">
                {error}
            </div>
        );
    }

    // 🔹 Cas où aucun produit n’est trouvé
    if (!produitsPage || produitsPage.length === 0) {
        return (
            <div className="text-center py-10 text-gray-400">
                Aucun produit trouvé.
            </div>
        );
    }
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {produitsPage.map(prod => (
                <Link
                    to={`/produit/${prod.id}`}
                    key={prod.id}
                >
                    <div key={prod.id} className="relative">
                        {prod.promo && (
                            <span className="bg-[#d3420c] text-white px-3 py-1 text-xs absolute top-0 left-0">Promo</span>
                        )}
                        <img src={prod.image} alt={prod.nom} className="w-full h-55 object-contain" />
                        <h3 className="mt-3">{prod.nom}</h3>
                        {prod.promo ? (
                            <p>
                                <span className="line-through text-gray-400">{prod.prix} €</span>{" "}
                                <span className="text-gray-400">{prod.promoPrix} €</span>
                            </p>
                        ) : (
                            <p className="text-gray-400">{prod.prix} €</p>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    )
}
