import { NavList } from '@/lib/data';
import { Products } from '@/lib/placehold-data';
import { ProductCard } from '@/components/productCard';

interface Props {
    params: {
        category: string;
    };
}

export default function CategoryPage({ params }: Props) {
    const { category } = params;
    
    // Find the current category
    const mainCategory = NavList.find(
        cat => cat.level === "0" && cat.name.toLowerCase() === category
    );

    // Get all products under this category
    const categoryProducts = Products.filter(
        product => product.category_id === mainCategory?.id
    );

    if (!mainCategory) {
        return <div className="container mx-auto px-4 py-8">Category not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">
                {mainCategory.name}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
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