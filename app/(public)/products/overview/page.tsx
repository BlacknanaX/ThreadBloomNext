import { Products } from "@/lib/placehold-data";
import { ProductCard } from "@/components/productCard";
import { NavList } from "@/lib/data";

export default function ProductsOverviewPage() {
    // 获取所有子分类
    const subCategories = NavList.filter(cat => cat.level === "1");

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">All Products</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {Products.map((product) => {
                    const category = subCategories.find(cat => cat.id === product.category_id);
                    return (
                        <ProductCard
                            key={product.id}
                            {...product}
                            category={category?.name || "Uncategorized"}
                        />
                    );
                })}
            </div>
        </div>
    );
} 