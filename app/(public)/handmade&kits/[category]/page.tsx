import {ProductCard, ProductList} from "@/components/productCard";
import {Products} from "@/lib/placehold-data";
import {NavList} from '@/lib/data';
import React from "react";


export default async function SubCategoryPage({params}: { params: Promise<{ category: string; }> }) {
    const {category} = await params;


    // 找到当前主分类（不区分大小写）
    const mainCategory = NavList.find(
        cat => cat.id === "a",
    ) ?? {id: "", name: "Something went wrong."};

    // if (!mainCategory) {
    //     return <div className="container mx-auto px-4 py-8">Coming Soon!</div>;
    // }

    // 找到当前子分类（不区分大小写）
    const currentSubCategory = NavList.find(
        cat =>
            cat.level === "1" &&
            cat.pid === mainCategory.id &&
            cat.name.toLowerCase().replace(/\s/g, "") === decodeURIComponent(category).toLowerCase()
    ) ?? {id: "", name: ""};


    // if (!currentSubCategory) {
    //     return <div className="container mx-auto px-4 py-8">Coming Soon!</div>;
    // }

    // 获取该子分类下的所有产品
    // const subCategoryProducts = Products.filter(
    //     product => product.category_id === currentSubCategory.id
    // );

    return (
        <main>
            <div className="container mx-auto p-4 py-8">
                <h1 className="text-2xl font-bold mb-6">
                    {mainCategory.name} - {currentSubCategory.name}
                </h1>
                {/*<div*/}
                    {Products.length > 0 ? (
                        <ProductList products={Products}/>
                        // Products.map((product) => (
                        //     <ProductCard
                        //         key={product.id}
                        //         {...product}
                        //         category={currentSubCategory.name}
                        //     />
                        // ))
                    ) : (
                        <div className="col-span-full text-center py-8">
                            No products found in this category
                        </div>
                    )}
                </div>
        </main>
    );
}

