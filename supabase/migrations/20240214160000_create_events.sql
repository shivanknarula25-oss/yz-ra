-- Create table for Events
CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    location TEXT,
    start_date DATE,
    end_date DATE,
    url TEXT,
    category TEXT, -- Conference, Expo, Webinar
    logo_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON events
    FOR SELECT USING (true);

-- Allow authenticated insert/update (for admin/seed script)
CREATE POLICY "Allow authenticated insert" ON events
    FOR INSERT WITH CHECK (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update" ON events
    FOR UPDATE USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');
