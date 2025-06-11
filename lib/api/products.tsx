import {Products} from "@/components/dashboard/columns";
import {ProductsTable} from "@/lib/placehold-data";

export async function getData(): Promise<Products[]> {
    // Fetch data from your API here.
    return ProductsTable;
}

export async function fetchProductsPages(query:string){
    return 1;
}
