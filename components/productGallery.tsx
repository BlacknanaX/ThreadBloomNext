"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => 
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => 
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                    src={images[currentImageIndex]}
                    alt={`${productName} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 768px) 50vw, 100vw"
                />
                {/* Favorite Button */}
                <button
                    className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-gray-600 hover:bg-white hover:text-primary transition-colors"
                    aria-label="Add to favorites"
                >
                </button>
                {/* Navigation Buttons */}
                <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-600 hover:bg-white hover:text-primary transition-colors"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-600 hover:bg-white hover:text-primary transition-colors"
                    aria-label="Next image"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>

            {/* Thumbnail List */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                            currentImageIndex === index 
                                ? 'border-primary' 
                                : 'border-transparent hover:border-gray-300'
                        }`}
                    >
                        <Image
                            src={image}
                            alt={`${productName} - Thumbnail ${index + 1}`}
                            fill
                            className="object-cover object-center"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
} 