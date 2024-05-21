import CategoryTable from "@/components/category/CategoryTable";
import { Label } from "@/components/common/Label";
import { getCategories } from "@/lib/category";
import React from "react";

export default async function page() {
    const categories = await getCategories();

    return (
        <div className="p-6 flex flex-col gap-3">
            <Label size="lg" className="" variant="semibold">
                All Categories List
            </Label>
            <CategoryTable data={categories} />
        </div>
    );
}
