import { ProductCard } from "@/components/productCard";
import { Products } from "@/lib/placehold-data";
import { NavList } from '@/lib/data';
import React from "react";

export default function SubCategoryPage({ params }: { params: { category: string; } }) {
    const { category } = params;
    
    // 找到当前主分类（不区分大小写）
    const mainCategory = NavList.find(
        cat => cat.id === "a",
    );

    // if (!mainCategory) {
    //     return <div className="container mx-auto px-4 py-8">Main category not found</div>;
    // }

    // 找到当前子分类（不区分大小写）
    const currentSubCategory = NavList.find(
        cat => cat.level === "1" &&
            cat.pid === mainCategory.id &&
            cat.name.toLowerCase().replace(/\s/g, "") === decodeURIComponent(category).toLowerCase()
    );

    // if (!currentSubCategory) {
    //     return <div className="container mx-auto px-4 py-8">Sub-category not found</div>;
    // }

    // 获取该子分类下的所有产品
    const subCategoryProducts = Products.filter(
        product => product.category_id === currentSubCategory.id
    );

    return (
        <main>
            <div className="container mx-auto p-4 py-8">
                <h1 className="text-2xl font-bold mb-6">
                    {mainCategory.name} - {currentSubCategory.name}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
                    {Products.length > 0 ? (
                        Products.map((product) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                                category={currentSubCategory.name}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-8">
                            No products found in this category
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

