-- Create industry_reports table
CREATE TABLE IF NOT EXISTS industry_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    summary TEXT,
    cover_image TEXT,
    download_url TEXT,
    published_date TIMESTAMPTZ DEFAULT NOW(),
    category TEXT
);

-- Create industry_cases table
CREATE TABLE IF NOT EXISTS industry_cases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    company_name TEXT,
    industry TEXT,
    outcome TEXT,
    image_url TEXT,
    published_date TIMESTAMPTZ DEFAULT NOW()
);

-- Create industry_standards table
CREATE TABLE IF NOT EXISTS industry_standards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT NOT NULL,
    title TEXT NOT NULL,
    status TEXT DEFAULT 'Active',
    region TEXT,
    effective_date DATE
);
