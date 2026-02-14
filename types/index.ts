export interface CompanyType {
    id: number;
    name: string;
}

export interface Company {
    id: number;
    name: string;
    logo_url?: string;
    description?: string;
    website_url?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    founded_year?: number;
    employee_count?: string;
    primary_type_id?: number;
    company_type?: CompanyType; // Joined relation
    created_at: string;
}

export type NewsCountryFocus = 'India' | 'China' | 'Both' | 'Global';
export type NewsCategory = 'Industrial' | 'Humanoid' | 'Defense' | 'Warehouse' | 'AI' | 'Policy' | 'Funding';
export type NewsStatus = 'Draft' | 'Published' | 'Archived';

export interface RoboticsNews {
    id: number;
    headline: string;
    slug: string;
    summary: string;
    article_body: string;
    country_focus: NewsCountryFocus;
    category: NewsCategory;
    strategic_importance: number;
    relevance_score: number;
    credibility_score: number;
    recency_score: number;
    total_score: number;
    source_name: string;
    source_url: string;
    seo_keywords: string[];
    published_date: string;
    status: NewsStatus;
    confidence_score: number;
    created_at: string;
}
