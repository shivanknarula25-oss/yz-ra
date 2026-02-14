import { chinaEcosystemEn, chinaEcosystemZh } from "../../../../lib/china_data";
import { TechMap } from "../../../../components/members/TechMap";
import { EcosystemCategory } from "../../../../components/members/EcosystemCategory";
import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'ChinaPage' });

    return {
        title: t.raw('title').replace(/<[^>]*>/g, '') + " | YZ-RA", // Strip HTML tags for title
        description: t('subtitle'),
    };
}

export default async function ChinaPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'ChinaPage' });

    // Select the correct dataset
    const ecosystemData = locale === 'zh' ? chinaEcosystemZh : chinaEcosystemEn;

    return (
        <div className="container mx-auto px-4 py-24">
            <div className="mb-16">
                <TechMap country={locale === 'zh' ? "China" : "China"} />
            </div>

            <div className="mb-16 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-orbitron mb-6" dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
                <p className="max-w-3xl mx-auto text-lg text-gray-400">
                    {t('subtitle')}
                </p>
            </div>

            <div className="flex flex-col gap-12">
                {ecosystemData.map((category, index) => (
                    <EcosystemCategory
                        key={category.id}
                        category={category}
                        index={index}
                    />
                ))}
            </div>

            <div className="mt-24 text-center py-12 border-t border-white/10">
                <p className="text-gray-500 text-sm">
                    {locale === 'zh' ? "数据来自行业报告和联盟成员。" : "Data curated from industry reports and alliance members."}
                </p>
            </div>
        </div>
    );
}
