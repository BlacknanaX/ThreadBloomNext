"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog";

export function Newsletter() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log("Subscribed:", email);
        setEmail("");
        setIsOpen(false);
    };

    return (
        <>
            <Button
                variant="ghost"
                onClick={() => setIsOpen(true)}
                className="w-full px-4 py-2 bg-white text-[#76795b] rounded-md hover:bg-white/90 transition-colors"
            >
                Subscribe
            </Button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#76795b]">Join Our Newsletter</DialogTitle>
                        <DialogDescription className="text-base">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full"
                                required
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <DialogClose asChild>
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="text-[#76795b] border-[#76795b] hover:bg-[#76795b] hover:text-white"
                                >
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button
                                type="submit"
                                className="bg-[#76795b] text-white hover:bg-[#76795b]/90"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
} 