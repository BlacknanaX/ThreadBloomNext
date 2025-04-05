"use client";

import React, { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductOptionsProps {
    product: {
        name: string;
        price: number;
    };
}

export function ProductOptions({ product }: ProductOptionsProps) {
    const [selectedType, setSelectedType] = useState<string>("");

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-medium font-content">{product.name}</h1>
                <Heart className="h-6 w-6 font-medium hover:text-primary cursor-pointer transition-colors secondary-font md:h-8 md:w-8" />
            </div>

            <div className="flex items-center gap-4">
                <p className="text-2xl font-bold font-content">£{product.price.toFixed(2)}</p>
            </div>

            <div className="space-y-4">
                <p className="text-base font-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="flex items-center gap-4">
                    {/* Product Options */}
                    <div className="w-full space-y-4">
                        {/* Option Type Selection */}
                        <div>
                            <label className="block text-m font-medium font-content mb-2">
                                Select Product Type
                            </label>
                            <div className="flex gap-2">
                                <button 
                                    className={`flex-1 border p-2 font-content bg-white hover:border-[#3b3530] focus:outline-none transition-colors ${
                                        selectedType === "pattern" ? "border-[#3b3530]" : "border-gray-300"
                                    }`}
                                    onClick={() => setSelectedType("pattern")}
                                >
                                    Pattern Only
                                </button>
                                <button 
                                    className={`flex-1 border p-2 font-content bg-white hover:border-[#3b3530] focus:outline-none transition-colors ${
                                        selectedType === "pattern-yarn" ? "border-[#3b3530]" : "border-gray-300"
                                    }`}
                                    onClick={() => setSelectedType("pattern-yarn")}
                                >
                                    Pattern & Yarn
                                </button>
                                <button 
                                    className={`flex-1 border p-2 font-content bg-white hover:border-[#3b3530] focus:outline-none transition-colors ${
                                        selectedType === "finished" ? "border-[#3b3530]" : "border-gray-300"
                                    }`}
                                    onClick={() => setSelectedType("finished")}
                                >
                                    Finished Project
                                </button>
                            </div>
                        </div>

                        {/* Pattern Format Selection */}
                        <div>
                            <label className="block text-sm font-medium font-content mb-2">
                                Pattern Format
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="pattern-format"
                                        value="pdf"
                                        className="mr-2"
                                        defaultChecked
                                    />
                                    <span className="font-content">PDF Download</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="pattern-format"
                                        value="printed"
                                        className="mr-2"
                                    />
                                    <span className="font-content">Printed Book</span>
                                </label>
                            </div>
                        </div>

                        {/* Quantity Selection */}
                        <div>
                            <label className="block text-sm font-medium font-content mb-2">
                                Quantity
                            </label>
                            <div className="flex items-center gap-2">
                                <button className="border border-gray-300 bg-white p-2 hover:border-[#3b3530] focus:outline-none transition-colors">
                                    -
                                </button>
                                <input
                                    type="number"
                                    min="1"
                                    defaultValue="1"
                                    className="w-20 text-center border border-gray-300 bg-white p-2 hover:border-[#3b3530] focus:outline-none transition-colors"
                                />
                                <button className="border border-gray-300 bg-white p-2 hover:border-[#3b3530] focus:outline-none transition-colors">
                                    +
                                </button>
                                <span className="text-lg font-content">In Stock</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                        <ShoppingCart className="h-5 w-5" />
                        Add to Cart
                    </button>
                    <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
                        <Heart className="h-5 w-5" />
                        Add to Wishlist
                    </button>
                </div>
            </div>

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-6">
                <h2 className="text-xl font-semibold font-content mb-4">Product Details</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-medium font-content mb-2">Materials</h3>
                        <p className="text-sm font-content">100% Cotton</p>
                    </div>
                    <div>
                        <h3 className="font-medium font-content mb-2">Care Instructions</h3>
                        <p className="text-sm font-content">Machine wash cold, tumble dry low</p>
                    </div>
                    <div>
                        <h3 className="font-medium font-content mb-2">Shipping & Returns</h3>
                        <div className="space-y-2">
                            <p className="text-sm font-content">Free shipping on orders over £50</p>
                            <p className="text-sm font-content">30-day returns policy</p>
                            <p className="text-sm font-content">International shipping available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 