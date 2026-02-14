import { getCompanies, getCompanyTypes } from "../../../lib/actions";
import { CompanyCard } from "../../../components/members/CompanyCard";
import { MemberFilters } from "../../../components/members/MemberFilters";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Member Directory | YZ-RA",
    description: "Browse our network of robotics and automation companies.",
};

interface MembersPageProps {
    searchParams: {
        type?: string;
        country?: string;
    };
}

export default async function MembersPage({ searchParams }: MembersPageProps) {
    const resolvedParams = await searchParams;
    const typeId = resolvedParams.type ? parseInt(resolvedParams.type) : undefined;
    const country = resolvedParams.country;

    const [companies, types] = await Promise.all([
        getCompanies(typeId, country),
        getCompanyTypes(),
    ]);

    return (
        <div className="container mx-auto px-4 py-24">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-orbitron mb-4">
                    <span className="text-cyan-500">Member</span> Directory
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-400">
                    Discover the leading innovators, manufacturers, and integrators driving the robotics revolution.
                </p>
            </div>

            <MemberFilters types={types} />

            {companies.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {companies.map((company) => (
                        <CompanyCard key={company.id} company={company} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 border border-dashed border-white/10 rounded-xl bg-white/5">
                    <h3 className="text-xl font-semibold text-white">No members found</h3>
                    <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
                </div>
            )}
        </div>
    );
}
