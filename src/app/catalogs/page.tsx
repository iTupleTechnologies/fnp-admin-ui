import CatalogTable from "@/components/catalog/CatalogTable";
import { Label } from "@/components/common/Label";
import { getCatalogs } from "@/lib/catalog";

export default async function page() {
    const catalogs = await getCatalogs();
    console.log("catalogs", catalogs);
    return (
        <div className="p-6 flex flex-col gap-3">
            <Label size="lg" className="" variant="semibold">
                All Catalog List
            </Label>
            <CatalogTable data={catalogs} />
        </div>
    );
}
