import React from 'react'
import { Link } from "react-router-dom";

export default function Grilleproduits({ produitsPage }) {
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
