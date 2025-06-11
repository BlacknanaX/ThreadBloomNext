"use client";

import React, { useState } from "react";
import { ShoppingCart, Heart, ChevronDown, ChevronUp } from "lucide-react";

interface ProductOptionsProps {
    product: {
        name: string;
        price: number;
    };
}

export function ProductOptions({ product }: ProductOptionsProps) {
    const [selectedType, setSelectedType] = useState<string>("");
    const [pdfFormat, setPdfFormat] = useState<string>("english");
    const [paperFormat, setPaperFormat] = useState<string>("");
    const [showPdf, setShowPdf] = useState<boolean>(false);
    const [showPrint, setShowPrint] = useState<boolean>(false);

    // Handle product type selection
    const handleTypeSelect = (type: string) => {
        setSelectedType(type);
        
        // Reset dropdown states
        setShowPdf(false);
        setShowPrint(false);
    };

    // Handle dropdown toggles
    const togglePdfDropdown = () => {
        setShowPdf(!showPdf);
        if (!showPdf) setShowPrint(false);
    };

    const togglePrintDropdown = () => {
        setShowPrint(!showPrint);
        if (!showPrint) setShowPdf(false);
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-content">{product.name}</h1>
                <div className="flex flex-col items-center gap-1 ml-8">
                    <div className="flex gap-1">
                        <div className="w-4 h-4 rounded-full main-bg"></div>
                        <div className="w-4 h-4 rounded-full main-bg"></div>
                        <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                    </div>
                    <span className="text-lg font-content">DIFFICULTY</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <p className="text-2xl font-bold font-content">£{product.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <span className="text-lg font-content">In Stock</span>
            </div>

            <div className="space-y-4">
                {/*<p className="text-base font-content">*/}
                {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.*/}
                {/*</p>*/}

                <div className="flex items-center gap-4">
                    {/* Product Options */}
                    <div className="w-full space-y-4">
                        {/* Option Type Selection */}
                        <div>
                            <label className="block text-2xl font-medium font-content my-2">
                                Product Type
                            </label>
                            <div className="flex">
                                <button 
                                    className={`flex-1 border p-2 font-content bg-white button-select focus:outline-none transition-colors cursor-pointer ${
                                        selectedType === "pattern" ? "border-[#3b3530]" : "border-gray-300"
                                    }`}
                                    onClick={() => handleTypeSelect("pattern")}
                                >
                                    Pattern Only
                                </button>
                                <button 
                                    className={`flex-1 border p-2 font-content bg-white button-select focus:outline-none transition-colors cursor-pointer ${
                                        selectedType === "diy-kit" ? "border-[#3b3530]" : "border-gray-300"
                                    }`}
                                    onClick={() => handleTypeSelect("diy-kit")}
                                >
                                    DIY Kit
                                </button>
                                <button 
                                    className={`flex-1 border p-2 font-content bg-white button-select focus:outline-none transition-colors cursor-pointer ${
                                        selectedType === "finished" ? "border-[#3b3530]" : "border-gray-300"
                                    }`}
                                    onClick={() => handleTypeSelect("finished")}
                                >
                                    Finished Project
                                </button>
                            </div>
                        </div>

                        {/* Pattern Only Options */}
                        {selectedType === "pattern" && (
                            <div className="border-t border-b py-4">
                                {/* PDF Download Section */}
                                <div>
                                    <div onClick={togglePdfDropdown} className="flex justify-between items-center cursor-pointer py-2 border-b">
                                        <div className="flex items-center gap-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2H8L4 6V20C4 21.1 4.9 22 6 22H20" stroke="#000000" strokeWidth="2"/>
                                                <path d="M14 2V6H18" stroke="#000000" strokeWidth="2"/>
                                                <path d="M12 18V12M12 12L9 15M12 12L15 15" stroke="#000000" strokeWidth="2"/>
                                            </svg>
                                            <span className="text-lg font-content">PDF DOWNLOAD</span>
                                        </div>
                                        {showPdf ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                    {/* PDF Options (now inside the border) */}
                                    {showPdf && (
                                        <div className="pl-8 py-2 space-y-2">
                                            <label className="flex items-center">
                                                <input 
                                                    type="radio" 
                                                    name="pdf-format" 
                                                    value="english" 
                                                    checked={pdfFormat === "english"}
                                                    onChange={() => setPdfFormat("english")}
                                                    className="mr-2" 
                                                />
                                                <span className="font-content">Digital download (english) - £5.00</span>
                                            </label>
                                        </div>
                                    )}
                                </div>
                                {/* Printed Book Section */}
                                <div>
                                    <div onClick={togglePrintDropdown} className="flex justify-between items-center cursor-pointer py-2">
                                        <div className="flex items-center gap-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 19.5V7C4 5.89543 4.89543 5 6 5H8M4 19.5C4 20.0523 4.44772 20.5 5 20.5H19C19.5523 20.5 20 20.0523 20 19.5V19.5M4 19.5C3.44772 19.5 3 19.0523 3 18.5V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V18.5C21 19.0523 20.5523 19.5 20 19.5V19.5M8 5H16M8 5V3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V5M8 12H16M8 16H16" stroke="#000000" strokeWidth="2"/>
                                            </svg>
                                            <span className="text-lg font-content">PRINTED BOOK</span>
                                        </div>
                                        {showPrint ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                    {/* Printed Book Options (already inside the border) */}
                                    {showPrint && (
                                        <div className="pl-8 py-2 space-y-2">
                                            <label className="flex items-center">
                                                <input 
                                                    type="radio" 
                                                    name="print-format" 
                                                    value="standard" 
                                                    checked={paperFormat === "standard"}
                                                    onChange={() => setPaperFormat("standard")}
                                                    className="mr-2" 
                                                />
                                                <span className="font-content">Standard print - £10.00</span>
                                            </label>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* DIY Kit Options */}
                        {selectedType === "diy-kit" && (
                            <div className="border-t border-b py-4">
                                <div className="py-2">
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 6.2C3 5.07989 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.07989 3 6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.07989 21 6.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2Z" stroke="#000000" strokeWidth="2"/>
                                            <path d="M12 8L12 16" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                                            <path d="M16 12L8 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                        <span className="text-lg font-content">SELECT KIT</span>
                                    </div>
                                    <div className="pl-8 space-y-2">
                                        <label className="flex items-center">
                                            <input 
                                                type="radio" 
                                                name="kit-type" 
                                                value="basic" 
                                                className="mr-2" 
                                            />
                                            <span className="font-content">Basic kit - £30</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input 
                                                type="radio" 
                                                name="kit-type" 
                                                value="no-pattern" 
                                                className="mr-2" 
                                            />
                                            <span className="font-content">No Pattern kit - £25</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Quantity Selection - Show for all options */}
                        {selectedType && (
                            <div>
                                <label className="block text-lg font-medium font-content my-2">
                                    Quantity
                                </label>
                                <div className="flex items-center gap-2">
                                    <button className="border border-gray-300 bg-white p-2 hover:border-[#3b3530] focus:outline-none transition-colors cursor-pointer">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        defaultValue="1"
                                        className="w-20 text-center border border-gray-300 bg-white p-2 hover:border-[#3b3530] focus:outline-none transition-colors"
                                    />
                                    <button className="border border-gray-300 bg-white p-2 hover:border-[#3b3530] focus:outline-none transition-colors cursor-pointer">
                                        +
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Buttons - Show only if a type is selected */}
                {selectedType && (
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 button-primary text-white px-6 py-3 rounded-md hover:main-bg/90 transition-colors cursor-pointer">
                            <ShoppingCart className="h-5 w-5" />
                            Add to Cart
                        </button>
                        <button className="flex items-center gap-2 border font-content border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                            <Heart className="h-5 w-5" />
                            Add to Wishlist
                        </button>
                    </div>
                )}
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