
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyTools() {
    console.log('Verifying ai_tools table...');

    try {
        const { data, error, count } = await supabase
            .from('ai_tools')
            .select('*', { count: 'exact' });

        if (error) {
            console.error('Error fetching tools:', error);
        } else {
            console.log(`Found ${count} tools in the database.`);
            if (data && data.length > 0) {
                console.log('Sample tool:', data[0].name);
            } else {
                console.log('No data found in returned rows.');
            }
        }
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

verifyTools();
