"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#76795b] text-white">
            <div className="container mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">ThreadBloom Co</h3>
                        <p className="text-sm opacity-80">
                            Your one-stop destination for all your shopping needs. Quality products at great prices.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/new-arrivals" className="text-sm hover:opacity-80 transition-opacity">
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link href="/deals" className="text-sm hover:opacity-80 transition-opacity">
                                    Special Deals
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm hover:opacity-80 transition-opacity">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm hover:opacity-80 transition-opacity">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Customer Service</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className="text-sm hover:opacity-80 transition-opacity">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="text-sm hover:opacity-80 transition-opacity">
                                    Shipping Info
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="text-sm hover:opacity-80 transition-opacity">
                                    Returns & Exchanges
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-sm hover:opacity-80 transition-opacity">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    {/*<div className="space-y-4">*/}
                    {/*    <h3 className="text-lg font-semibold">Newsletter</h3>*/}
                    {/*    <p className="text-sm opacity-80">*/}
                    {/*        Subscribe to our newsletter for updates and exclusive offers.*/}
                    {/*    </p>*/}
                    {/*    <Newsletter />*/}
                    {/*</div>*/}
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm opacity-80">
                            © {new Date().getFullYear()} ThreadBloom Co. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="text-sm hover:opacity-80 transition-opacity">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm hover:opacity-80 transition-opacity">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 