"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import {
    Search,
    User,
    Heart,
    ShoppingCart,
    Menu,
    X,
    ChevronDown
} from "lucide-react";
import { Categories } from "@/lib/data";

// // 处理菜单数据
const mainCategories = Categories.filter(cat => cat.id.length === 1);
const subCategories = Categories.filter(cat => cat.id.length > 1);


export function Banner(){
    return (
        <div className="bg-[#76795b] text-white">
            <div className="container mx-auto">
                <div className="flex items-center justify-center py-2 text-sm md:text-base">
                    <p className="text-center">
                        🎉 Limited Time Offer: $20 OFF on Orders Over $100 | Free Shipping | 30-Day Returns
                    </p>
                </div>
            </div>
        </div>
    );
}

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // 获取特定主分类的子分类
    const getSubCategories = (mainCategoryId: string) => {
        return subCategories.filter(sub => sub.id.startsWith(mainCategoryId));
    };

    // Handle scroll effect
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            setIsScrolled(window.scrollY > 0);
        });
    }

    return (
        <header 
            className={`bg-background sticky top-0 z-50 border-b transition-all duration-300 ${
                isScrolled ? 'shadow-md' : ''
            }`}
            role="banner"
            aria-label="Main navigation"
        >
            <div className="container mx-auto">
                {/* Top Bar */}
                <div className="flex h-20 md:h-24 items-center justify-between gap-3 rounded-lg shrink-0">
                    {/* Menu Trigger - Only for mobile */}
                    <div className="flex md:hidden">
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button 
                                    variant="ghost" 
                                    size="icon"
                                    className="hover:bg-accent h-12 w-12"
                                    aria-label="Toggle navigation menu"
                                >
                                    <Menu className="h-6 w-6" aria-hidden="true" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent 
                                side="left" 
                                className="w-[300px] sm:w-[400px]"
                                aria-label="Navigation menu"
                            >
                                <nav 
                                    className="flex flex-col gap-6 pt-8"
                                    aria-label="Main navigation"
                                >
                                    <Link 
                                        href="/new_arrives"
                                        className="text-xl font-medium hover:text-primary transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        New Arrives
                                    </Link>
                                    {mainCategories.map((category) => (
                                        <div key={category.id} className="space-y-2">
                                            <button
                                                onClick={() => {
                                                    setSelectedMainCategory(
                                                        selectedMainCategory === category.id ? null : category.id
                                                    );
                                                }}
                                                className="w-full text-left text-xl font-medium hover:text-primary transition-colors flex items-center justify-between"
                                                aria-label={`Browse ${category.name}`}
                                            >
                                                {category.name}
                                                <ChevronDown 
                                                    className={`h-5 w-5 transition-transform ${
                                                        selectedMainCategory === category.id ? 'rotate-180' : ''
                                                    }`} 
                                                    aria-hidden="true" 
                                                />
                                            </button>
                                            {selectedMainCategory === category.id && (
                                                <div className="pl-4 space-y-2">
                                                    <Link
                                                        href={`/products/category:${category.name.toLowerCase()}`}
                                                        className="block py-2 text-base hover:text-primary transition-colors"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        All {category.name}
                                                    </Link>
                                                    {getSubCategories(category.id).map((subCategory) => (
                                                        <Link
                                                            key={subCategory.id}
                                                            href={`/products/category:${subCategory.name.toLowerCase()}`}
                                                            className="block py-2 text-base hover:text-primary transition-colors"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {subCategory.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <Link 
                                        href="/about_us"
                                        className="text-xl font-medium hover:text-primary transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        About Us
                                    </Link>
                                    <Link 
                                        href="/blog" 
                                        className="text-xl font-medium hover:text-primary transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Blog
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Logo - Centered */}
                    <Link 
                        href="/" 
                        className="absolute left-1/2 -translate-x-1/2"
                        aria-label="ThreadBloom Co Home"
                    >
                        <span className="text-2xl md:text-3xl font-bold hover:opacity-80 transition-opacity">
                            ThreadBloom Co
                        </span>
                    </Link>

                    {/* User Actions - Right aligned */}
                    <div className="flex items-center gap-4 md:gap-6 ml-auto">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-accent h-14 w-14 md:h-16 md:w-16"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            aria-label={isSearchOpen ? "Close search" : "Open search"}
                        >
                            {isSearchOpen ? (
                                <X className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true" />
                            ) : (
                                <Search className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true" />
                            )}
                            <span className="sr-only">Search</span>
                        </Button>

                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className="hover:bg-accent h-14 w-14 md:h-16 md:w-16"
                            aria-label="Account settings"
                        >
                            <User className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true" />
                            <span className="sr-only">Account</span>
                        </Button>

                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className="relative hover:bg-accent h-14 w-14 md:h-16 md:w-16"
                            aria-label="Shopping cart"
                        >
                            <ShoppingCart className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true" />
                            <span className="sr-only">Cart</span>
                            <CartCounter count={3} />
                        </Button>
                    </div>
                </div>

                {/* Desktop Navigation - Only visible on PC */}
                <nav className="hidden md:flex justify-center items-center gap-8 py-4 border-t">
                    <Link 
                        href="/new_arrives" 
                        className="text-lg font-medium hover:text-primary transition-colors"
                    >
                        New Arrives
                    </Link>
                    {mainCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setSelectedMainCategory(
                                    selectedMainCategory === category.id ? null : category.id
                                );
                            }}
                            className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-1"
                            aria-label={`Browse ${category.name}`}
                        >
                            {category.name}
                            <ChevronDown 
                                className={`h-4 w-4 transition-transform ${
                                    selectedMainCategory === category.id ? 'rotate-180' : ''
                                }`} 
                                aria-hidden="true" 
                            />
                        </button>
                    ))}
                    <Link 
                        href="/about_us" 
                        className="text-lg font-medium hover:text-primary transition-colors"
                    >
                        About Us
                    </Link>
                    <Link 
                        href="/blog" 
                        className="text-lg font-medium hover:text-primary transition-colors"
                    >
                        Blog
                    </Link>
                </nav>

                {/* Categories Content - Desktop */}
                {selectedMainCategory && (
                    <div className="pb-4 animate-in fade-in duration-200" role="navigation" aria-label="Categories menu">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Add "All" category */}
                            <Link 
                                href={`/products/${mainCategories.find(cat => cat.id === selectedMainCategory)?.name.toLowerCase()}`}
                                className="flex items-center justify-center p-4 hover:bg-accent hover:text-primary transition-colors"
                                onClick={() => setSelectedMainCategory(null)}
                            >
                                All {mainCategories.find(cat => cat.id === selectedMainCategory)?.name}
                            </Link>
                            {getSubCategories(selectedMainCategory).map((category) => (
                                <Link 
                                    key={category.id}
                                    href={`/products/category:${category.name.toLowerCase()}`}
                                    className="flex items-center justify-center p-4 hover:bg-accent hover:text-primary transition-colors"
                                    onClick={() => setSelectedMainCategory(null)}
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Search Bar - Same for both mobile and desktop */}
                {isSearchOpen && (
                    <div 
                        className="pb-4 animate-in fade-in duration-200"
                        role="search"
                        aria-label="Search products"
                    >
                        <form 
                            className="flex gap-3"
                            onSubmit={(e) => {
                                e.preventDefault();
                                // Handle search submission
                            }}
                        >
                            <div className="relative flex-grow">
                                <Input
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-full pl-12 h-14 md:h-16 md:text-xl"
                                    aria-label="Search input"
                                />
                                <Search 
                                    className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 md:h-7 md:w-7 text-muted-foreground" 
                                    aria-hidden="true"
                                />
                            </div>
                            <Button 
                                type="submit" 
                                size="lg"
                                className="h-14 md:h-16 px-8 md:text-lg"
                                aria-label="Submit search"
                            >
                                Search
                            </Button>
                        </form>
                    </div>
                )}
            </div>
        </header>
    );
}

function CartCounter({ count }: { count: number }) {
    return (
        <span 
            className="absolute -right-1 -top-1 flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-primary text-base md:text-lg text-primary-foreground"
            aria-label={`${count} items in cart`}
        >
            {count}
        </span>
    );
}