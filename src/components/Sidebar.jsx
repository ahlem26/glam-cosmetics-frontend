import React from "react";

export default function Sidebar({categories, setShowCategories, showCategories, setCategorieActive, categorieActive, setShowPrice, showPrice, minPrix, maxPrix, prixMax, setPrixMax, resetFiltres}) {

    return (
        <div>
            {/* Sidebar gauche */}
            <aside className="md:col-span-1 p-4 rounded-lg space-y-6">
                <h1 className="text-3xl">Filtrer par</h1>
                {/* 🔹 Séparateur gris */}
                <div className="border-t border-gray-300 my-6"></div>
                {/* FILTRER PAR */}
                <div>
                    <button
                        className="flex justify-between items-center w-full text-lg"
                        onClick={() => setShowCategories(!showCategories)}
                    >
                        TOUT VOIR
                        <span>{showCategories ? "-" : "+"}</span>
                    </button>
                    {showCategories && (
                        <ul className="mt-2 space-y-2">
                            {categories.map(cat => (
                                <li key={cat}>
                                    <button
                                        onClick={() => setCategorieActive(cat)}
                                        className={`block text-left text-sm ${categorieActive === cat
                                            ? "font-bold"
                                            : "hover:text-gray-500"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* 🔹 Séparateur gris */}
                <div className="border-t border-gray-300 my-6"></div>

                {/* PRIX */}
                <div>
                    <button
                        className="flex justify-between items-center w-full text-lg"
                        onClick={() => setShowPrice(!showPrice)}
                    >
                        Prix
                        <span>{showPrice ? "-" : "+"}</span>
                    </button>
                    {showPrice && (
                        <div className="mt-4">
                            <input
                                type="range"
                                min={minPrix}
                                max={maxPrix}
                                step="1"
                                value={prixMax}
                                onChange={(e) => setPrixMax(Number(e.target.value))}
                                className="w-full accent-black"
                            />
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>{minPrix} €</span>
                                <span>{maxPrix} €</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* 🔹 Séparateur gris */}
                <div className="border-t border-gray-300 my-6"></div>

                {/* Bouton Reset */}
                <button
                    onClick={resetFiltres}
                    className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded"
                >
                    Réinitialiser filtres
                </button>
            </aside>
        </div>
    )
}
