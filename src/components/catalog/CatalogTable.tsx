"use client";
import React from "react";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    SortingState,
    getSortedRowModel,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/common/Label";
import { useRouter } from "next/navigation";

interface DataTableProps<TData, TValue> {
    data: TData[];
}

const columns: any = [
    {
        id: "select",
        header: ({ table }: any) => (
            <div className="text-left w-min">
                {" "}
                <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    onCheckedChange={(value) =>
                        table.toggleAllPageRowsSelected(!!value)
                    }
                    aria-label="Select all"
                    className="border-black "
                />
            </div>
        ),
        cell: ({ row }: any) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="border-black mx-1"
            />
        ),
        enableSorting: false,
    },
    {
        accessorKey: "slug",
        header: () => (
            <div className="text-left">
                <Label size={"sm"} variant={"semibold"}>
                    Slug
                </Label>
            </div>
        ),
        cell: ({ row }: any) => (
            <div className="text-left">
                <Label size={"sm"}>{row.getValue("slug")}</Label>
            </div>
        ),
    },
    {
        accessorKey: "name",
        header: (
            <div className="text-left">
                <Label size={"sm"} variant={"semibold"}>
                    Title
                </Label>
            </div>
        ),
        cell: ({ row }: any) => {
            return <Label size={"sm"}>{row.getValue("name")}</Label>;
        },
    },
    {
        accessorKey: "store_id",
        header: (
            <div className="text-left">
                <Label size={"sm"} variant={"semibold"}>
                    Store Id
                </Label>
            </div>
        ),
        cell: ({ row }: any) => {
            return <Label size={"sm"}>{row.getValue("store_id")}</Label>;
        },
    },
    {
        accessorKey: "is_root_catalog",
        header: (
            <div className="text-center">
                <Label size={"sm"} variant={"semibold"}>
                    Root Catalog
                </Label>
            </div>
        ),
        cell: ({ row }: any) => {
            const isRootCatalog = row.getValue("is_root_catalog");
            console.log("isRootCatalog", isRootCatalog);
            return (
                <div className=" text-center">
                    <Label size={"sm"} variant={"semibold"}>
                        {isRootCatalog ? "Yes" : "No"}
                    </Label>
                </div>
            );
        },
    },
    {
        accessorKey: "categories",
        header: (
            <div className="text-center">
                <Label size={"sm"} variant={"semibold"}>
                    Categories
                </Label>
            </div>
        ),
        cell: ({ row }: any) => {
            const categories = row.getValue("categories");

            return (
                <div className="w-full text-center">
                    <Label size={"sm"} variant={"semibold"}>
                        {categories.length}
                    </Label>
                </div>
            );
        },
    },
];

export default function CatalogTable<TData, TValue>({
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const router = useRouter();
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getCoreRowModel: getCoreRowModel(),
    });
    return (
        <div className="rounded-md overflow-hidden border">
            <Table className="text-xs">
                <TableHeader className="">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead
                                        key={header.id}
                                        className=" px-2 bg-gray-100 "
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext(),
                                              )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className="bg-white">
                    {table.getRowModel().rows?.length ? (
                        table
                            .getRowModel()
                            .rows.map(
                                (row: {
                                    id: any;
                                    getIsSelected: () => any;
                                    getVisibleCells: () => any[];
                                    original: any;
                                }) => (
                                    <TableRow
                                        key={row.id}
                                        className="lg:py-0  hover:cursor-pointer"
                                        data-state={
                                            row.getIsSelected() && "selected"
                                        }
                                        onClick={() => router.push(`/catalogs`)}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell
                                                className="px-2 "
                                                key={cell.id}
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext(),
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ),
                            )
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
