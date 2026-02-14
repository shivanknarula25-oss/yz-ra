-- Create table for AI Tools
CREATE TABLE IF NOT EXISTS ai_tools (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    url TEXT,
    category TEXT,
    pricing_model TEXT,
    tags TEXT[],
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE ai_tools ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON ai_tools
    FOR SELECT USING (true);

-- Allow authenticated insert/update (for admin/seed script)
CREATE POLICY "Allow authenticated insert" ON ai_tools
    FOR INSERT WITH CHECK (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update" ON ai_tools
    FOR UPDATE USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');
