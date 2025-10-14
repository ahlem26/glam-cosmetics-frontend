import React from "react";

export default function MentionsLegales() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Mentions Légales
      </h1>

      <p className="text-lg mb-10 text-justify">
        Conformément aux dispositions de la législation en vigueur, les présentes
        mentions légales ont pour objectif de définir les informations relatives
        à l’éditeur, à l’hébergeur et aux conditions d’utilisation du site.
      </p>

      {/* 🔹 Éditeur du site */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">1. Éditeur du site</h2>
        <p>
          Le site <strong>G'LAM</strong> est édité par :
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Nom de l’entreprise : G'LAM</li>
          <li>Siège social : [Adresse complète]</li>
          <li>Email : contact@[nomdusite].com</li>
          <li>Téléphone : [Numéro de contact]</li>
          <li>Responsable de publication : [Nom du responsable]</li>
        </ul>
      </section>

      {/* 🔹 Hébergement */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">2. Hébergement</h2>
        <p>
          Le site est hébergé par :
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Hébergeur : [Nom de l’hébergeur]</li>
          <li>Adresse : [Adresse complète de l’hébergeur]</li>
          <li>Site web : [URL de l’hébergeur]</li>
        </ul>
      </section>

      {/* 🔹 Propriété intellectuelle */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          3. Propriété intellectuelle
        </h2>
        <p>
          L’ensemble du contenu présent sur ce site (textes, images, graphismes,
          logos, vidéos, icônes, etc.) est la propriété exclusive de{" "}
          <strong>G'LAM</strong> ou de ses partenaires, sauf
          mention contraire. Toute reproduction, distribution ou modification
          sans autorisation écrite préalable est strictement interdite.
        </p>
      </section>

      {/* 🔹 Données personnelles */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          4. Données personnelles
        </h2>
        <p>
          Les informations collectées sur ce site sont utilisées uniquement pour
          le traitement des commandes et la gestion de la relation client. Vous
          disposez d’un droit d’accès, de rectification et de suppression de vos
          données personnelles en nous contactant à l’adresse suivante :
          <span className="text-[#e8ad9a]"> contact@[nomdusite].com</span>.
        </p>
      </section>

      {/* 🔹 Cookies */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">5. Cookies</h2>
        <p>
          Ce site peut être amené à utiliser des cookies afin d’améliorer
          l’expérience utilisateur et à des fins statistiques. Vous pouvez
          désactiver les cookies à tout moment depuis les paramètres de votre
          navigateur.
        </p>
      </section>

      {/* 🔹 Limitation de responsabilité */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          6. Limitation de responsabilité
        </h2>
        <p>
          <strong>G'LAM</strong> ne pourra être tenue responsable
          des dommages directs ou indirects résultant de l’utilisation du site
          ou de l’impossibilité d’y accéder. Les liens externes présents sur le
          site ne relèvent pas de la responsabilité de l’éditeur.
        </p>
        <p className="mt-4">
          Dernière mise à jour : <strong>Octobre 2025</strong>
        </p>
      </section>
    </div>
  );
}
