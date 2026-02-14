import { getCompanyById } from "../../../../lib/actions";
import { notFound } from "next/navigation";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import { ArrowLeft, Globe, Mail, Phone, MapPin, Calendar, Users } from "lucide-react";
import { Metadata } from "next";

interface MemberDetailPageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: MemberDetailPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const company = await getCompanyById(parseInt(resolvedParams.id));
    if (!company) return { title: "Member Not Found" };
    return {
        title: `${company.name} | YZ-RA Member`,
        description: company.description || `Profile for ${company.name}`,
    };
}

export default async function MemberDetailPage({ params }: MemberDetailPageProps) {
    const resolvedParams = await params;
    const company = await getCompanyById(parseInt(resolvedParams.id));

    if (!company) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-24">
            <Link href="/members" className="inline-flex items-center text-cyan-500 hover:text-cyan-400 mb-8 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Directory
            </Link>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 bg-black/40 rounded-xl border border-white/10 p-4 h-32 w-32 flex items-center justify-center">
                                {company.logo_url ? (
                                    <img src={company.logo_url} alt={company.name} className="h-full w-full object-contain" />
                                ) : (
                                    <span className="text-4xl font-bold text-cyan-500">{company.name.charAt(0)}</span>
                                )}
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h1 className="text-3xl font-bold text-white font-orbitron">{company.name}</h1>
                                    <span className="px-3 py-1 text-xs font-mono text-cyan-400 bg-cyan-950/30 rounded-full border border-cyan-500/20">
                                        {company.company_type?.name}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                                    {company.city && (
                                        <span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-cyan-500" /> {company.city}, {company.country}</span>
                                    )}
                                    {company.founded_year && (
                                        <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-cyan-500" /> Est. {company.founded_year}</span>
                                    )}
                                    {company.employee_count && (
                                        <span className="flex items-center gap-1"><Users className="h-4 w-4 text-cyan-500" /> {company.employee_count} Employees</span>
                                    )}
                                </div>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {company.description || "No detailed description available for this member."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Gallery / More Info Placeholder */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                        <h2 className="text-xl font-bold text-white mb-4">Company Gallery</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="aspect-video bg-black/40 rounded-lg border border-white/5 flex items-center justify-center text-gray-600">
                                    Image {i}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-lg font-bold text-white mb-4">Contact Information</h3>
                        <div className="space-y-4">
                            {company.website_url && (
                                <div>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">Website</span>
                                    <a href={company.website_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mt-1">
                                        <Globe className="h-4 w-4" /> {new URL(company.website_url).hostname}
                                    </a>
                                </div>
                            )}
                            {company.email && (
                                <div>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">Email</span>
                                    <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-white hover:text-cyan-400 mt-1">
                                        <Mail className="h-4 w-4 text-cyan-500" /> {company.email}
                                    </a>
                                </div>
                            )}
                            {company.phone && (
                                <div>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">Phone</span>
                                    <span className="flex items-center gap-2 text-white mt-1">
                                        <Phone className="h-4 w-4 text-cyan-500" /> {company.phone}
                                    </span>
                                </div>
                            )}
                            {company.address && (
                                <div>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">Headquarters</span>
                                    <p className="text-gray-300 mt-1 text-sm">
                                        {company.address}<br />
                                        {company.city}, {company.state} {company.country}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <Button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white">
                                Contact Member
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
