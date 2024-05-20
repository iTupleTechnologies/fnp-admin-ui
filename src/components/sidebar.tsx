import {
    Home,
    Box,
    Tag,
    Users,
    FileText,
    BarChart2,
    Settings,
    Store,
    CreditCard,
} from "lucide-react";
import { Label } from "./common/Label";

interface NavItem {
    label: string;
    icon: React.ElementType;
    link: string;
    notification?: number;
}

const navItems: NavItem[] = [
    { label: "Home", icon: Home, link: "/" },
    {
        label: "Orders",
        icon: Box,
        notification: 1,
        link: "/orders",
    },
    { label: "Products", icon: Tag, link: "/products" },
    { label: "Customers", icon: Users, link: "/customers" },
    { label: "Content", icon: FileText, link: "/content" },
    { label: "Analytics", icon: BarChart2, link: "/analytics" },
    { label: "Discounts", icon: Settings, link: "/discounts" },
];

const salesChannels: NavItem[] = [
    { label: "Online Store", icon: Store, link: "/store" },
    { label: "Point of Sale", icon: CreditCard, link: "/pos" },
];

const Sidebar: React.FC = () => {
    const renderNavItem = (item: NavItem) => (
        <a
            key={item.label}
            href={item.link}
            className="flex items-center py-1 px-4 rounded transition duration-200 hover:bg-gray-100 cursor-pointer"
        >
            <item.icon className="mr-3" />
            <Label className="cursor-pointer">{item.label}</Label>
            {item.notification && (
                <Label
                    variant={"semibold"}
                    size={"xs"}
                    className="ml-auto bg-gray-300 text-sm px-2 rounded-full cursor-pointer"
                >
                    {item.notification}
                </Label>
            )}
        </a>
    );

    return (
        <aside className="w-64 h-screen bg-gray-200/80 text-gray-900 border border-r">
            <div className="flex px-4 py-2 font-bold text-lg">
                Fnp Qatar Store
            </div>
            <nav className="mt-2">
                {navItems.map((item) => (
                    <div key={item.label}>{renderNavItem(item)}</div>
                ))}
                <div className="mt-2">
                    <Label size={"xs"} className="px-4" variant={"light"}>
                        Sales channels
                    </Label>
                    {salesChannels.map((item) => (
                        <div key={item.label}>{renderNavItem(item)}</div>
                    ))}
                </div>
                <div className="mt-2">
                    <Label size={"xs"} className="px-4" variant={"light"}>
                        Apps
                    </Label>
                    <a
                        href={"/settings"}
                        className="flex items-center py-1 px-4 rounded transition duration-200 hover:bg-gray-100 hover:cursor-pointer"
                    >
                        <Settings className="mr-3" />
                        <Label className="hover:cursor-pointer">Settings</Label>
                    </a>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
