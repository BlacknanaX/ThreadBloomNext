'use client'

import Link from 'next/link';
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import { Categories } from "@/lib/data";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// 处理分类数据
const mainCategories = Categories.filter(cat => cat.level === "0");
const subCategories = Categories.filter(cat => cat.level === "1");

// 获取子分类
const getSubCategories = (mainCategoryId: string) => {
    return subCategories.filter(sub => sub.pid === mainCategoryId);
};

export default function NavLinks() {
    const pathname = usePathname();
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    return (
        <div className="flex flex-col space-y-2">
            {mainCategories.map((category) => (
                <div key={category.id} className="space-y-1">
                    <button
                        onClick={() => setExpandedCategory(
                            expandedCategory === category.id ? null : category.id
                        )}
                        className={clsx(
                            'flex w-full items-center justify-between p-2 text-sm font-medium rounded-md',
                            {
                                'bg-sky-100 text-blue-600': pathname.includes(category.name.toLowerCase()),
                                'hover:bg-gray-50': !pathname.includes(category.name.toLowerCase())
                            }
                        )}
                    >
                        <span>{category.name}</span>
                        <ChevronDown
                            className={clsx(
                                'w-5 h-5 transition-transform',
                                {
                                    'rotate-180': expandedCategory === category.id
                                }
                            )} 
                        />
                    </button>
                    
                    {expandedCategory === category.id && (
                        <div className="ml-4 space-y-1">
                            <Link
                                href={`/products/category:${category.name.toLowerCase()}`}
                                className={clsx(
                                    'block px-2 py-1.5 text-sm rounded-md',
                                    {
                                        'bg-sky-100 text-blue-600': pathname === `/products/category:${category.name.toLowerCase()}`,
                                        'text-gray-600 hover:bg-gray-50': pathname !== `/products/category:${category.name.toLowerCase()}`
                                    }
                                )}
                            >
                                All {category.name}
                            </Link>
                            {getSubCategories(category.id).map((subCategory) => (
                                <Link
                                    key={subCategory.id}
                                    href={`/products/category:${subCategory.name.toLowerCase()}`}
                                    className={clsx(
                                        'block px-2 py-1.5 text-sm rounded-md',
                                        {
                                            'bg-sky-100 text-blue-600': pathname === `/products/category:${subCategory.name.toLowerCase()}`,
                                            'text-gray-600 hover:bg-gray-50': pathname !== `/products/category:${subCategory.name.toLowerCase()}`
                                        }
                                    )}
                                >
                                    {subCategory.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
