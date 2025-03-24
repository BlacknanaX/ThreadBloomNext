'use client'

import Link from 'next/link';
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import { Categories } from "@/lib/data";
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// 处理分类数据
const mainCategories = Categories.filter(cat => cat.level === "0");
const subCategories = Categories.filter(cat => cat.level === "1");

// 获取子分类
const getSubCategories = (mainCategoryId: string) => {
    return subCategories.filter(sub => sub.pid === mainCategoryId);
};

interface NavLinksProps {
    onCategoryClick?: (category: typeof Categories[0]) => void;
    onSubCategoryClick?: (category: typeof Categories[0], subCategory: typeof Categories[0]) => void;
    onAllCategoryClick?: (category: typeof Categories[0]) => void;
}

export default function NavLinks({ onCategoryClick, onSubCategoryClick, onAllCategoryClick }: NavLinksProps) {
    const pathname = usePathname();
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    return (
        <div className="flex flex-col space-y-2">
            {mainCategories.map((category) => (
                <div key={category.id} className="space-y-1">
                    <button
                        onClick={() => {
                            setExpandedCategory(
                                expandedCategory === category.id ? null : category.id
                            );
                            onCategoryClick?.(category);
                        }}
                        className={clsx(
                            'flex w-full items-center justify-between p-2 text-sm font-medium rounded-md',
                            {
                                'bg-sky-100 text-blue-600': pathname.includes(category.name.toLowerCase()),
                                'hover:bg-gray-50': !pathname.includes(category.name.toLowerCase())
                            }
                        )}
                    >
                        <span>{category.name}</span>
                        <ChevronDownIcon 
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
                            <button
                                onClick={() => onAllCategoryClick?.(category)}
                                className={clsx(
                                    'block w-full text-left px-2 py-1.5 text-sm rounded-md',
                                    {
                                        'bg-sky-100 text-blue-600': pathname === `/products/${category.name.toLowerCase()}`,
                                        'text-gray-600 hover:bg-gray-50': pathname !== `/products/${category.name.toLowerCase()}`
                                    }
                                )}
                            >
                                All {category.name}
                            </button>
                            {getSubCategories(category.id).map((subCategory) => (
                                <button
                                    key={subCategory.id}
                                    onClick={() => onSubCategoryClick?.(category, subCategory)}
                                    className={clsx(
                                        'block w-full text-left px-2 py-1.5 text-sm rounded-md',
                                        {
                                            'bg-sky-100 text-blue-600': pathname === `/products/${category.name.toLowerCase()}/${subCategory.name.toLowerCase().replace(/\s+/g, '-')}`,
                                            'text-gray-600 hover:bg-gray-50': pathname !== `/products/${category.name.toLowerCase()}/${subCategory.name.toLowerCase().replace(/\s+/g, '-')}`
                                        }
                                    )}
                                >
                                    {subCategory.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
} 