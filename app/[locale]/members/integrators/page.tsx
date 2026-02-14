import { getCompanies } from "../../../../lib/actions";
import { CompanyCard } from "../../../../components/members/CompanyCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Integrators | YZ-RA",
    description: "Leading robotic system integrators.",
};

export default async function IntegratorsPage() {
    const companies = await getCompanies(2); // ID 2 is Integrators

    return (
        <div className="container mx-auto px-4 py-24">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-orbitron mb-4">
                    Robotic <span className="text-cyan-500">Integrators</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-400">
                    Expert system integrators delivering end-to-end industrial automation solutions.
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
                    <h3 className="text-xl font-semibold text-white">No integrators found</h3>
                    <p className="text-gray-400 mt-2">Check back later for updates.</p>
                </div>
            )}
        </div>
    );
}
