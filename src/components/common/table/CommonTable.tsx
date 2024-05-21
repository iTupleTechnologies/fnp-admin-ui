import { Table } from "@/components/ui/table";
import CommonTableHeader from "@/components/common/table/CommonTableHeader";
import CommonTableBody from "@/components/common/table/CommonTableBody";

export interface ITableMetadata {
    columnName: string;
    headerLabel?: string;
    sortable?: boolean;
    defaultSortColumn?: boolean;
    columnClass?: string;
    cellClass?: string;
    defaultSortOrder?: "asc" | "desc";
    type?:
        | "date"
        | "datetime"
        | "time"
        | "currency"
        | "number"
        | "string"
        | "icon"
        | "stringWithIcon"
        | "widget";
    icon?: IIcon;
    widgetName?: string;
}

export interface IIcon {
    name: string;
    className?: string;
    onClick?: () => void;
}

export default function CommonTable({
    data,
    metadata,
}: {
    data: any;
    metadata: ITableMetadata[];
}) {
    return (
        <div>
            {data?.length > 0 && (
                <Table className="rounded-lg w-full ">
                    <CommonTableHeader metadata={metadata} />
                    <CommonTableBody data={data} metadata={metadata} />
                </Table>
            )}
        </div>
    );
}
