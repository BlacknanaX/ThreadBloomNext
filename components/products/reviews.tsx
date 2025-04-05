"use client";

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import {Star, StarHalf, Plus, Minus} from "lucide-react"
import {useState} from "react"

interface Review {
    id: string
    author: string
    rating: number
    comment: string
    date: string
}

interface ReviewsProps {
    reviews: Review[]
}

export function Reviews({reviews}: ReviewsProps) {
    const [isOpen, setIsOpen] = useState(false);
    
    // Calculate average rating
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

    // Render stars based on rating
    const renderStars = (rating: number) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 >= 0.5

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} className="w-4 h-4 fill-[#5d7749] text-[#5d7749]" />)
        }

        if (hasHalfStar) {
            stars.push(
                <div key="half" className="relative w-4 h-4">
                    <Star className="w-4 h-4 text-[#5d7749] stroke-[#5d7749]" />
                    <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
                        <Star className="w-4 h-4 fill-[#5d7749] text-[#5d7749]" />
                    </div>
                </div>
            )
        }

        const emptyStars = 5 - stars.length
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-[#5d7749] stroke-[#5d7749]" />)
        }

        return stars
    }

    return (
        <div className="border-t border-gray-200 pt-6">
            <Accordion type="single" collapsible className="w-full" onValueChange={(value) => setIsOpen(value === "reviews")}>
                <AccordionItem value="reviews">
                    <AccordionTrigger className="text-lg [&>svg]:hidden flex justify-between items-center hover:no-underline cursor-pointer">
                        <div className="flex items-center gap-2">
                            <span>Reviews ({reviews.length})</span>
                            <div className="flex">
                                {renderStars(averageRating)}
                            </div>
                            <span>{averageRating.toFixed(1)}</span>
                        </div>
                        <div className="flex items-center">
                            <div className="relative w-5 h-5">
                                <Plus className={`absolute h-5 w-5 shrink-0 text-gray-500 transition-all duration-200 mr-2 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                                <Minus className={`absolute h-5 w-5 shrink-0 text-gray-500 transition-all duration-200 mr-2 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-4">
                            {reviews.map((review) => (
                                <div key={review.id} className="border-b pb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">{review.author}</span>
                                        <div className="flex">
                                            {renderStars(review.rating)}
                                        </div>
                                    </div>
                                    <p className="mt-2 text-gray-600">{review.comment}</p>
                                    <p className="mt-1 text-sm text-gray-500">{review.date}</p>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}



