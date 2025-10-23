import React, { useState, useMemo, useEffect } from "react";
import { getProduits } from "../api/api";
import Hero from "../components/Hero";
import Trierpar from "../components/Trierpar";
import Sidebar from "../components/Sidebar";
import Grilleproduits from "../components/Grilleproduits";
import Pagination from "../components/Pagination";

const categories = [
    "Tout", "Promos et offres", "Nouveautés", "Meilleures ventes"
];

export default function Maquillage() {
    const [produits, setProduits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                setLoading(true);
                const data = await getProduits();

                // Vérification du type de réponse
                if (Array.isArray(data)) {
                    setProduits(data);
                } else if (data.products && Array.isArray(data.products)) {
                    setProduits(data.products);
                } else {
                    console.error("⚠️ Format de données inattendu :", data);
                    setError("Les données reçues ne sont pas valides");
                }
            } catch (err) {
                console.error("Erreur lors du chargement des produits :", err);
                setError("Impossible de charger les produits");
            } finally {
                setLoading(false);
            }
        };

        fetchProduits();
    }, []);

    // 🔹 On filtre les produits de la catégorie "Visage"
    const produitsMaquillage = useMemo(() => {
        return produits.filter((produit) => produit.categorie === "Maquillage");
    }, [produits]);

    const [categorieActive, setCategorieActive] = useState("Tout");
    const [sortOption, setSortOption] = useState("trierpar");
    const [prixMax, setPrixMax] = useState(0);

    // états pour accordion
    const [showCategories, setShowCategories] = useState(true);
    const [showPrice, setShowPrice] = useState(true);

    // ✅ menu "Trier par"
    const [openSort, setOpenSort] = useState(false);

    const [pageActuelle, setPageActuelle] = useState(1);
    const produitsParPage = 8;

    // ✅ Calcul min et max automatique
    const { minPrix, maxPrix } = useMemo(() => {
        const allPrices = produitsMaquillage.map(p => p.promo ? p.promoPrix : p.prix);
        return {
            minPrix: Math.min(...allPrices),
            maxPrix: Math.max(...allPrices),
        };
    }, [produitsMaquillage]);

    // initialisation prix max
    useEffect(() => {
        setPrixMax(maxPrix);
    }, [maxPrix]);

    // ✅ Réinitialiser filtres
    const resetFiltres = () => {
        setCategorieActive("Tout");
        setPrixMax(maxPrix);
        setSortOption("trierpar");
    };

    // ✅ Filtrage par catégorie
    const produitsFiltres = produitsMaquillage.filter(p => {
        if (categorieActive === "Tout") return true;
        if (categorieActive === "Promos et offres") return p.promo;
        if (categorieActive === "Nouveautés") {
            // On réutilise ta logique ici
            return p.nouveau === true || new Date(p.date) > new Date("2025-09-15");
        }
        // if (categorieActive === "Nouveautés") {
        //     const maintenant = new Date();
        //     const dateProduit = new Date(p.date);
        //     const difference = maintenant - dateProduit;
        //     const unMois = 30 * 24 * 60 * 60 * 1000;
        //     return difference <= unMois;
        // }
        if (categorieActive === "Meilleures ventes") {
            // Produits ayant un grand nombre de ventes
            return p.ventes && p.ventes > 200; // tu peux ajuster le seuil ici (ex: > 100)
        }
        return p.categorie === categorieActive;
    });

    // ✅ Filtrage par prix
    const produitsAvecPrix = produitsFiltres.filter(p => {
        const prix = p.promo ? p.promoPrix : p.prix;
        return prix <= prixMax;
    });

    // ✅ Tri
    const produitsTries = [...produitsAvecPrix].sort((a, b) => {
        switch (sortOption) {
            case "priceLowHigh":
                return (a.promo ? a.promoPrix : a.prix) - (b.promo ? b.promoPrix : b.prix);
            case "priceHighLow":
                return (b.promo ? b.promoPrix : b.prix) - (a.promo ? a.promoPrix : a.prix);
            case "nameAZ":
                return a.nom.localeCompare(b.nom);
            case "nameZA":
                return b.nom.localeCompare(a.nom);
            case "recent":
            default:
                return new Date(b.date) - new Date(a.date);
        }
    });

    // ✅ Pagination
    const indexDernier = pageActuelle * produitsParPage;
    const indexPremier = indexDernier - produitsParPage;
    const produitsPage = produitsTries.slice(indexPremier, indexDernier);
    const totalPages = Math.ceil(produitsTries.length / produitsParPage);

    return (
        <div className="space-y-16">
            {/* 🔹 Hero Section */}
            <Hero image={'/images/c837a6_c068c0299add41ce8ce6173117fcee0c~mv2.avif'} titre={"MAQUILLAGE"} />

            {/* 🔹 Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-65">
                {/* Sidebar gauche */}
                <Sidebar categories={categories} setShowCategories={setShowCategories} showCategories={showCategories} setCategorieActive={setCategorieActive} categorieActive={categorieActive} setShowPrice={setShowPrice} showPrice={showPrice} minPrix={minPrix} maxPrix={maxPrix} prixMax={prixMax} setPrixMax={setPrixMax} resetFiltres={resetFiltres} />

                {/* Produits */}
                <main className="md:col-span-3">
                    {/* 🔹 Trier par customisé */}
                    <Trierpar setOpenSort={setOpenSort} openSort={openSort} sortOption={sortOption} setSortOption={setSortOption} />

                    {/* Grille produits */}
                    <Grilleproduits
                        produitsPage={produitsPage}
                        loading={loading}
                        error={error}
                    />

                    {/* Pagination */}
                    <Pagination setPageActuelle={setPageActuelle} pageActuelle={pageActuelle} totalPages={totalPages} />
                </main>
            </div>
        </div>
    );
}
