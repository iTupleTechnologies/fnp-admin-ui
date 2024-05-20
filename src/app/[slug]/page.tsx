import H3 from "@/components/common/H3";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <H3 className="flex justify-center items-center py-2">{params.slug}</H3>
    );
}
