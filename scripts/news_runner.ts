import { config } from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Load env vars
config({ path: path.resolve(__dirname, '../.env.local') });

async function main() {
    console.log("Starting News Agent (CLI)...");

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
        console.error("ERROR: Missing SUPABASE_SERVICE_ROLE_KEY or URL.");
        console.error("Please add SUPABASE_SERVICE_ROLE_KEY to your .env.local file to allow admin writes.");
        process.exit(1);
    }

    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    });

    try {
        const { runNewsAgent } = await import('../lib/news_agent');
        const result = await runNewsAgent(adminClient);
        console.log("Agent Completed Successfully.");
        console.log(`Processed: ${result.count} articles.`);
    } catch (error) {
        console.error("Agent Failed:", error);
        process.exit(1);
    }
}

main();
