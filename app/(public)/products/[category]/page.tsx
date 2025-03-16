import Image from "next/image";
import {ProductCard} from "@/components/ProductCard";
import {Products} from "@/lib/placehold-data";
import React from "react";

export default function Page() {
    const columns = Math.min(Products.length, 4);

    return (
        <div className="container mx-auto p-4 py-8">
            <div
                className="grid gap-6 max-w-[1400px] mx-auto"
                style={{
                    gridTemplateColumns: `repeat(${columns}, 1fr)`
                }}
            >
                {Products.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </div>
    );
}
