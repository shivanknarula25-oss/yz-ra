
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase environment variables (Need SERVICE_ROLE_KEY for seeding).');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const events = [
    {
        name: "CES 2025",
        description: "The most powerful tech event in the world, featuring the latest in robotics and AI.",
        location: "Las Vegas, NV, USA",
        start_date: "2025-01-07",
        end_date: "2025-01-10",
        url: "https://www.ces.tech/",
        category: "Expo",
        logo_url: "https://logo.clearbit.com/ces.tech"
    },
    {
        name: "KROS 2025",
        description: "Korean Robotics Society Annual Conference focusing on Embodied Intelligence.",
        location: "Gangwon-do, South Korea",
        start_date: "2025-02-12",
        end_date: "2025-02-15",
        url: "https://www.kros.org/",
        category: "Conference",
        logo_url: "https://logo.clearbit.com/kros.org"
    },
    {
        name: "NVIDIA GTC 2025",
        description: "The #1 AI Conference for developers, featuring huge announcements in robotics simulation (Isaac).",
        location: "San Jose, CA, USA",
        start_date: "2025-03-17",
        end_date: "2025-03-21",
        url: "https://www.nvidia.com/gtc/",
        category: "Conference",
        logo_url: "https://logo.clearbit.com/nvidia.com"
    },
    {
        name: "European Robotics Forum (ERF) 2025",
        description: "The most influential meeting of the robotics community in Europe.",
        location: "Stuttgart, Germany",
        start_date: "2025-03-25",
        end_date: "2025-03-27",
        url: "https://www.eu-robotics.net/",
        category: "Forum",
        logo_url: "https://logo.clearbit.com/eu-robotics.net"
    },
    {
        name: "Robotics Summit & Expo",
        description: "Dedicated to the design, development, manufacture and delivery of commercial robotics.",
        location: "Boston, MA, USA",
        start_date: "2025-04-30",
        end_date: "2025-05-01",
        url: "https://www.roboticssummit.com/",
        category: "Expo",
        logo_url: "https://logo.clearbit.com/roboticssummit.com"
    },
    {
        name: "Automate 2025",
        description: "The largest solutions-based automation showcase in North America.",
        location: "Detroit, MI, USA",
        start_date: "2025-05-12",
        end_date: "2025-05-15",
        url: "https://www.automateshow.com/",
        category: "Expo",
        logo_url: "https://logo.clearbit.com/automateshow.com"
    },
    {
        name: "ICRA 2025",
        description: "IEEE International Conference on Robotics and Automation. The flagship conference of the year.",
        location: "Atlanta, GA, USA",
        start_date: "2025-05-19",
        end_date: "2025-05-23",
        url: "https://2025.ieee-icra.org/",
        category: "Conference",
        logo_url: "https://logo.clearbit.com/ieee.org"
    },
    {
        name: "Robotics: Science and Systems (RSS) 2025",
        description: "A single-track conference connecting the research community.",
        location: "Los Angeles, CA, USA",
        start_date: "2025-06-21",
        end_date: "2025-06-25",
        url: "https://roboticsconference.org/",
        category: "Conference",
        logo_url: "https://logo.clearbit.com/roboticsconference.org"
    },
    {
        name: "IROS 2025",
        description: "IEEE/RSJ International Conference on Intelligent Robots and Systems.",
        location: "Hangzhou, China",
        start_date: "2025-10-19",
        end_date: "2025-10-25",
        url: "https://www.iros2025.org/",
        category: "Conference",
        logo_url: "https://logo.clearbit.com/ieee.org"
    },
    {
        name: "ICML 2025",
        description: "International Conference on Machine Learning, heavily featuring robot learning.",
        location: "Vancouver, Canada",
        start_date: "2025-07-13",
        end_date: "2025-07-19",
        url: "https://icml.cc/",
        category: "Conference",
        logo_url: "https://logo.clearbit.com/icml.cc"
    }
];

async function seedEvents() {
    console.log(`Starting to seed ${events.length} events...`);

    for (const event of events) {
        const { error } = await supabase
            .from('events')
            .upsert(event, { onConflict: 'name' });

        if (error) {
            console.error(`Error upserting ${event.name}:`, error);
        } else {
            console.log(`Upserted: ${event.name}`);
        }
    }

    console.log('Seeding complete.');
}

seedEvents();
