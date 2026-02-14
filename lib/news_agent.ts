import { supabase as defaultSupabase } from './supabase';
import { RoboticsNews, NewsCategory, NewsCountryFocus } from '../types';
import { SupabaseClient } from '@supabase/supabase-js';

import Parser from 'rss-parser';

const parser = new Parser();

const RSS_FEEDS = [
    { url: 'https://news.google.com/rss/search?q=robotics+china+OR+humanoid+robot+china&hl=en-US&gl=US&ceid=US:en', country: 'China' },
    { url: 'https://news.google.com/rss/search?q=robotics+india+OR+drone+india+defense&hl=en-US&gl=US&ceid=US:en', country: 'India' }
];

// Accept optional client (for admin/service role usage)
export const runNewsAgent = async (client?: SupabaseClient) => {
    const supabase = client || defaultSupabase;
    console.log("AGI AGENT: Initiating Real-Time News Cycle...");

    let processedCount = 0;

    for (const feed of RSS_FEEDS) {
        try {
            const feedData = await parser.parseURL(feed.url);

            for (const item of feedData.items) {
                if (!item.title || !item.link) continue;

                const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 100);
                const { data: existing } = await supabase.from('robotics_news').select('id').eq('slug', slug).single();

                if (existing) {
                    // console.log(`Skipping duplicate: ${slug}`);
                    continue;
                }

                // Random score simulation for "AI Analysis"
                const relevance = Math.floor(Math.random() * 2) + 3;
                const strategic = Math.floor(Math.random() * 3) + 2;
                const total_score = relevance + strategic + 8; // Baseline high for real news

                const article: Partial<RoboticsNews> = {
                    headline: item.title,
                    slug: slug,
                    summary: item.contentSnippet || item.content || "No summary available.",
                    article_body: item.content || item.contentSnippet || "",
                    country_focus: feed.country as NewsCountryFocus,
                    category: "Industrial", // Default, could be refined with keywords
                    relevance_score: relevance,
                    strategic_importance: strategic,
                    credibility_score: 5,
                    recency_score: 5,
                    source_name: item.creator || "Google News",
                    source_url: item.link,
                    published_date: item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString(),
                    status: 'Published',
                    confidence_score: 85,
                    seo_keywords: ['Robotics', feed.country, 'News', 'Automation']
                };

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const { error } = await supabase.from('robotics_news').insert(article as any);
                if (error) {
                    console.error("Error publishing article:", error.message);
                } else {
                    console.log(`PUBLISHED: ${article.headline}`);
                    processedCount++;
                }
            }
        } catch (error) {
            console.error(`Error fetching feed ${feed.url}:`, error);
        }
    }

    return { success: true, count: processedCount };
};

export const getNews = async () => {
    const { data, error } = await defaultSupabase
        .from('robotics_news')
        .select('*')
        .eq('status', 'Published')
        .order('published_date', { ascending: false });

    if (error) {
        console.error("Error fetching news:", error);
        return [];
    }
    return data as RoboticsNews[];
};
