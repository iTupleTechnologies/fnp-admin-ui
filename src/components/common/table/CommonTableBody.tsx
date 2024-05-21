import { ITableMetadata } from "@/components/common/table/CommonTable";
import moment from "moment";
import { EyeIcon, PencilIcon, PlusCircle, Trash2 } from "lucide-react";

export interface ITableBodyProps {
    metadata: ITableMetadata[];
    data?: any;
}

export default function CommonTableBody(props: ITableBodyProps) {
    return <div>Nothing here. Outdated</div>;
}

function getCellValue(meta: ITableMetadata, row: any) {
    switch (meta.type) {
        case "datetime":
            return dateTimeCell(row[meta.columnName]);
        case "icon":
            return getIcon(meta?.icon?.name || "");
        default:
            return row[meta.columnName] || "-";
    }
}

function getIcon(icon: string) {
    switch (icon) {
        case "eye":
            return (
                <EyeIcon className="w-6 h-6 text-gray-500 hidden md:block" />
            );
        case "edit":
            return (
                <PencilIcon className="w-6 h-6 text-blue-500 hidden md:block" />
            );
        case "add":
            return (
                <PlusCircle className="w-6 h-6 text-blue-500 hidden md:block" />
            );
        case "delete":
            return <Trash2 className="w-6 h-6 text-red-500 hidden md:block" />;
        default:
            return icon;
    }
}

const dateTimeCell = (value: string) => {
    return value ? moment(value).fromNow() : "";
};
