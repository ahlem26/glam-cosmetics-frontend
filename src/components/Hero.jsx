import React from 'react'

export default function Hero({ image, titre }) {
    return (
        <div>
            {/* 🔹 Hero Section */}
            <section
                className="relative w-full flex justify-center items-center bg-fixed bg-center bg-cover py-22"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="bg-black text-center py-12 px-18">
                    <h1 className="text-4xl text-white">{titre}</h1>
                </div>
            </section>
        </div>
    )
}
