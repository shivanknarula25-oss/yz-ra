import { getCompanies } from "../../../../lib/actions";
import { CompanyCard } from "../../../../components/members/CompanyCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Other Members | YZ-RA",
    description: "Diverse members of the YZ-RA alliance.",
};

export default async function OthersPage() {
    const companies = await getCompanies(6); // ID 6 is Others

    return (
        <div className="container mx-auto px-4 py-24">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-orbitron mb-4">
                    <span className="text-purple-500">Other</span> Members
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-400">
                    Supporting organizations, research institutions, and partners.
                </p>
            </div>

            {companies.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {companies.map((company) => (
                        <CompanyCard key={company.id} company={company} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 border border-dashed border-white/10 rounded-xl bg-white/5">
                    <h3 className="text-xl font-semibold text-white">No other members found</h3>
                    <p className="text-gray-400 mt-2">Check back later for updates.</p>
                </div>
            )}
        </div>
    );
}
