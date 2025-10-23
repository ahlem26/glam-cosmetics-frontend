import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white flex flex-col">
                <div className="text-center py-6 border-b border-gray-700">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                </div>
                <nav className="flex-1 p-4 space-y-3">
                    <Link
                        to="/admin"
                        className="block py-2 px-3 rounded hover:bg-gray-700 transition"
                    >
                        Tableau de bord
                    </Link>
                    <Link
                        to="/admin/ajouterproduit"
                        className="block py-2 px-3 rounded hover:bg-gray-700 transition"
                    >
                        Ajouter un produit
                    </Link>
                    <Link
                        to="/admin/produits"
                        className="block py-2 px-3 rounded hover:bg-gray-700 transition"
                    >
                        Liste des produits
                    </Link>
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <button className="w-full bg-red-600 py-2 rounded hover:bg-red-700">
                        Déconnexion
                    </button>
                </div>
            </aside>

            {/* Contenu principal */}
            <main className="flex-1 p-8">
                <h2 className="text-3xl font-bold mb-6">Bienvenue dans le tableau de bord</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Carte statistique */}
                    <div className="bg-white rounded-lg shadow p-6 text-center">
                        <h3 className="text-lg font-semibold mb-2">Produits</h3>
                        <p className="text-2xl font-bold text-blue-600">24</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6 text-center">
                        <h3 className="text-lg font-semibold mb-2">Ventes</h3>
                        <p className="text-2xl font-bold text-green-600">120</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6 text-center">
                        <h3 className="text-lg font-semibold mb-2">Clients</h3>
                        <p className="text-2xl font-bold text-yellow-600">56</p>
                    </div>
                </div>

                {/* Section d'action rapide */}
                <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-4">Actions rapides</h3>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/admin/ajouterproduit"
                            className="bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 transition"
                        >
                            ➕ Ajouter un produit
                        </Link>
                        <Link
                            to="/admin/produits"
                            className="bg-gray-800 text-white px-5 py-3 rounded hover:bg-gray-900 transition"
                        >
                            📦 Gérer les produits
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
