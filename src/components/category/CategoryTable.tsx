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
            <div>
                <Label size={"sm"}>{row.getValue("slug")}</Label>
            </div>
        ),
    },
    {
        accessorKey: "title",
        header: (
            <div className="text-left">
                <Label size={"sm"} variant={"semibold"}>
                    Title
                </Label>
            </div>
        ),
        cell: ({ row }: any) => {
            return <Label size={"sm"}>{row.getValue("title")}</Label>;
        },
    },
    {
        accessorKey: "current_sort_order",
        header: (
            <div className="text-left">
                <Label size={"sm"} variant={"semibold"}>
                    Sort Order
                </Label>
            </div>
        ),
        cell: ({ row }: any) => {
            return (
                <Label size={"sm"}>{row.getValue("current_sort_order")}</Label>
            );
        },
    },
    {
        accessorKey: "products",
        header: (
            <div className="text-center">
                <Label size={"sm"} variant={"semibold"}>
                    Products
                </Label>
            </div>
        ),
        cell: ({ row }: any) => {
            const products = row.getValue("products");

            return (
                <div className="w-full text-center">
                    <Label size={"sm"} variant={"semibold"}>
                        {products.length}
                    </Label>
                </div>
            );
        },
    },
];

export default function CategoryTable<TData, TValue>({
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
                                        onClick={() =>
                                            router.push(`/collections`)
                                        }
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell
                                                className="px-1 "
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
