"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function DeliveryReturn() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-t border-gray-200 pt-6">
            <Accordion 
                type="single" 
                collapsible 
                className="w-full"
                onValueChange={(value) => setIsOpen(value === "shipping-returns")}
            >
                <AccordionItem value="shipping-returns">
                    <AccordionTrigger className="text-2xl font-medium font-content [&>svg]:hidden flex justify-between items-center hover:no-underline cursor-pointer">
                        <span>Shipping & Returns</span>
                        <div className="flex items-center">
                            <div className="relative w-5 h-5">
                                <Plus className={`absolute h-5 w-5 shrink-0 text-gray-500 transition-all duration-200 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                                <Minus className={`absolute h-5 w-5 shrink-0 text-gray-500 transition-all duration-200 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-6">
                        <div>
                            <h3 className="text-lg font-medium font-content mb-4">Delivery Options</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium font-content mb-2">UK</h4>
                                    <p className="text-sm font-content">Free shipping on orders over £50</p>
                                </div>
                                <div>
                                    <h4 className="font-medium font-content mb-2">International</h4>
                                    <p className="text-sm font-content">International shipping available</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium font-content mb-4">Return</h3>
                            <p className="text-sm font-content">30-day returns policy</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
} 