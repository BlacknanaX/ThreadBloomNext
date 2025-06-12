import React from "react";
// import { ShoppingCart, Heart } from "lucide-react";
import { Products } from "@/lib/placehold-data";
// import { NavList } from "@/lib/data";
import { ProductGallery } from "@/components/productGallery";
import { DeliveryReturn } from "@/components/products/deliveryReturn";
import { Reviews } from "@/components/products/reviews";
import { ProductOptions } from "@/components/products/productOptions";

// interface Props {
//     params: {
//         id: string;
//     };
// }

// Mock product images data
const productImages = [
    "/images/products/product-1.jpg",
    "/images/products/product-2.jpg",
    "/images/products/product-3.jpg",
    "/images/products/product-4.jpg",
    "/images/products/product-5.jpg",
    "/images/products/product-6.jpg",
];

export default async function ProductDetailPage({ params }: {
    params: Promise<{id:string}>
}) {
    const { id } = await params;
    
    // Find current product
    const product = Products.find(p => p.id === id);
    
    // Find product category
    // const category = product ? NavList.find((c: { id: string }) => c.id === product.category_id) : null;

    if (!product) {
        return <div className="container mx-auto px-4 py-8">Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    {/* Product Gallery */}
                    <ProductGallery
                        images={productImages}
                        productName={product.name}
                    />
                    <DeliveryReturn/>
                    <Reviews reviews={product.reviews}/>
                </div>

                {/* Product Information */}
                <ProductOptions product={product} />
            </div>
        </div>
    );
}