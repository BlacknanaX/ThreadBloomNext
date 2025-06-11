"use client";

import React from "react";

interface SortSelectProps {
    onSortChange: (value: string) => void;
    currentSort: string;
}

export function SortSelect({ onSortChange, currentSort }: SortSelectProps) {
    return (
        <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-medium font-mono whitespace-nowrap">
                Sort by:
            </label>
            <select
                id="sort"
                value={currentSort}
                onChange={(e) => onSortChange(e.target.value)}
                className="block w-[200px] rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm font-mono"
            >
                <option value="relevance">Relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
            </select>
        </div>
    );
} 