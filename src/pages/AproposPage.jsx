import React from "react";
import Hero from "../components/Hero";

export default function Apropos() {
    return (
        <div className="space-y-16">
            {/* 🔹 Bannière Hero */}
            <Hero
                image="/images/c837a6_485c12bc527e4b2db81fc1417bea4daf~mv2.avif"
                titre="À PROPOS"
            />

            {/* 🔹 Contenu principal */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 text-gray-800 space-y-8">
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#e8ad9a] uppercase">
                    Notre Histoire
                </h2>

                <p className="text-lg leading-relaxed text-justify">
                    Bienvenue sur <strong>G'LAM</strong>, une boutique née de
                    la passion pour la beauté authentique et le soin de soi. Nous croyons
                    que chaque personne mérite de se sentir confiante, naturelle et
                    rayonnante au quotidien.
                </p>

                <p className="text-lg leading-relaxed text-justify">
                    Depuis notre création, nous nous engageons à proposer des produits de
                    qualité, soigneusement sélectionnés, respectueux de la peau et de
                    l’environnement. Chaque article est choisi avec amour pour offrir une
                    expérience unique à nos clientes.
                </p>

                <p className="text-lg leading-relaxed text-justify">
                    Notre mission est simple : <span className="font-medium">rendre la beauté accessible à tous</span>,
                    tout en valorisant la confiance et l’authenticité. Nous mettons un
                    point d’honneur à offrir un service client attentif, une livraison
                    rapide, et des produits qui font réellement la différence.
                </p>

                <div className="text-center pt-6">
                    <a
                        href="/toutvoir"
                        className="inline-block bg-black text-white px-10 py-3 rounded-md hover:bg-[#e8ad9a] hover:text-black transition-all"
                    >
                        Découvrir nos produits
                    </a>
                </div>
            </div>
        </div>
    );
}
