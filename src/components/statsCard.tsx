import H3 from "./common/H3";
import { Label } from "./common/Label";

const StatsCard = ({ title, value }: { title: string; value: string }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <H3 className="font-semibold">{title}</H3>
            <Label size={"default"} variant={"light"}>
                {value}
            </Label>
        </div>
    );
};

export default StatsCard;
