import {LgPromo} from "@/components/public/promos";
import {NavList} from "@/lib/data";
import {ProductCard} from "@/components/productCard";
import {Products} from "@/lib/placehold-data";
import Link from "next/link";


export default function Page() {
    const sections = NavList.filter(
        section => section.pid === "");
    const subSection = NavList.filter(
        sub => sub.pid === ""
    );
    return (
        <main>
            {sections.map(section => {
                const href = section.name.toLowerCase().replace(/\s/g, "");
                return (
                    <div className="items-center justify-center text-sm md:text-base">
                        <LgPromo className="main-bg"
                                 key={section.id}
                                 backgroundImage="/crochet_promo.png"
                                 title={section.name}
                                 linkText={`Shop ${section.name}`} linkHref={`/handmade&kits/${href}`}/>
                        <div className="flex-grow md:overflow-y-auto py-6 md:py-12">
                            <div className="max-w-[1400px] mx-auto px-2 py-4 md:px-4 md:py-6">
                                {section.id === "a" ? (
                                    <h1 className="text-3xl p-4 md:text-4xl text-center mb-8 md:p-8">NEW ARRIVALS</h1>
                                ) : (
                                    <></>
                                )}
                                {Products.length > 0 ? (
                                    <>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                            {Products.map((product) => (
                                                <ProductCard
                                                    key={product.id}
                                                    {...product}
                                                    category={section.name}
                                                />
                                            ))}
                                        </div>
                                        <div className="text-center mt-8">
                                            <Link 
                                                href={`/handmade&kits/${href}`}
                                                className="inline-block text-2xl font-content font-medium underline transition-colors"
                                            >
                                                View More
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </main>
    );
}
