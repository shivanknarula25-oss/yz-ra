import Parser from 'rss-parser';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const parser = new Parser();

const KEYWORDS = ['Robotics Success Story', 'Automation Case Study', 'Robot Implementation Result'];
const RSS_URL = `https://news.google.com/rss/search?q=${encodeURIComponent(KEYWORDS.join(' OR '))}&hl=en-US&gl=US&ceid=US:en`;

interface IndustryCase {
    title: string;
    company_name: string;
    industry: string;
    outcome: string;
    image_url: string;
    published_date: string;
}

export async function fetchCaseStudies() {
    console.log('SEARCHING FOR SUCCESS STORIES...');
    try {
        const feed = await parser.parseURL(RSS_URL);
        const cases: IndustryCase[] = [];

        for (const item of feed.items) {
            // Basic filtering for high-quality items
            if (!item.title || !item.link) continue;

            // Mock extraction of "Outcome" and "Industry" from snippets (Real AI extraction would go here)
            // For now, we simulate extraction based on title/snippet
            const outcomeMatch = item.contentSnippet?.match(/(\d+%|increase|saved|reduced)/i);
            const outcome = outcomeMatch ? `Achieved ${outcomeMatch[0]} improvement` : 'Efficiency boosted significantly';

            const industry = item.title.includes('Healthcare') ? 'Healthcare' :
                item.title.includes('Auto') ? 'Automotive' :
                    item.title.includes('Logistics') ? 'Logistics' : 'Manufacturing';

            cases.push({
                title: item.title,
                company_name: item.creator || 'Industry Leader',
                industry: industry,
                outcome: outcome,
                image_url: `https://source.unsplash.com/800x600/?robot,${industry}`, // Fallback placeholder
                published_date: item.pubDate || new Date().toISOString()
            });
        }

        console.log(`Found ${cases.length} potential cases.`);

        // Upsert into Supabase
        for (const c of cases.slice(0, 5)) { // Limit to top 5
            const { error } = await supabase
                .from('industry_cases')
                .upsert({
                    title: c.title,
                    company_name: c.company_name,
                    industry: c.industry,
                    outcome: c.outcome,
                    image_url: c.image_url,
                    published_date: c.published_date
                }, { onConflict: 'title' });

            if (error) console.error('Error inserting case:', error.message);
            else console.log(`Saved Case: ${c.title.substring(0, 50)}...`);
        }

    } catch (error) {
        console.error('Error fetching cases:', error);
    }
}
