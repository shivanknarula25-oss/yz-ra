import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Missing Supabase URL or Service Role Key in .env.local");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const RAW_TOOLS_DATA = [
    // --- USER REQUESTED TOOLS ---
    { name: "MarketMinion", url: "https://www.marketalerts.com", desc: "Invest smarter with AI-powered stock market alerts and analysis.", pricing: "Freemium", category: "Finance" },
    { name: "Veo 4", url: "https://deepmind.google/technologies/veo/", desc: "Generate high-quality, cinematic videos with AI from Google DeepMind.", pricing: "Paid", category: "Video" },
    { name: "Cline v2.0", url: "https://cline.bot/", desc: "Open-source AI coding agent for VS Code with parallel agents and CI/CD support.", pricing: "Freemium", category: "Coding" },
    { name: "ZeroClaw", url: "https://theresanaiforthat.com/ai/zeroclaw/", desc: "Claw done right: task automation tool.", pricing: "Unknown", category: "Automation" },
    { name: "VoooAI v3.0", url: "https://voooai.com", desc: "Free unlimited AI art and video generator with natural language workflow.", pricing: "Freemium", category: "Art & Video" },
    { name: "BlogSEO v2.0", url: "https://www.blogseo.io/", desc: "Rank #1 on Google with automated SEO content and backlinks.", pricing: "Freemium", category: "SEO" },
    { name: "ClipFinder v1.5.0", url: "https://www.clipfinder.org/", desc: "Turn hours of streams and VODs into viral clips automatically with AI.", pricing: "Pay as you go", category: "Video Editing" },
    { name: "CreatOK", url: "https://theresanaiforthat.com/ai/creatok/", desc: "Turn one winning video into hundreds for TikTok e-commerce sales content.", pricing: "Freemium", category: "Marketing" },
    { name: "VidFlux", url: "https://theresanaiforthat.com/ai/vidflux/", desc: "Transform any image into stunning videos using models like Seedance and Kling.", pricing: "Paid", category: "Video" },
    { name: "AIWriteBook", url: "https://aiwritebook.com", desc: "Write, design, and publish your book from idea to KDP in hours.", pricing: "Freemium", category: "Writing" },
    { name: "patchley", url: "https://theresanaiforthat.com/ai/patchley-bpmn-ai-generator/", desc: "Turn conversations into BPMN diagrams instantly.", pricing: "Free", category: "Productivity" },
    { name: "Pullsy", url: "https://pullsy.com/", desc: "Your inbox, organized with AI-drafted replies.", pricing: "Freemium", category: "Productivity" },
    { name: "Eler", url: "https://theresanaiforthat.com/ai/eler/", desc: "Turn 3D models into photorealistic renders in seconds.", pricing: "Free", category: "3D" },
    { name: "Unify AI", url: "https://theresanaiforthat.com/ai/unify-ai/", desc: "One AI platform for all creative needs like videos.", pricing: "Freemium", category: "Creative Suite" },
    { name: "Sydium", url: "https://sydium.com/", desc: "AI clone that learns your voice and posts for you on social media.", pricing: "Freemium", category: "Social Media" },
    { name: "Knowledge Plane", url: "https://theresanaiforthat.com/ai/knowledge-plane/", desc: "Shared memory for AI agents and teams.", pricing: "Freemium", category: "Productivity" },
    { name: "CelebrityAI", url: "https://theresanaiforthat.com/ai/celebrityai/", desc: "Create AI videos and voice cloning with celebrities.", pricing: "Freemium", category: "Video" },
    { name: "Speechmatics SDK", url: "https://github.com/speechmatics", desc: "Python SDK for Speechmatics speech recognition APIs.", pricing: "Free", category: "Speech" },
    { name: "TemVideo", url: "https://temvideo.ai/", desc: "Turn images into viral video ads instantly.", pricing: "Freemium", category: "Marketing" },
    { name: "Lucid Engine", url: "https://lucidengine.tech/", desc: "Get cited by AI search engines with visibility tracking and reports.", pricing: "Unknown", category: "SEO" },
    { name: "CodeRabbit", url: "https://coderabbit.ai/", desc: "Enhanced code review with issue planner for better workflow and quality.", pricing: "Freemium", category: "Coding" },
    { name: "Notis", url: "https://notis.ai/", desc: "Your AI intern one message away from your tool stack via chat apps.", pricing: "Freemium", category: "Productivity" },
    { name: "esotericAI", url: "https://esotericai.xyz/", desc: "AI-powered tarot readings and spiritual journey insights.", pricing: "Freemium", category: "Lifestyle" },
    { name: "Rocket", url: "https://www.rocket.new/", desc: "Think It. Type It. Launch It: vibe coding for websites and apps.", pricing: "Freemium", category: "Coding" },
    { name: "Reztune", url: "https://www.reztune.com/", desc: "Instantly rewrite and format your resume for any job.", pricing: "Freemium", category: "Productivity" },

    // --- Image Generation & Editing ---
    { name: "Midjourney", url: "https://www.midjourney.com", desc: "The gold standard for high-end artistic AI imagery.", pricing: "Paid", category: "Image Gen" },
    { name: "DALL-E 3", url: "https://openai.com/dall-e-3", desc: "OpenAI’s highly controllable image generator integrated with ChatGPT.", pricing: "Paid", category: "Image Gen" },
    { name: "Stable Diffusion", url: "https://stability.ai", desc: "Open-source model for local or cloud image generation.", pricing: "Open Source", category: "Image Gen" },
    { name: "Leonardo.ai", url: "https://leonardo.ai", desc: "Production-grade platform for creative assets and fine-tuned models.", pricing: "Freemium", category: "Image Gen" },
    { name: "Canva Magic Studio", url: "https://www.canva.com", desc: "AI-powered design suite for social media and presentations.", pricing: "Freemium", category: "Design" },
    { name: "Adobe Firefly", url: "https://firefly.adobe.com", desc: "Commercially safe AI integrated into Photoshop and Illustrator.", pricing: "Paid", category: "Design" },
    { name: "Ideogram", url: "https://ideogram.ai", desc: "Industry leader in generating clear, accurate text within images.", pricing: "Freemium", category: "Image Gen" },
    { name: "Krea.ai", url: "https://www.krea.ai", desc: "Real-time AI generation and high-end image upscaling.", pricing: "Freemium", category: "Image Gen" },
    { name: "Magnific AI", url: "https://magnific.ai", desc: "The most powerful AI image upscaler and 'enhancer' on the market.", pricing: "Paid", category: "Image Editing" },
    { name: "Recraft.ai", url: "https://recraft.ai", desc: "Generates vector art and icons specifically for designers.", pricing: "Freemium", category: "Design" },
    { name: "Playground AI", url: "https://playgroundai.com", desc: "Web-based platform combining image generation and editing.", pricing: "Freemium", category: "Image Gen" },
    { name: "Remove.bg", url: "https://remove.bg", desc: "The industry standard for instant background removal.", pricing: "Freemium", category: "Image Editing" },
    { name: "ClipDrop", url: "https://clipdrop.co", desc: "Multi-tool for lighting adjustment, background removal, and cleanup.", pricing: "Freemium", category: "Image Editing" },
    { name: "Photoroom", url: "https://photoroom.com", desc: "Professional product photography generator for e-commerce.", pricing: "Freemium", category: "Image Editing" },
    { name: "VanceAI", url: "https://vanceai.com", desc: "Suite for photo enhancement, sharpening, and colorization.", pricing: "Paid", category: "Image Editing" },
    { name: "Looka", url: "https://looka.com", desc: "AI logo and brand identity generator.", pricing: "Paid", category: "Branding" },
    { name: "Khroma", url: "https://khroma.co", desc: "AI color palette generator that learns your taste.", pricing: "Free", category: "Design" },
    { name: "Uizard", url: "https://uizard.io", desc: "Converts hand-drawn sketches into editable UI designs.", pricing: "Freemium", category: "Design" },
    { name: "Pebblely", url: "https://pebblely.com", desc: "AI-generated backgrounds for product photos.", pricing: "Freemium", category: "Image Editing" },
    { name: "Stockimg.ai", url: "https://stockimg.ai", desc: "Generates stock photos, book covers, and wallpapers.", pricing: "Freemium", category: "Design" },
    { name: "Artbreeder", url: "https://www.artbreeder.com", desc: "Collages and 'breeds' images to create unique characters.", pricing: "Freemium", category: "Image Gen" },
    { name: "Vectorizer.ai", url: "https://vectorizer.ai", desc: "Converts pixels (PNG/JPG) into high-quality vectors (SVG).", pricing: "Paid", category: "Design" },
    { name: "Flair.ai", url: "https://flair.ai", desc: "AI design tool specifically for branded content and product shoots.", pricing: "Freemium", category: "Design" },
    { name: "GenCraft", url: "https://gencraft.com", desc: "Versatile art generator with various preset artistic styles.", pricing: "Freemium", category: "Art" },
    { name: "Craiyon", url: "https://www.craiyon.com", desc: "Free, simple text-to-image generator (formerly DALL-E Mini).", pricing: "Free", category: "Image Gen" },

    // --- Video Creation & Animation ---
    { name: "Runway Gen-3", url: "https://runwayml.com", desc: "High-fidelity video generation from text and images.", pricing: "Paid", category: "Video Gen" },
    { name: "Luma Dream Machine", url: "https://lumalabs.ai", desc: "Advanced video generator capable of 120fps realistic motion.", pricing: "Freemium", category: "Video Gen" },
    { name: "HeyGen", url: "https://www.heygen.com", desc: "Leading platform for AI avatars and video translation with lip-sync.", pricing: "Paid", category: "Video Gen" },
    { name: "Synthesia", url: "https://www.synthesia.io", desc: "Enterprise-grade AI avatars for training and marketing videos.", pricing: "Paid", category: "Video Gen" },
    { name: "Pika Art", url: "https://pika.art", desc: "Creative animation tool for transforming videos and memes.", pricing: "Freemium", category: "Video Gen" },
    { name: "Sora", url: "https://openai.com/sora", desc: "OpenAI’s flagship (pro-tier) realistic video generator.", pricing: "Waitlist", category: "Video Gen" },
    { name: "InVideo AI", url: "https://invideo.io", desc: "Converts a text prompt into a full video with script and stock footage.", pricing: "Freemium", category: "Video Gen" },
    { name: "Descript", url: "https://www.descript.com", desc: "Edit video by editing text; includes 'Overdub' for voice cloning.", pricing: "Freemium", category: "Video Editing" },
    { name: "Kaiber", url: "https://kaiber.ai", desc: "Generates music-synced animations and artistic transitions.", pricing: "Freemium", category: "Video Gen" },
    { name: "Kling AI", url: "https://kling.ai", desc: "High-quality video model supporting long-duration generations.", pricing: "Paid", category: "Video Gen" },
    { name: "CapCut AI", url: "https://www.capcut.com", desc: "ByteDance's video editor with script-to-video and auto-captions.", pricing: "Freemium", category: "Video Editing" },
    { name: "Pictory", url: "https://pictory.ai", desc: "Automatically turns long-form content (blogs/videos) into short clips.", pricing: "Paid", category: "Video Editing" },
    { name: "Wonder Dynamics", url: "https://wonderdynamics.com", desc: "Automatically replaces human actors with CG characters.", pricing: "Paid", category: "VFX" },
    { name: "Fliki", url: "https://fliki.ai", desc: "Text-to-video with life-like AI voices for social media.", pricing: "Freemium", category: "Video Gen" },
    { name: "Veed.io", url: "https://www.veed.io", desc: "Online video suite with auto-subtitles and AI avatars.", pricing: "Freemium", category: "Video Editing" },
    { name: "Lumen5", url: "https://lumen5.com", desc: "AI video maker for content marketing and social feeds.", pricing: "Freemium", category: "Video Gen" },
    { name: "Topaz Video AI", url: "https://www.topazlabs.com/topaz-video-ai", desc: "World-class video upscaling, de-interlacing, and stabilization.", pricing: "Paid", category: "Video Editing" },
    { name: "D-ID", url: "https://www.d-id.com", desc: "Animates portraits to make them talk with AI voices.", pricing: "Paid", category: "Video Gen" },
    { name: "Elai.io", url: "https://elai.io", desc: "Create AI videos from text for corporate training.", pricing: "Paid", category: "Video Gen" },
    { name: "Captions.ai", url: "https://www.captions.ai", desc: "Studio-grade captions and AI-powered eye contact correction.", pricing: "Freemium", category: "Video Editing" },
    { name: "Mojo", url: "https://mojo-app.com", desc: "AI-powered mobile app for high-end social media stories.", pricing: "Freemium", category: "Social Media" },
    { name: "Deepbrain AI", url: "https://www.deepbrain.io", desc: "Realistic human-like AI avatars for quick video production.", pricing: "Paid", category: "Video Gen" },
    { name: "Colossyan", url: "https://www.colossyan.com", desc: "AI video creator focused on workplace learning and diversity.", pricing: "Paid", category: "Video Gen" },
    { name: "Hour One", url: "https://hourone.ai", desc: "Converts news or scripts into video with virtual presenters.", pricing: "Paid", category: "Video Gen" },
    { name: "Munch", url: "https://www.getmunch.com", desc: "AI tool that extracts the most viral moments from long-form videos.", pricing: "Paid", category: "Video Editing" },

    // --- Writing & Productivity ---
    { name: "ChatGPT", url: "https://chat.openai.com", desc: "The primary AI assistant for text, code, and reasoning.", pricing: "Freemium", category: "Chatbot" },
    { name: "Claude", url: "https://claude.ai", desc: "Anthropic's assistant known for high-quality coding and writing.", pricing: "Freemium", category: "Chatbot" },
    { name: "Perplexity AI", url: "https://www.perplexity.ai", desc: "AI-powered search engine that cites real-time sources.", pricing: "Freemium", category: "Search" },
    { name: "Gamma", url: "https://gamma.app", desc: "Generates beautiful presentations and websites from a text prompt.", pricing: "Freemium", category: "Productivity" },
    { name: "Jasper", url: "https://www.jasper.ai", desc: "Enterprise-grade AI marketing and copywriting suite.", pricing: "Paid", category: "Writing" },
    { name: "Copy.ai", url: "https://www.copy.ai", desc: "Automation platform for sales and marketing workflows.", pricing: "Freemium", category: "Writing" },
    { name: "Notion AI", url: "https://www.notion.so", desc: "Integrated assistant for documents, projects, and summaries.", pricing: "Paid", category: "Productivity" },
    { name: "Cursor", url: "https://cursor.sh", desc: "An AI-native code editor that understands your entire codebase.", pricing: "Freemium", category: "Coding" },
    { name: "Lovable", url: "https://lovable.dev", desc: "Full-stack app builder that creates web apps from prompts.", pricing: "Paid", category: "Coding" },
    { name: "Bolt.new", url: "https://bolt.new", desc: "Instant full-stack web development in the browser with AI.", pricing: "Free", category: "Coding" },
    { name: "Quillbot", url: "https://quillbot.com", desc: "The most popular AI paraphraser and grammar checker.", pricing: "Freemium", category: "Writing" },
    { name: "Grammarly", url: "https://www.grammarly.com", desc: "AI writing assistant for clarity, tone, and correctness.", pricing: "Freemium", category: "Writing" },
    { name: "Typefully", url: "https://typefully.com", desc: "AI writing and scheduling tool for X (Twitter) and Threads.", pricing: "Freemium", category: "Social Media" },
    { name: "Feedly Leo", url: "https://feedly.com", desc: "AI research assistant that filters news for specific topics.", pricing: "Paid", category: "Productivity" },
    { name: "HeWrites", url: "https://hewrites.com", desc: "AI tool for managing professional email communication.", pricing: "Paid", category: "Writing" },
    { name: "Hugging Face", url: "https://huggingface.co", desc: "The central hub for open-source AI models and demos.", pricing: "Open Source", category: "Dev Tools" },
    { name: "GitHub Copilot", url: "https://github.com/features/copilot", desc: "AI pair programmer integrated into VS Code and other IDEs.", pricing: "Paid", category: "Coding" },
    { name: "Replit Agent", url: "https://replit.com", desc: "Builds and deploys software directly from your natural language.", pricing: "Paid", category: "Coding" },
    { name: "WriteSonic", url: "https://writesonic.com", desc: "AI writing tool specialized in SEO and blog content.", pricing: "Freemium", category: "Writing" },
    { name: "Surfer SEO", url: "https://surferseo.com", desc: "AI content optimization tool to help pages rank on Google.", pricing: "Paid", category: "SEO" },
    { name: "Tldraw Make Real", url: "https://makereal.tldraw.com", desc: "Turns hand-drawn wireframes into functional code.", pricing: "Free", category: "Design" },
    { name: "Superhuman", url: "https://superhuman.com", desc: "AI-powered email client designed for speed.", pricing: "Paid", category: "Productivity" },
    { name: "Shortwave", url: "https://www.shortwave.com", desc: "AI email assistant that prioritizes and summarizes your inbox.", pricing: "Freemium", category: "Productivity" },
    { name: "Dante AI", url: "https://dante-ai.com", desc: "Create custom AI chatbots trained on your own data.", pricing: "Freemium", category: "Chatbot" },
    { name: "Framer AI", url: "https://www.framer.com", desc: "Design and publish professional websites from a prompt.", pricing: "Freemium", category: "Design" }
];

async function seedTools() {
    console.log(`Starting to seed ${RAW_TOOLS_DATA.length} tools...`);
    let count = 0;

    for (const tool of RAW_TOOLS_DATA) {
        // Upsert based on name
        const { error } = await supabase
            .from('ai_tools')
            .upsert({
                name: tool.name,
                url: tool.url,
                description: tool.desc,
                category: tool.category,
                pricing_model: tool.pricing,
                tags: [tool.category, tool.pricing], // Simple tags for now
                image_url: `https://logo.clearbit.com/${new URL(tool.url).hostname}` // Auto-fetch logo
            } as any, { onConflict: 'name' });

        if (error) {
            console.error(`Failed to insert ${tool.name}:`, error.message);
        } else {
            // console.log(`Processed: ${tool.name}`);
            count++;
        }
    }

    console.log(`Successfully seeded ${count} tools.`);
}

seedTools();
