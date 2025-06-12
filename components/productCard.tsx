"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Heart} from "lucide-react";
import {SortSelect} from "./sortSelect";

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

export function ProductCard({id, name, price, imageUrl, category}: ProductCardProps) {
    return (
        <div className="group relative">
            <Link href={`/products/${id}`} className="">
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
                        <Heart className="h-5 w-5"/>
                    </button>
                </div>

                {/* Product info */}
                <div className="mt-4 space-y-1">
                    {/*<Link */}
                    {/*    href={`/products/${id}`}*/}
                    {/*    className="text-m font-medium font-sans hover:text-primary transition-colors group"*/}
                    {/*>*/}
                    <span className="text-m font-sm font-mono hover:text-primary transition-colors ">{name}</span>
                    {/*</Link>*/}

                    <div className="flex flex-col  gap-1">
                        <p className="text-lg font-semibold font-mono">
                            £{price.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                            {category}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export function ProductList({products}: ProductListProps) {
    const [sortBy, setSortBy] = React.useState("relevance");
    const [sortedProducts, setSortedProducts] = React.useState(products);

    React.useEffect(() => {
        const sorted = [...products];
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

// export default function Example() {
//     return (
//         <div className="bg-white">
//             <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//                 <h2 className="sr-only">Products</h2>
//
//                 <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//                     {products.map((product) => (
//                         <a key={product.id} href={product.href} className="group">
//                             <img
//                                 alt={product.imageAlt}
//                                 src={product.imageSrc}
//                                 className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
//                             />
//                             <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
//                             <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
//                         </a>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }






