import {
    CalendarIcon,
    CheckSquare,
    ChevronUp,
    FileClock,
    PencilIcon,
    PlusCircle,
    Search,
    Trash2,
    X,
    XSquare,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface IIcons {
    [key: string]: (
        className?: string,
        onClick?: () => void,
        props?: any,
    ) => JSX.Element;
}

export default function Icons({
    iconName,
    className,
    onClick,
}: {
    iconName: string;
    className?: string;
    onClick?: () => void;
}) {
    return icons[iconName](className, onClick);
}

const mainThemeColor = "text-primary";

const icons: IIcons = {
    edit: (className?: string, onClick?: () => void) => (
        <PencilIcon
            className={cn("w-5 h-5 mx-auto", mainThemeColor, className)}
            onClick={onClick}
        />
    ),
    add: (className?: string, onClick?: () => void) => (
        <PlusCircle
            className={cn("w-6 h-6  mx-auto", mainThemeColor, className)}
            onClick={onClick}
        />
    ),
    delete: (className?: string, onClick?: () => void) => (
        <Trash2
            className={cn("w-5 h-5 text-destructive mx-auto", className)}
            onClick={onClick}
        />
    ),
    calender: (className?: string) => (
        <CalendarIcon
            className={cn("w-5 h-5  mx-auto", mainThemeColor, className)}
        />
    ),
    close: (className?: string, onClick?: () => void) => (
        <XSquare
            className={cn("w-6 h-6 text-slate-600 ", className, mainThemeColor)}
            onClick={onClick}
        />
    ),

    search: (className?: string, onClick?: () => void) => {
        return (
            <Search
                className={cn(
                    "p-2 h-9 w-9 text-primary cursor-pointer hover:",
                    className,
                    mainThemeColor,
                )}
                onClick={onClick}
            />
        );
    },
    X: (className?: string, onClick?: () => void) => {
        return (
            <X
                className={cn(
                    "h-5 w-5  cursor-pointer",
                    className,
                    mainThemeColor,
                )}
                onClick={onClick}
            />
        );
    },

    upArrow: (className?: string, onClick?: () => void) => (
        <ChevronUp
            className={cn("w-6 h-6  mx-auto", mainThemeColor, className)}
            onClick={onClick}
        />
    ),
    check: (className?: string, onClick?: () => void) => (
        <CheckSquare
            className={cn("w-6 h-6  mx-auto", mainThemeColor, className)}
            onClick={onClick}
        />
    ),
    history: (className?: string, onClick?: () => void) => (
        <FileClock
            className={cn("w-5 h-5  mx-auto", mainThemeColor, className)}
            onClick={onClick}
        />
    ),
};
