import React from "react";

const Adresses = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-20 py-12">
      {/* 🔹 Titre principal */}
      <h1 className="text-3xl font-semibold mb-8 text-[#e8ad9a] text-center">
        Nos Adresses
      </h1>

      <p className="text-sm leading-relaxed text-center max-w-2xl mx-auto mb-10">
        Retrouvez ici toutes les informations concernant nos points de vente,
        nos bureaux et nos contacts principaux.  
        Nous sommes ravis de vous accueillir en magasin ou de vous assister à distance.
      </p>

      {/* 🔹 Adresses principales */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* 📍 Siège principal */}
        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-[#e8ad9a]">🏢 Siège Principal</h2>
          <p className="text-sm text-gray-700">
            Rue des Frères Ben Ali, Rouiba - Alger, Algérie
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Téléphone : +213 555 987 654
          </p>
          <a
            href="https://www.google.com/maps?q=Rouiba+Alger+Algérie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-[#e8ad9a] text-sm font-medium hover:underline"
          >
            Voir sur Google Maps
          </a>
        </div>

        {/* 🏬 Boutique */}
        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-[#e8ad9a]">🏬 Boutique</h2>
          <p className="text-sm text-gray-700">
            Centre commercial Bab Ezzouar, 1er étage, Alger
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Téléphone : +213 550 123 789
          </p>
          <a
            href="https://www.google.com/maps?q=Bab+Ezzouar+Alger"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-[#e8ad9a] text-sm font-medium hover:underline"
          >
            Voir sur Google Maps
          </a>
        </div>
      </div>

      {/* 🔹 Section contact supplémentaire */}
      <div className="mt-14 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#e8ad9a]">Contact en ligne</h2>
        <p className="text-sm text-gray-700 mb-6">
          Vous n’avez pas la possibilité de vous déplacer ?  
          Contactez-nous directement par email, nous répondrons sous 24h.
        </p>

        <a
          href="mailto:contact@votre-boutique.com"
          className="inline-block px-6 py-2 bg-[#e8ad9a] text-white font-medium rounded-full hover:bg-[#d89580] transition"
        >
          ✉️ Envoyer un message
        </a>
      </div>

      {/* 🔹 Carte Google Maps intégrée */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-4 text-[#e8ad9a] text-center">Localisation</h2>
        <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Carte des adresses"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.647076930279!2d3.286178175757863!3d36.7351878722424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb3f7aa9b3b7b%3A0x4d46b9fddee68d4!2sRouiba%2C%20Alger!5e0!3m2!1sfr!2sdz!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Adresses;
