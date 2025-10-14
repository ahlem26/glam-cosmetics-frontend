import React from "react";

export default function PolitiqueCookies() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Politique de Cookies
      </h1>

      <p className="text-lg mb-10 text-justify">
        Cette politique de cookies explique comment{" "}
        <strong>G'LAM</strong> utilise les cookies et autres
        technologies similaires sur le site{" "}
        <strong>[nomdusite.com]</strong>. Elle vous aide à comprendre quelles
        informations sont collectées et comment vous pouvez gérer vos
        préférences.
      </p>

      {/* 🔹 1. Qu’est-ce qu’un cookie ? */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">1. Qu’est-ce qu’un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte enregistré sur votre appareil
          (ordinateur, tablette, smartphone) lorsque vous visitez un site web.
          Il permet au site de reconnaître votre appareil et d’améliorer votre
          expérience de navigation.
        </p>
      </section>

      {/* 🔹 2. Types de cookies utilisés */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          2. Types de cookies utilisés
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Cookies essentiels :</strong> nécessaires au bon
            fonctionnement du site (panier, connexion, sécurité...).
          </li>
          <li>
            <strong>Cookies analytiques :</strong> nous aident à comprendre
            comment les visiteurs utilisent le site afin d’en améliorer le
            contenu et la performance.
          </li>
          <li>
            <strong>Cookies publicitaires :</strong> utilisés pour afficher des
            publicités pertinentes selon vos centres d’intérêt.
          </li>
          <li>
            <strong>Cookies de réseaux sociaux :</strong> permettent de partager
            du contenu sur vos plateformes sociales préférées.
          </li>
        </ul>
      </section>

      {/* 🔹 3. Gestion de vos cookies */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          3. Comment gérer vos cookies ?
        </h2>
        <p>
          Vous pouvez à tout moment choisir d’accepter, de refuser ou de
          supprimer les cookies en configurant les paramètres de votre
          navigateur. Voici comment procéder :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Google Chrome :</strong> Paramètres &gt; Confidentialité et
            sécurité &gt; Cookies et autres données du site.
          </li>
          <li>
            <strong>Mozilla Firefox :</strong> Options &gt; Vie privée et
            sécurité &gt; Cookies et données de sites.
          </li>
          <li>
            <strong>Safari :</strong> Préférences &gt; Confidentialité &gt;
            Gérer les données du site web.
          </li>
        </ul>
        <p className="mt-3">
          Notez que la désactivation de certains cookies peut altérer certaines
          fonctionnalités du site.
        </p>
      </section>

      {/* 🔹 4. Durée de conservation */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          4. Durée de conservation des cookies
        </h2>
        <p>
          Les cookies sont conservés pour une durée maximale de{" "}
          <strong>13 mois</strong> à compter de leur dépôt sur votre appareil,
          conformément à la réglementation en vigueur.
        </p>
      </section>

      {/* 🔹 5. Modifications de la politique */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          5. Modifications de la présente politique
        </h2>
        <p>
          <strong>G'LAM</strong> se réserve le droit de modifier la
          présente politique de cookies à tout moment. Toute mise à jour sera
          publiée sur cette page avec la date de dernière révision.
        </p>
      </section>

      {/* 🔹 6. Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-3">6. Contact</h2>
        <p>
          Pour toute question concernant cette politique ou la gestion des
          cookies, vous pouvez nous contacter à :
        </p>
        <p className="mt-2">
          📧 <span className="text-[#e8ad9a]">contact@[nomdusite].com</span>
        </p>
        <p className="mt-4">
          Dernière mise à jour : <strong>Octobre 2025</strong>
        </p>
      </section>
    </div>
  );
}
