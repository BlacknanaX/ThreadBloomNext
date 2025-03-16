"use client";

import React from "react";
import { ProductCard } from "./ProductCard";

// 示例数据
const sampleProducts = [
    {
        id: "1",
        name: "Wireless Headphones",
        price: 99.99,
        imageUrl: "/images/headphones.jpg",
        category: "Electronics"
    },
    {
        id: "2",
        name: "Smart Watch",
        price: 199.99,
        imageUrl: "/images/smartwatch.jpg",
        category: "Electronics"
    },
    {
        id: "3",
        name: "Running Shoes",
        price: 79.99,
        imageUrl: "/images/shoes.jpg",
        category: "Fashion"
    },
    {
        id: "4",
        name: "Coffee Maker",
        price: 129.99,
        imageUrl: "/images/coffee-maker.jpg",
        category: "Home"
    },
    {
        id: "5",
        name: "Yoga Mat",
        price: 29.99,
        imageUrl: "/images/yoga-mat.jpg",
        category: "Sports"
    },
    {
        id: "6",
        name: "Backpack",
        price: 49.99,
        imageUrl: "/images/backpack.jpg",
        category: "Fashion"
    },
    {
        id: "7",
        name: "Blender",
        price: 89.99,
        imageUrl: "/images/blender.jpg",
        category: "Home"
    },
    {
        id: "8",
        name: "Sunglasses",
        price: 159.99,
        imageUrl: "/images/sunglasses.jpg",
        category: "Fashion"
    }
];

export function ProductGrid() {
    // 计算每行应该显示的数量
    const columns = Math.min(sampleProducts.length, 4);
    
    return (
        <div className="container mx-auto px-4 py-8">
            <div 
                className="grid gap-6 max-w-[1400px] mx-auto"
                style={{
                    gridTemplateColumns: `repeat(${columns}, 1fr)`
                }}
            >
                {sampleProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </div>
    );
} 