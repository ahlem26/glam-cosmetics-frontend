import React, { useState, useMemo, useEffect } from "react";
import { getProduits } from "../api/api";
import Hero from "../components/Hero";
import Trierpar from "../components/Trierpar";
import Sidebar from "../components/Sidebar";
import Grilleproduits from "../components/Grilleproduits";
import Pagination from "../components/Pagination";

const categories = [
    "Tout", "Visage", "Accessoires", "Parfums", "Cheveux",
    "Maquillage", "Corps", "Promos et offres", "Nouveautés", "Meilleures ventes"
];

export default function ToutVoir() {
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

    const [categorieActive, setCategorieActive] = useState("Tout");
    const [sortOption, setSortOption] = useState("trierpar");
    const [prixMax, setPrixMax] = useState(0);
    const [showCategories, setShowCategories] = useState(true);
    const [showPrice, setShowPrice] = useState(true);
    const [openSort, setOpenSort] = useState(false);
    const [pageActuelle, setPageActuelle] = useState(1);
    const produitsParPage = 8;

    // ✅ Calcul min et max automatique
    const { minPrix, maxPrix } = useMemo(() => {
        const allPrices = produits.map(p => p.promo ? p.promoPrix : p.prix);
        return {
            minPrix: allPrices.length ? Math.min(...allPrices) : 0,
            maxPrix: allPrices.length ? Math.max(...allPrices) : 0,
        };
    }, [produits]);

    useEffect(() => {
        setPrixMax(maxPrix);
    }, [maxPrix]);

    const resetFiltres = () => {
        setCategorieActive("Tout");
        setPrixMax(maxPrix);
        setSortOption("trierpar");
    };

    // ✅ Filtrage par catégorie
    const produitsFiltres = produits.filter(p => {
        if (categorieActive === "Tout") return true;
        if (categorieActive === "Promos et offres") return p.promo;
        if (categorieActive === "Nouveautés") return p.nouveau || new Date(p.date) > new Date("2025-09-15");
        if (categorieActive === "Meilleures ventes") return p.ventes && p.ventes > 200;
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
            <Hero image="/images/c837a6_485c12bc527e4b2db81fc1417bea4daf~mv2.avif" titre="TOUT VOIR" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-65">
                <Sidebar
                    categories={categories}
                    setShowCategories={setShowCategories}
                    showCategories={showCategories}
                    setCategorieActive={setCategorieActive}
                    categorieActive={categorieActive}
                    setShowPrice={setShowPrice}
                    showPrice={showPrice}
                    minPrix={minPrix}
                    maxPrix={maxPrix}
                    prixMax={prixMax}
                    setPrixMax={setPrixMax}
                    resetFiltres={resetFiltres}
                />

                <main className="md:col-span-3">
                    <Trierpar
                        setOpenSort={setOpenSort}
                        openSort={openSort}
                        sortOption={sortOption}
                        setSortOption={setSortOption}
                    />

                    <Grilleproduits
                        produitsPage={produitsPage}
                        loading={loading}
                        error={error}
                    />

                    <Pagination
                        setPageActuelle={setPageActuelle}
                        pageActuelle={pageActuelle}
                        totalPages={totalPages}
                    />
                </main>
            </div>
        </div>
    );
}
