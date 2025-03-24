"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
}

export function ProductCard({ id, name, price, imageUrl }: ProductCardProps) {
    return (
        <div className="group relative">
            {/* Product Image container */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
                {/* Favourite button */}
                <button
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-600 hover:bg-white hover:text-primary transition-colors"
                    aria-label="Add to favorites"
                >
                    <Heart className="h-5 w-5" />
                </button>
            </div>

            {/* Product info */}
            <div className="mt-4 space-y-1">
                <Link 
                    href={`/handmade&kits/${id}`}
                    className="text-sm font-medium text-gray-900 hover:text-primary transition-colors"
                >
                    {name}
                </Link>
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-gray-900">
                        £{price.toFixed(2)}
                    </p>
                    {/*<span className="text-sm text-gray-500">*/}
                    {/*    {category}*/}
                    {/*</span>*/}
                </div>
            </div>
        </div>
    );
}



