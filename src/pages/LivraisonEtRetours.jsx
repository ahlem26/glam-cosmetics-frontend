import React from "react";

export default function LivraisonRetours() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Livraison & Retours
      </h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">📦 Livraison</h2>
        <p className="mb-3">
          Nous livrons nos produits dans toute l’Algérie via nos partenaires
          logistiques. Les délais de livraison varient selon la région :
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Alger : 1 à 2 jours ouvrables</li>
          <li>Autres wilayas : 2 à 5 jours ouvrables</li>
        </ul>
        <p className="mt-3">
          Les frais de livraison sont indiqués lors de la validation de votre
          commande. Vous serez informé(e) par SMS ou appel dès l’expédition de
          votre colis.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">🔄 Retours & Échanges</h2>
        <p className="mb-3">
          Vous disposez d’un délai de <strong>7 jours</strong> après réception
          de votre commande pour demander un retour ou un échange.
        </p>
        <p>
          Pour être éligible, le produit doit être non utilisé, dans son
          emballage d’origine et accompagné du reçu d’achat.
        </p>
        <p className="mt-3">
          Les frais de retour sont à la charge du client sauf en cas d’erreur
          de notre part (produit défectueux ou incorrect).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">📩 Procédure de retour</h2>
        <ol className="list-decimal list-inside space-y-1 ml-4">
          <li>Contactez notre service client via e-mail ou téléphone.</li>
          <li>Indiquez votre numéro de commande et la raison du retour.</li>
          <li>Un agent vous contactera pour confirmer la procédure.</li>
        </ol>
        <p className="mt-4">
          Une fois le retour validé, un remboursement ou un échange sera effectué
          sous <strong>5 à 10 jours ouvrables</strong>.
        </p>
      </section>
    </div>
  );
}
