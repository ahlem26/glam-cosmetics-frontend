import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-12">
            {/* 🔹 Bannière promo */}
            <div
                className="relative bg-cover bg-center text-center py-25 px-4"
                style={{ backgroundImage: "url('/images/84770f_34c9cda2848a4f7dac0dd9ec2c823951~mv2.avif')" }}
            >

                {/* Contenu centré */}
                <div className="relative z-10 text-black">
                    <h2 className="text-xl">TOUTE MAQUILLÉE</h2>
                    <p className="text-6xl font-bold mt-2">JUSQU'À -25 % <br /> SUR LE MAQUILLAGE</p>
                    <p className="text-2sm mt-2">N'attendez pas ! Cette offre ne durera pas. <br /> Visitez notre boutique de maquillage aujourd'hui</p>
                    <Link to="/maquillage">
                        <button
                            onClick={() => window.scrollTo(0, 0)}
                            className="mt-6 px-12 py-3 bg-black text-white hover:bg-orange-600">
                            Acheter
                        </button>
                    </Link>
                </div>
            </div>

            {/* 🔹 Newsletter */}
            <div className="bg-black text-center py-30 px-4">
                <h3 className="text-3xl text-white font-semibold">FAITES PARTIE DE QUELQUE CHOSE DE BEAU</h3>
                <p className="text-white pb-10">Inscrivez-vous à nos e-mails pour les offres VIP et les alertes de nouveaux produits</p>
                <div className="mt-4 flex justify-center px-80">
                    <input
                        type="email"
                        placeholder="Saisissez votre e-mail ici"
                        className="w-full text-white border border-white px-4 py-3 focus:outline-none"
                    />
                    <button className="bg-black text-white border border-white px-6 py-2 hover:bg-orange-600 hover:border-orange-600">
                        Rejoindre
                    </button>
                </div>
            </div>

            {/* 🔹 Liens en colonnes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-black py-12 px-8 md:px-20">
                {/* Boutiques */}
                <div>
                    <h4 className="font-bold mb-8 text-3xl">BOUTIQUES</h4>
                    <ul className="space-y-2">
                        <li><Link onClick={() => window.scrollTo(0, 0)} to="/visage">Visage</Link></li>
                        <li><Link onClick={() => window.scrollTo(0, 0)} to="/cheveux">Cheveux</Link></li>
                        <li><Link onClick={() => window.scrollTo(0, 0)} to="/maquillage">Maquillage</Link></li>
                        <li><Link onClick={() => window.scrollTo(0, 0)} to="/corps">Corps</Link></li>
                        <li><Link onClick={() => window.scrollTo(0, 0)} to="/accessoires">Accessoires</Link></li>
                        <li><Link onClick={() => window.scrollTo(0, 0)} to="/parfums">Parfums</Link></li>
                        <li><Link onClick={() => window.scrollTo(0, 0)} to="/promos">Promos et offres</Link></li>
                    </ul>
                </div>

                {/* À propos */}
                <div>
                    <h4 className="font-bold mb-8 text-3xl">À PROPOS</h4>
                    <ul className="space-y-2">
                        <li><Link onClick={() => window.scrollTo(0, 0)} to="/apropos">À propos</Link></li>
                        <li><Link onClick={() => window.scrollTo(0, 0)} to="/service-client">Service client</Link></li>
                        <li><Link onClick={() => window.scrollTo(0, 0)} to="/adresses">Adresses</Link></li>
                    </ul>
                </div>

                {/* Suivre */}
                <div>
                    <h4 className="font-bold mb-8 text-3xl">SUIVRE</h4>
                    <ul className="space-y-2">
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Pinterest</a></li>
                        <li><a href="#">TikTok</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Snapchat</a></li>
                    </ul>
                </div>

                {/* Assistance */}
                <div>
                    <h4 className="font-bold mb-8 text-3xl">ASSISTANCE</h4>
                    <ul className="space-y-2">
                        <li>Notre service client est là pour vous assister</li>
                        <li><Link onClick={() => window.scrollTo(0, 0)} to="/service-client">En savoir plus</Link></li>
                    </ul>
                </div>
            </div>

            {/* 🔹 Paiements sécurisés */}
            <div className="text-center py-10 border-t border-b border-black">
                <ul className="flex justify-center space-x-6 text-black underline">
                    <li><Link onClick={() => window.scrollTo(0, 0)} to="/livraison">Livraison et retours</Link></li>
                    <li><Link onClick={() => window.scrollTo(0, 0)} to="/conditions">Termes et conditions</Link></li>
                    <li><Link onClick={() => window.scrollTo(0, 0)} to="/paiement">Moyens de paiement</Link></li>
                    <li><Link onClick={() => window.scrollTo(0, 0)} to="/mentions">Mentions légales</Link></li>
                    <li><Link onClick={() => window.scrollTo(0, 0)} to="/cookies">Politique de cookies</Link></li>
                </ul>
            </div>

            {/* 🔹 Signature */}
            <div className="text-center py-6 text-black bg-gradient-to-t from-[#e8ad9a] via-white to-white">
                <div className="flex justify-center py-8">
                    <h1 className="text-7xl text-black pb-3">G'LAM</h1>
                </div>
                © {new Date().getFullYear()} G'LAM – Tous droits réservés.
            </div>
        </footer>
    );
}

export default Footer;
