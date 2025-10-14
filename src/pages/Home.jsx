import { Link } from "react-router-dom";
import produits from "../data/Produits";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

function Home() {
    const nouveautesRef = useRef(null);
  const promosRef = useRef(null);

    // 🔹 Fonctions de défilement
  const scrollLeft = (ref) => ref.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = (ref) => ref.current.scrollBy({ left: 300, behavior: "smooth" });


    // 🆕 Trier les produits par date décroissante (plus récents d'abord)
    const nouveautes = [...produits]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 8); // afficher les 8 derniers produits
    return (
        <div className="space-y-16">

            {/* 🔹 Hero Section */}
            <section
                className="relative bg-cover bg-center text-start text-black py-20"
                style={{ backgroundImage: "url('images/c837a6_4442b6892e4b4e44babd8a05468d3a82~mv2.jpg')" }}
            >
                <div className="pl-40">
                    <h1 className="text-7xl font-extrabold">RAVIVEZ <br /> VOTRE PEAU</h1>
                    <p className="mt-4 text-2xl">
                        NOUVEAU COFFRET HYDRATATION, TOUT LE <br /> NÉCESSAIRE POUR SUBLIMER VOTRE PEAU
                    </p>
                    <p className="mt-2 text-xl">
                        Réactivez l'hydratation naturelle de votre <br /> peau grâce à l'acide hyaluronique 4D
                        pour <br /> une nutrition maximale de la peau
                    </p>
                    <Link to="/visage">
                        <button
                            onClick={() => window.scrollTo(0, 0)}
                            className="mt-8 px-25 py-2 bg-black text-white hover:bg-orange-600 hover:text-black">
                            ACHETER
                        </button>
                    </Link>
                </div>
                <span className="absolute top-25 right-25 bg-orange-600 text-s w-24 h-24 flex items-center justify-center text-center rounded-full shadow-md -rotate-12">
                    Exclusivité <br /> G'LAM
                </span>
            </section>

            {/* 🔹 Nouveautés */}
            <section className="px-31 relative">
                <h2 className="text-center text-4xl font-bold text-black mb-6">
                    NOUVEAUTÉS
                </h2>

                {/* 🔸 Scroll horizontal */}
                <div className="relative">
                    {/* 👉 Flèche gauche */}
                    <button
                        onClick={() => scrollLeft(nouveautesRef)}
                        className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full z-10 hidden md:block"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Liste défilante */}
                    <div
                        ref={nouveautesRef}
                        className="flex px-2 gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
                    >
                        {nouveautes.map((p) => (
                            <Link
                                key={p.id}
                                to={`/produit/${p.id}`}
                                className="min-w-[230px] bg-white rounded-2xl shadow-md hover:shadow-lg transition relative overflow-hidden snap-center"
                            >
                                {/* Badge promo */}
                                {p.promo && (
                                    <span className="absolute top-3 left-3 bg-[#d3420c] text-white text-xs px-2 py-1 rounded-md font-semibold">
                                        Promo
                                    </span>
                                )}

                                {/* Image */}
                                <img
                                    src={p.image}
                                    alt={p.nom}
                                    className="w-full h-55 object-cover"
                                />

                                {/* Infos produit */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                                        {p.nom}
                                    </h3>
                                    {p.promo ? (
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-sm line-through text-gray-400">
                                                {p.prix.toFixed(2)} €
                                            </span>
                                            <span className="text-orange-600 font-bold">
                                                {p.promoPrix.toFixed(2)} €
                                            </span>
                                        </div>
                                    ) : (
                                        <p className="text-orange-600 font-bold mt-1">
                                            {p.prix.toFixed(2)} €
                                        </p>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* 👉 Flèche droite */}
                    <button
                        onClick={() => scrollRight(nouveautesRef)}
                        className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full z-10 hidden md:block"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
            </section>

            {/* 🔹 Bannière promo parfums */}
            <section className="grid grid-cols-1 md:grid-cols-2">

                {/* 🔹 Bloc gauche avec image fixe */}
                <div
                    className="relative w-full flex justify-center items-center bg-fixed bg-center bg-cover py-45"
                    style={{
                        backgroundImage:
                            "url('/images/c837a6_95b73fe722c840cdad029a9fb3685e9d~mv2.avif')",
                    }}
                >

                    {/* Contenu */}
                    <div className="relative z-10 bg-black p-9 text-white">
                        <h2 className="text-2xl md:text-5xl">-25 % SUR TOUS LES <br /> PARFUMS</h2>
                        <p className="mt-2 text-xl">AVEC LE CODE PROMO <span className="font-bold">PARFUMS123</span></p>
                        <Link to="/parfums">
                            <button
                                onClick={() => window.scrollTo(0, 0)}
                                className="mt-4 bg-black hover:bg-orange-600 px-12 py-2 border border-white hover:border-orange-600 hover:text-black">
                                ACHETER
                            </button>
                        </Link>
                    </div>
                </div>


                {/* Bloc droite */}
                <div
                    className="relative bg-cover bg-center text-black flex flex-col justify-center p-20"
                    style={{ backgroundImage: "url('/images/c837a6_ad20c11dfdcc4aa6b1eb991d37fe6d3f~mv2.avif')" }}
                >
                    <div className="relative z-10">
                        <h2 className="text-xl">PAS ENCORE CLIENT ?</h2>
                        <p className="mt-4 text-5xl font-bold">-15 % SUR <br /> VOTRE PREMIER <br /> ACHAT</p>
                        <button className="mt-6 bg-orange-600 hover:bg-transparent px-8 py-2 border border-orange-600 hover:border-black">
                            S'INSCRIRE
                        </button>
                    </div>
                </div>
            </section>

            {/* 🔹 Section catégories */}
            <section className="px-60 my-12">
                <h2 className="text-center text-4xl font-bold text-black mb-10">
                    CATÉGORIES
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {/* Catégorie avec image */}
                    <Link to="/nouveautes">
                        <div
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex flex-col items-center space-y-2">
                            <div className="w-50 h-65 border border-orange-600 rounded-full overflow-hidden flex items-center justify-center hover:bg-gradient-to-t from-[#e8ad9a] to-white">
                                <img
                                    src="/images/c837a6_9aaabbe899f043edac38d89259741660~mv2.png"
                                    alt="Nouveautés"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="font-medium">NOUVEAUTÉS</span>
                        </div>
                    </Link>

                    <Link to="/visage">
                        <div
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex flex-col items-center space-y-2">
                            <div className="w-50 h-65 border border-orange-600 rounded-full overflow-hidden flex items-center justify-center hover:bg-gradient-to-t from-[#e8ad9a] to-white">
                                <img
                                    src="/images/c837a6_ee80c003786040d7a697316db8d8bd02~mv2.png"
                                    alt="Nouveautés"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="font-medium">VISAGE</span>
                        </div>
                    </Link>

                    <Link to="/accessoires">
                        <div
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex flex-col items-center space-y-2">
                            <div className="w-50 h-65 border border-orange-600 rounded-full overflow-hidden flex items-center justify-center hover:bg-gradient-to-t from-[#e8ad9a] to-white">
                                <img
                                    src="/images/c837a6_b417171c9d5b42fb94b2cabe4599bed8~mv2.png"
                                    alt="Nouveautés"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="font-medium">ACCESSOIRES</span>
                        </div>
                    </Link>

                    <Link to="/parfums">
                        <div
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex flex-col items-center space-y-2">
                            <div className="w-50 h-65 border border-orange-600 rounded-full overflow-hidden flex items-center justify-center hover:bg-gradient-to-t from-[#e8ad9a] to-white">
                                <img
                                    src="/images/c837a6_5b8b880696ae423292b28958536e81de~mv2.png"
                                    alt="Nouveautés"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="font-medium">PARFUMS</span>
                        </div>
                    </Link>

                    <Link to="/cheveux">
                        <div
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex flex-col items-center space-y-2">
                            <div className="w-50 h-65 border border-orange-600 rounded-full overflow-hidden flex items-center justify-center hover:bg-gradient-to-t from-[#e8ad9a] to-white">
                                <img
                                    src="/images/c837a6_4c540ebf2f6c4c338593651fb0f6bdd0~mv2.png"
                                    alt="Nouveautés"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="font-medium">CHEVEUX</span>
                        </div>
                    </Link>

                    <Link to="/maquillage">
                        <div
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex flex-col items-center space-y-2">
                            <div className="w-50 h-65 border border-orange-600 rounded-full overflow-hidden flex items-center justify-center hover:bg-gradient-to-t from-[#e8ad9a] to-white">
                                <img
                                    src="/images/c837a6_168f84dd9dba411191f4198665a3c472~mv2.png"
                                    alt="Nouveautés"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="font-medium">MAQUILLAGE</span>
                        </div>
                    </Link>

                    <Link to="/promos">
                        <div
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex flex-col items-center space-y-2">
                            <div className="w-50 h-65 border border-orange-600 rounded-full overflow-hidden flex items-center justify-center hover:bg-gradient-to-t from-[#e8ad9a] to-white">
                                <img
                                    src="/images/c837a6_1953f9dd91df441fa7fe17a339f59fbb~mv2.jpg"
                                    alt="Nouveautés"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="font-medium">PROMOS ET OFFRES</span>
                        </div>
                    </Link>

                    <Link to="/corps">
                        <div
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex flex-col items-center space-y-2">
                            <div className="w-50 h-65 border border-orange-600 rounded-full overflow-hidden flex items-center justify-center hover:bg-gradient-to-t from-[#e8ad9a] to-white">
                                <img
                                    src="/images/c837a6_a977fab9a1ef4401a6d36a20246801fd~mv2.png"
                                    alt="Nouveautés"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="font-medium">CORPS</span>
                        </div>
                    </Link>
                </div>
            </section>

            {/* 🔹 Les Promos */}
            <section className="px-31 py-12">
                <h2 className="text-center text-4xl font-bold text-black mb-6">LES PROMOS</h2>

                {/* 🔸 Scroll horizontal */}
                <div className="relative">
                    {/* 👉 Flèche gauche */}
                    <button
                        onClick={() => scrollLeft(promosRef)}
                        className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full z-10 hidden md:block"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <div
                        ref={promosRef}
                        className="flex px-2 gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
                    >
                        {produits
                            .filter((p) => p.promo) // 👉 on garde seulement les produits en promo
                            .map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/produit/${p.id}`}
                                    className="min-w-[230px] bg-white rounded-2xl shadow-md hover:shadow-lg transition relative overflow-hidden snap-center"
                                >
                                    {/* Badge promo avec le % de réduction */}
                                    <span className="absolute top-3 left-3 bg-[#d3420c] text-white text-xs px-2 py-1 rounded-md font-semibold">
                                        -{Math.round(((p.prix - p.promoPrix) / p.prix) * 100)}%
                                    </span>

                                    {/* Image */}
                                    <img
                                        src={p.image}
                                        alt={p.nom}
                                        className="w-full h-55 object-cover"
                                    />

                                    {/* Infos produit */}
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 truncate">{p.nom}</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-sm line-through text-gray-400">
                                                {p.prix.toFixed(2)} €
                                            </span>
                                            <span className="text-orange-600 font-bold">
                                                {p.promoPrix.toFixed(2)} €
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                    {/* 👉 Flèche droite */}
                    <button
                        onClick={() => scrollRight(promosRef)}
                        className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full z-10 hidden md:block"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;
