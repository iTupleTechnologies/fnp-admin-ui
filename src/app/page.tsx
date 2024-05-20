import H3 from "@/components/common/H3";
import StatsCard from "@/components/statsCard";

export default function Home() {
    return (
        <main className="flex flex-col flex-1 p-6 bg-gray-100 min-h-screen">
            <H3 className="py-2">Dashboard</H3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard title="Online store sessions" value="8" />
                <StatsCard title="Total sales" value="₹224.73" />
                <StatsCard title="Total orders" value="2" />
                <StatsCard title="Conversion rate" value="0%" />
            </div>
        </main>
    );
}
