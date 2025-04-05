"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { SortSelect } from "./sortSelect";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
}

interface ProductListProps {
    products: ProductCardProps[];
}

export function ProductCard({ id, name, price, imageUrl, category }: ProductCardProps) {
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
            <div className="mt-4 space-y-1 text-center">
                <Link 
                    href={`/products/${id}`}
                    className="text-m font-medium font-content hover:text-primary transition-colors"
                >
                    {name}
                </Link>

                <div className="flex flex-col items-center gap-1">
                    <p className="text-lg font-semibold font-content">
                        £{price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                        {category}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function ProductList({ products }: ProductListProps) {
    const [sortBy, setSortBy] = React.useState("relevance");
    const [sortedProducts, setSortedProducts] = React.useState(products);

    React.useEffect(() => {
        let sorted = [...products];
        switch (sortBy) {
            case "price-asc":
                sorted.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                sorted.sort((a, b) => b.price - a.price);
                break;
            default:
                // 保持原始顺序
                break;
        }
        setSortedProducts(sorted);
    }, [sortBy, products]);

    return (
        <div className="space-y-6">
            <div className="flex justify-end">
                <SortSelect
                    currentSort={sortBy}
                    onSortChange={setSortBy}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}






