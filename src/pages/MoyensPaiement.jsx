import React from "react";

export default function MoyensPaiement() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Moyens de Paiement
      </h1>

      <p className="text-lg mb-10 text-justify">
        Pour faciliter vos achats sur notre boutique, nous vous proposons
        plusieurs options de paiement simples, rapides et sécurisées. Toutes les
        transactions sont protégées par des protocoles de sécurité conformes aux
        normes internationales.
      </p>

      {/* 🔹 Section 1 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          1. Paiement à la livraison (Cash on Delivery)
        </h2>
        <p>
          Vous pouvez régler votre commande directement au moment de la
          réception du colis. Cette méthode est idéale pour celles et ceux qui
          préfèrent vérifier le produit avant de payer. Veuillez préparer le
          montant exact pour faciliter la transaction.
        </p>
      </section>

      {/* 🔹 Section 2 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          2. Paiement par carte bancaire
        </h2>
        <p>
          Nous acceptons les principales cartes bancaires (Visa, MasterCard,
          CIB, Edahabia, etc.). Le paiement est sécurisé grâce à un système de
          cryptage avancé garantissant la confidentialité de vos données.
        </p>
      </section>

      {/* 🔹 Section 3 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          3. Paiement par virement bancaire
        </h2>
        <p>
          Vous avez également la possibilité d’effectuer un virement direct sur
          notre compte bancaire. Une fois le paiement confirmé, votre commande
          sera expédiée. Les coordonnées bancaires vous seront fournies lors de
          la validation de la commande.
        </p>
      </section>

      {/* 🔹 Section 4 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          4. Sécurité des paiements
        </h2>
        <p>
          Nous attachons une grande importance à la sécurité de vos paiements.
          Toutes les informations que vous saisissez sont cryptées via un
          protocole SSL, empêchant tout accès non autorisé à vos données
          personnelles ou bancaires.
        </p>
      </section>

      {/* 🔹 Section 5 */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          5. Assistance et questions
        </h2>
        <p>
          En cas de problème ou de question concernant le paiement, notre{" "}
          <a
            href="/service-client"
            className="text-[#e8ad9a] font-medium hover:underline"
          >
            service client
          </a>{" "}
          reste à votre disposition pour vous aider rapidement.
        </p>
        <p className="mt-4">
          Dernière mise à jour : <strong>Octobre 2025</strong>
        </p>
      </section>
    </div>
  );
}
