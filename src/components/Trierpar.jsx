import React from "react";
import { ChevronDown } from "lucide-react";

export default function Trierpar({ setOpenSort, openSort, sortOption, setSortOption }) {

    // ✅ Options du tri
    const sortOptions = [
        { value: "trierpar", label: "Trier par" },
        { value: "recent", label: "Plus récent" },
        { value: "priceLowHigh", label: "Prix (bas à élevé)" },
        { value: "priceHighLow", label: "Prix (élevé à bas)" },
        { value: "nameAZ", label: "Nom (A-Z)" },
        { value: "nameZA", label: "Nom (Z-A)" },
    ];

    return (
        <div className="flex justify-end mb-6">
            {/* 🔹 Trier par customisé */}
            <div className="relative w-52">
                <button
                    onClick={() => setOpenSort(!openSort)}
                    className="w-full flex justify-between items-center border px-4 py-2 shadow-sm bg-white hover:bg-gray-50 transition"
                >
                    {sortOptions.find((opt) => opt.value === sortOption)?.label || "Trier par"}
                    <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${openSort ? "rotate-180" : ""
                            }`}
                    />
                </button>

                {openSort && (
                    <div className="absolute mt-2 w-full bg-white border shadow-lg z-10">
                        {sortOptions.map((opt) => (
                            <div
                                key={opt.value}
                                onClick={() => {
                                    setSortOption(opt.value);
                                    setOpenSort(false);
                                }}
                                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 transition ${sortOption === opt.value ? "bg-gray-200" : ""
                                    }`}
                            >
                                {opt.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
