import React from "react";

const ServiceClient = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-20 py-12">
      <h1 className="text-3xl font-semibold mb-6 text-[#e8ad9a] text-center">
        Service Client
      </h1>

      <p className="text-sm leading-relaxed text-center max-w-2xl mx-auto mb-10">
        Notre équipe du service client est à votre écoute pour répondre à toutes vos
        questions, vous conseiller et vous accompagner avant, pendant et après votre
        achat. Votre satisfaction est notre priorité.
      </p>

      {/* 🔹 Moyens de contact */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold mb-2 text-[#e8ad9a]">📧 Email</h2>
          <p className="text-sm text-gray-600">contact@votre-boutique.com</p>
        </div>

        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold mb-2 text-[#e8ad9a]">📞 Téléphone</h2>
          <p className="text-sm text-gray-600">+213 555 123 456</p>
        </div>

        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold mb-2 text-[#e8ad9a]">🕒 Horaires</h2>
          <p className="text-sm text-gray-600">
            Du dimanche au jeudi <br /> 9h00 à 17h00
          </p>
        </div>
      </div>

      {/* 🔹 FAQ simplifiée */}
      <div className="mt-14">
        <h2 className="text-2xl font-semibold mb-6 text-[#e8ad9a] text-center">
          Questions Fréquentes (FAQ)
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto text-sm leading-relaxed">
          <div>
            <h3 className="font-semibold">📦 Où en est ma commande ?</h3>
            <p>
              Vous pouvez suivre votre commande via votre espace client ou en
              contactant notre service après-vente par email.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">💸 Puis-je modifier ou annuler ma commande ?</h3>
            <p>
              Si votre commande n’a pas encore été expédiée, vous pouvez la modifier
              ou l’annuler en nous contactant dans les plus brefs délais.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">🔁 Comment effectuer un retour ?</h3>
            <p>
              Vous disposez de 7 jours après réception pour retourner votre produit.
              Consultez la page <a href="/livraison" className="text-[#e8ad9a] hover:underline">Livraison et retours</a> pour plus d’informations.
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Message de fin */}
      <div className="mt-12 text-center text-gray-600 text-sm">
        <p>
          Merci de votre confiance 💕 <br />
          Notre service client vous accompagne à chaque étape.
        </p>
      </div>
    </div>
  );
};

export default ServiceClient;
