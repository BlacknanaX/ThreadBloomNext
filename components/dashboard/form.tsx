'use client';

import {z} from 'zod';

const productFormSchema = z.object({
    name: z.string(),
    category: z.string(),
    price: z.number(),
    stock: z.number(),
    materials: z.string(),
    careInstructions: z.string(),
    difficulty: z.string(),
});
