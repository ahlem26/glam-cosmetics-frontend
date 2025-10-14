import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, MapPin, User, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { useSearch } from "../context/SearchContext";

function Navbar() {
    const { cart, toggleCart } = useContext(CartContext);

    const { toggleFavorites } = useFavorites();

    const { openSearch } = useSearch();

    return (
        <header className="w-full shadow-md bg-gradient-to-b from-[#e8ad9a] via-white to-white">
            {/* 🔹 Topbar */}
            <div className="text-sm text-black py-6 px-9">
                <div className="grid grid-cols-3 items-center w-full">

                    {/* Gauche */}
                    <div className="space-x-4 flex">
                        <Link to="/livraison"><span>Livraison & retours</span></Link>
                        <Link to="/service-client"><span>Service client</span></Link>
                    </div>

                    {/* Centre */}
                    <div className="text-center flex-1">
                        <p>
                            -15 % sur le premier achat lors de <span className="underline">l'inscription</span>
                        </p>
                    </div>

                    {/* Droite */}
                    <div className="flex justify-end">
                        <Link to="/login" className="flex items-center space-x-1 hover:text-gray-700">
                            <User size={18} /> <span>Connexion</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-white grid grid-cols-3 items-center border border-black ml-10 mr-10">

                {/* Colonne 1 → Loupe */}
                <div className="flex items-center justify-center py-8">
                    <button
                        onClick={openSearch}
                        className="rounded-full p-2 hover:bg-gray-100 transition"
                    >
                        <Search size={22} className="text-black" />
                    </button>
                </div>

                {/* Logo (colonne 2, centré) */}
                <div className="flex justify-center py-8 border-r border-l border-black">
                    <Link to="/"><h1 className="text-7xl text-black">G'LAM</h1></Link>
                </div>

                {/* Actions (colonne 3, à droite) */}
                <div className="flex justify-center items-center space-x-6 text-black py-8">
                    <Link onClick={toggleFavorites} className="flex items-center space-x-1">
                        <Heart size={20} /> <span className="hidden underline md:inline">Favoris</span>
                    </Link>
                    {/* 🔹 Panier */}
                    <button onClick={toggleCart} className="relative flex items-center space-x-1">
                        <ShoppingBag size={22} />
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#e8ad9a] text-white text-xs rounded-full px-2">
                                {cart.length}
                            </span>
                        )}
                    </button>
                    <Link to="/adresses" className="flex items-center space-x-1">
                        <MapPin size={20} /> <span className="hidden underline md:inline">Adresses</span>
                    </Link>
                </div>
            </div>

            {/* 🔹 Categories Menu */}
            <nav className="bg-white text-black">
                <ul className="flex justify-center space-x-6 py-3 text-sm font-medium">
                    <li>
                        <NavLink
                            to="/toutvoir"
                            className={({ isActive }) =>
                                isActive ? "text-[#e8ad9a]" : "hover:text-[#e8ad9a]"
                            }
                        >
                            TOUT VOIR
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/nouveautes"
                            className={({ isActive }) =>
                                isActive ? "text-[#e8ad9a]" : "hover:text-[#e8ad9a]"
                            }
                        >
                            NOUVEAUTÉS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/visage"
                            className={({ isActive }) =>
                                isActive ? "text-[#e8ad9a]" : "hover:text-[#e8ad9a]"
                            }
                        >
                            VISAGE
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/accessoires"
                            className={({ isActive }) =>
                                isActive ? "text-[#e8ad9a]" : "hover:text-[#e8ad9a]"
                            }
                        >
                            ACCESSOIRES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/parfums"
                            className={({ isActive }) =>
                                isActive ? "text-[#e8ad9a]" : "hover:text-[#e8ad9a]"
                            }
                        >
                            PARFUMS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/cheveux"
                            className={({ isActive }) =>
                                isActive ? "text-[#e8ad9a]" : "hover:text-[#e8ad9a]"
                            }
                        >
                            CHEVEUX
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/maquillage"
                            className={({ isActive }) =>
                                isActive ? "text-[#e8ad9a]" : "hover:text-[#e8ad9a]"
                            }
                        >
                            MAQUILLAGE
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/corps"
                            className={({ isActive }) =>
                                isActive ? "text-[#e8ad9a]" : "hover:text-[#e8ad9a]"
                            }
                        >
                            CORPS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/promos"
                            className={({ isActive }) =>
                                isActive ? "text-[#e8ad9a]" : "hover:text-[#e8ad9a]"
                            }
                        >
                            PROMOS ET OFFRES
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* 🔹 Promo Banner */}
            <div className="bg-black text-center py-2 text-sm font-medium text-white">
                Promo du weekend ! Jusqu'à -50 % + livraison gratuite pour toutes les commandes, avec le code VACANCES123
            </div>
        </header>
    );
}

export default Navbar;
