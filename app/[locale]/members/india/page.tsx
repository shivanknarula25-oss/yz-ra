import { getCompanies } from "../../../../lib/actions";
import { CompanyCard } from "../../../../components/members/CompanyCard";
import { TechMap } from "../../../../components/members/TechMap";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Indian Robotics Companies | YZ-RA",
    description: "Leading robotics companies and startups in India.",
};

export default async function IndiaPage() {
    // ID 1 is Robotics Company, ID 5 is Startup
    // Use country filter for "India"
    const companies = await getCompanies(undefined, "India");

    // Filter specifically for "India" just in case the action is loose
    const indianCompanies = companies.filter(c =>
        (c.company_type?.id === 1 || c.company_type?.id === 5 || c.company_type?.id === 2) && // Include integrators too if they are in India? User said "Indian Robotic Companies". 
        // User request: "All Indian robotic companies more than 200". 
        // Let's assume we want all companies in India for this page.
        c.country?.toLowerCase().includes("india")
    );

    return (
        <div className="container mx-auto px-4 py-24">
            <div className="mb-12">
                <TechMap country="India" />
            </div>

            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-orbitron mb-4">
                    Indian <span className="text-orange-500">Robotics</span> Ecosystem
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-400">
                    Discover the innovative companies shaping the future of robotics in India.
                </p>
            </div>

            {indianCompanies.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {indianCompanies.map((company) => (
                        <CompanyCard key={company.id} company={company} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 border border-dashed border-white/10 rounded-xl bg-white/5">
                    <h3 className="text-xl font-semibold text-white">No companies found</h3>
                    <p className="text-gray-400 mt-2">Check back later for updates.</p>
                </div>
            )}
        </div>
    );
}
