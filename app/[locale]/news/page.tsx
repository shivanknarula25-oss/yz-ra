import { getNews } from "../../../lib/news_agent";
import { NeuralNewsStream } from "../../../components/news/NeuralNewsStream";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Neural News | YZ-RA",
    description: "AI-curated robotics intelligence stream.",
};

export default async function NewsPage() {
    const initialNews = await getNews();

    return (
        <div className="min-h-screen bg-black pt-24 pb-12">
            <div className="container mx-auto px-4 mb-12">
                <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 font-orbitron tracking-tighter mb-4">
                    NEURAL STREAM
                </h1>
                <p className="text-gray-400 max-w-2xl text-lg border-l-2 border-red-500 pl-4 py-2">
                    Autonomous intelligence agent monitoring global robotics developments.
                    Focus: <span className="text-white font-bold">India & China</span>.
                </p>
            </div>

            <NeuralNewsStream initialNews={initialNews} />
        </div>
    );
}
