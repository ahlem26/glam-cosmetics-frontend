import { useState } from "react";
import axios from "axios";

function AjouterProduit() {
    const [formData, setFormData] = useState({
        nom: "",
        prix: "",
        promo: false,
        promoPrix: "",
        categorie: "",
        description: "",
        sku: "",
    });
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    // ✅ Cloudinary upload
    const uploadImage = async () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "ton_upload_preset"); // à modifier selon ton compte Cloudinary

        const res = await axios.post(
            "https://api.cloudinary.com/v1_1/ton_cloud_name/image/upload",
            data
        );
        return res.data.secure_url;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const imageUrl = await uploadImage();

            const res = await axios.post("http://localhost:5000/api/products", {
                ...formData,
                image: imageUrl,
                prix: Number(formData.prix),
                promoPrix: formData.promo ? Number(formData.promoPrix) : null,
            });

            alert("Produit ajouté avec succès !");
            console.log(res.data);
        } catch (error) {
            console.error(error);
            alert("Erreur lors de l’ajout du produit");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Ajouter un produit</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="nom" placeholder="Nom du produit" onChange={handleChange} required />
                <input name="prix" type="number" placeholder="Prix" onChange={handleChange} required />
                <label>
                    <input type="checkbox" name="promo" onChange={handleChange} /> En promo ?
                </label>
                {formData.promo && (
                    <input name="promoPrix" type="number" placeholder="Prix promo" onChange={handleChange} />
                )}
                <input name="categorie" placeholder="Catégorie" onChange={handleChange} required />
                <textarea name="description" placeholder="Description" onChange={handleChange} required />
                <input name="sku" placeholder="Référence (SKU)" onChange={handleChange} required />
                <input type="file" onChange={(e) => setImage(e.target.files[0])} required />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    {loading ? "Ajout en cours..." : "Ajouter le produit"}
                </button>
            </form>
        </div>
    );
}

export default AjouterProduit;
