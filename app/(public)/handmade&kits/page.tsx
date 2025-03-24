'use client';

import {ProductCard} from "@/components/productCard";
import {Products} from "@/lib/placehold-data";
import React from "react";
import { NavList } from '@/lib/data';

// interface Props {
//     params: {
//         category: string;
//     };
// }

export default async function Page({ params }: {params: Promise<{ category: string; }> }) {
    const { category } = await params;

    // 找到当前分类
    const mainCategory = NavList.find(
        cat => cat.level === "0" && cat.name.toLowerCase() === category
    );

    if (!mainCategory) {
        return <div className="container mx-auto px-4 py-8">Category not found</div>;
    }

    // 获取该分类下的所有产品
    // const categoryProducts = Products.filter(
    //     product => product.category_id === mainCategory.id
    // );

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">
                {mainCategory.name}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Products.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                        category={mainCategory.name}
                    />
                ))}
            </div>
        </div>
    );
}
