import SortableHeaderCell from "@/components/common/table/SortableHeaderCell";
import { ITableMetadata } from "@/components/common/table/CommonTable";
import { cn } from "@/lib/utils";
import { Label } from "@/components/common/Label";

export default function CommonTableHeader({
    metadata,
    className,
}: {
    metadata: ITableMetadata[];
    className?: string;
}) {
    return (
        <div
            className={cn(
                "h-12 bg-primary text-left align-middle font-bold text-primary-foreground lg:flex lg:justify-around lg:items-center text-sm",
                className,
            )}
        >
            {metadata.map((meta, index) =>
                meta.sortable ? (
                    <SortableHeaderCell
                        key={index}
                        columnName={meta.columnName}
                        label={meta.headerLabel || ""}
                        defaultSortColumn={meta.defaultSortColumn}
                        defaultSortOrder={meta.defaultSortOrder}
                        className={cn(
                            "hidden font-semibold  lg:table-cell text-sm",
                            meta.columnClass,
                        )}
                    />
                ) : (
                    <div
                        key={index}
                        className={"hidden lg:table-cell " + meta.columnClass}
                    >
                        <Label className="text-sm font-semibold">
                            {meta.headerLabel}
                        </Label>
                    </div>
                ),
            )}
        </div>
    );
}
