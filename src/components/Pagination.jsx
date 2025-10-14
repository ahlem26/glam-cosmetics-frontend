import React from 'react'
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Pagination({ setPageActuelle, pageActuelle, totalPages }) {
    return (
        <div className="flex justify-center items-center gap-2 mt-8">
            <button
                onClick={() => setPageActuelle(p => Math.max(p - 1, 1))}
                disabled={pageActuelle === 1}
                className="px-3 py-1 disabled:opacity-50"
            >
                <ArrowLeft size={18} />
            </button>

            {[...Array(totalPages)].map((_, i) => (
                <button
                    key={i}
                    onClick={() => setPageActuelle(i + 1)}
                    className={`px-3 py-1 ${pageActuelle === i + 1 ? "text-orange-600 underline" : "hover:underline"}`}
                >
                    {i + 1}
                </button>
            ))}

            <button
                onClick={() => setPageActuelle(p => Math.min(p + 1, totalPages))}
                disabled={pageActuelle === totalPages}
                className="px-3 py-1 disabled:opacity-50"
            >
                <ArrowRight size={18} />
            </button>
        </div>
    )
}
