import { supabase } from './supabase';
import { Company, CompanyType } from '../types';

export const getCompanies = async (typeId?: number, country?: string): Promise<Company[]> => {
    let query = supabase
        .from('companies')
        .select(`
      *,
      company_type:primary_type_id (
        id,
        name
      )
    `);

    if (typeId) {
        query = query.eq('primary_type_id', typeId);
    }

    if (country) {
        // Case insensitive search or exact match
        query = query.ilike('country', `%${country}%`);
    }

    const { data, error } = await query;

    if (error) {
        // console.warn('Supabase error fetching companies (using fallback):', error.message);
        // Fallback to dummy data if table doesn't exist or other error
        return getDummyCompanies(typeId, country);
    }

    // If no data (table empty), return dummy data for development
    if (!data || data.length === 0) {
        return getDummyCompanies(typeId, country);
    }

    return data as unknown as Company[];
};

export const getCompanyTypes = async (): Promise<CompanyType[]> => {
    const { data, error } = await supabase
        .from('company_types')
        .select('*')
        .order('name');

    if (error) {
        // console.warn('Supabase error fetching company types (using fallback):', error.message);
        return [
            { id: 1, name: 'Robotics Company' },
            { id: 2, name: 'Integrator' },
            { id: 3, name: 'Component Supplier' },
            { id: 4, name: 'Service Provider' },
            { id: 5, name: 'Startup' },
            { id: 6, name: 'Other' },
        ];
    }

    if (!data || data.length === 0) {
        return [
            { id: 1, name: 'Robotics Company' }, // Changed from 'Manufacturer' to better fit user request
            { id: 2, name: 'Integrator' },
            { id: 3, name: 'Component Supplier' },
            { id: 4, name: 'Service Provider' },
            { id: 5, name: 'Startup' }, // Added for startups
            { id: 6, name: 'Other' },
        ];
    }

    return data as CompanyType[];
};

export const getCompanyById = async (id: number): Promise<Company | null> => {
    const { data, error } = await supabase
        .from('companies')
        .select(`
            *,
            company_type:primary_type_id (
                id,
                name
            )
        `)
        .eq('id', id)
        .single();

    if (error) {
        // Fallback to dummy data
        const dummy = getDummyCompanies().find(c => c.id === id);
        if (dummy) return dummy;

        console.error(`Error fetching company ${id}:`, error);
        return null;
    }

    return data as unknown as Company;
}

// Dummy data generator with real Indian companies
const getDummyCompanies = (typeId?: number, country?: string): Company[] => {
    const allCompanies: Company[] = [
        // Robotics Companies (ID 1)
        {
            id: 1,
            name: "GreyOrange",
            primary_type_id: 1,
            company_type: { id: 1, name: "Robotics Company" },
            description: "Global leader in AI-driven warehouse robotics, AGVs, and sortation systems for supply chain automation.",
            city: "Gurugram",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 2,
            name: "Addverb Technologies",
            primary_type_id: 1,
            company_type: { id: 1, name: "Robotics Company" },
            description: "Major Indian robotics & automation firm specializing in warehouse automation, AMRs/AGVs, and industrial robotics; recently unveiled a wheeled humanoid robot, Elixis-W.",
            city: "Noida",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 3,
            name: "TAL Manufacturing Solutions",
            primary_type_id: 1,
            company_type: { id: 1, name: "Robotics Company" },
            description: "Built India’s first industrial articulated robot and provides industrial robotic arms & solutions as part of the Tata Group.",
            city: "Pune",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 4,
            name: "Systemantics",
            primary_type_id: 1,
            company_type: { id: 1, name: "Robotics Company" },
            description: "One of India’s oldest industrial robotics companies, offering robots for welding, material handling, and assembly.",
            city: "Bangalore",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 5,
            name: "Sastra Robotics",
            primary_type_id: 1,
            company_type: { id: 1, name: "Robotics Company" },
            description: "Robotics firm known for AI-based robotic test automation solutions used in electronics, automotive, and healthcare.",
            city: "Kochi",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 6,
            name: "Invento Robotics",
            primary_type_id: 5, // Startup
            company_type: { id: 5, name: "Startup" },
            description: "Designs service and humanoid robots (e.g., Mitra) used in retail, hospitality, healthcare, and customer engagement.",
            city: "Bangalore",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 7,
            name: "Gridbots Technologies",
            primary_type_id: 1,
            company_type: { id: 1, name: "Robotics Company" },
            description: "Ahmedabad-based robotics company developing AI-enabled robots for inspection, surveillance, material handling, and specialized applications.",
            city: "Ahmedabad",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 8,
            name: "Miko",
            primary_type_id: 5, // Startup
            company_type: { id: 5, name: "Startup" },
            description: "Consumer robotics creator of AI-powered companion robots aimed at children’s education and interaction.",
            city: "Mumbai",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 9,
            name: "Genrobotics",
            primary_type_id: 5, // Startup
            company_type: { id: 5, name: "Startup" },
            description: "Kerala-based robotics startup building sanitation and cleantech robots (e.g., Bandicoot manhole cleaning robot) for safer industrial and municipal operations.",
            city: "Trivandrum",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 10,
            name: "CynLr",
            primary_type_id: 5, // Startup
            company_type: { id: 5, name: "Startup" },
            description: "Bengaluru-based startup building advanced robot vision and manipulation systems for industrial automation.",
            city: "Bangalore",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 11,
            name: "Planys Technologies",
            primary_type_id: 5,
            company_type: { id: 5, name: "Startup" },
            description: "Chennai startup focused on underwater robotics (ROVs/AUVs) for industrial inspection and defense applications.",
            city: "Chennai",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 12,
            name: "Unbox Robotics",
            primary_type_id: 5,
            company_type: { id: 5, name: "Startup" },
            description: "Pune-based company creating sorting and warehouse robotics for logistics automation.",
            city: "Pune",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 13,
            name: "Asteria Aerospace",
            primary_type_id: 1,
            company_type: { id: 1, name: "Robotics Company" },
            description: "Bengaluru-based robotics & AI company focused on drone systems and aerospace robotics.",
            city: "Bangalore",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 14,
            name: "Hi-Tech Robotic Systemz",
            primary_type_id: 1,
            company_type: { id: 1, name: "Robotics Company" },
            description: "Robotics and autonomous mobility solutions provider serving automotive, defense, and industrial sectors.",
            city: "Gurugram",
            country: "India",
            created_at: new Date().toISOString()
        },

        {
            id: 25,
            name: "Siasun Robot & Automation",
            primary_type_id: 1,
            company_type: { id: 1, name: "Robotics Company" },
            description: "Leading Chinese robotics company producing industrial robots, AGVs, and service robots.",
            city: "Shenyang",
            country: "China",
            created_at: new Date().toISOString()
        },
        {
            id: 26,
            name: "Estun Automation",
            primary_type_id: 1,
            company_type: { id: 1, name: "Robotics Company" },
            description: "Major Chinese manufacturer of industrial robots and servo systems.",
            city: "Nanjing",
            country: "China",
            created_at: new Date().toISOString()
        },
        {
            id: 27,
            name: "DJI",
            primary_type_id: 1,
            company_type: { id: 1, name: "Robotics Company" },
            description: "Global leader in civilian drones and aerial imaging technology.",
            city: "Shenzhen",
            country: "China",
            created_at: new Date().toISOString()
        },
        {
            id: 28,
            name: "Unitree Robotics",
            primary_type_id: 1,
            company_type: { id: 1, name: "Robotics Company" },
            description: "Famous for high-performance quadruped robots and humanoid robots.",
            city: "Hangzhou",
            country: "China",
            created_at: new Date().toISOString()
        },

        // Integrators (ID 2)
        {
            id: 15,
            name: "IRTI Robotics",
            primary_type_id: 2,
            company_type: { id: 2, name: "Integrator" },
            description: "Leading Indian robotic system integrator delivering end-to-end industrial automation and robotics integration solutions.",
            city: "Pune",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 16,
            name: "Kadence Automation",
            primary_type_id: 2,
            company_type: { id: 2, name: "Integrator" },
            description: "Provides robotics integration, material handling, robotic welding, palletizing, and cobot solutions.",
            city: "New Delhi",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 17,
            name: "Samarthan Systems",
            primary_type_id: 2,
            company_type: { id: 2, name: "Integrator" },
            description: "Specializes in automated assembly and robotics systems integration, including welding, pick-and-place, and material handling robots.",
            city: "Ghaziabad",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 18,
            name: "Intech Robots",
            primary_type_id: 2,
            company_type: { id: 2, name: "Integrator" },
            description: "Offers robotics integration, programming, custom cell design, machine tending, and vision-guided systems for manufacturing.",
            city: "Chennai",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 19,
            name: "Integrated Robo Solutions",
            primary_type_id: 2,
            company_type: { id: 2, name: "Integrator" },
            description: "Manufacturer and integrator of robotic systems, welding systems, gantry robots, pick-and-place solutions, and turnkey automation projects.",
            city: "Pune",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 20,
            name: "Wipro PARI",
            primary_type_id: 2,
            company_type: { id: 2, name: "Integrator" },
            description: "Automation division providing integrated robotics, assembly systems, and turnkey automation solutions for manufacturing environments.",
            city: "Pune",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 21,
            name: "ABB India",
            primary_type_id: 2,
            company_type: { id: 2, name: "Integrator" },
            description: "Global robotics & automation leader with integration of industrial robots, control systems, and software.",
            city: "Bangalore",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 22,
            name: "Siemens India",
            primary_type_id: 2,
            company_type: { id: 2, name: "Integrator" },
            description: "Integrated automation and robotics solutions aligned with Industry 4.0, digital factory platforms, and system integration expertise.",
            city: "Mumbai",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 23,
            name: "DiFACTO Robotics",
            primary_type_id: 2,
            company_type: { id: 2, name: "Integrator" },
            description: "Industrial robotics integrator & automation solutions provider in manufacturing.",
            city: "Bangalore",
            country: "India",
            created_at: new Date().toISOString()
        },
        {
            id: 24,
            name: "Svaya Robotics",
            primary_type_id: 2,
            company_type: { id: 2, name: "Integrator" },
            description: "Develops collaborative and industrial robotic integration solutions.",
            city: "Hyderabad",
            country: "India",
            created_at: new Date().toISOString()
        }
    ];

    let result = allCompanies;

    if (typeId) {
        result = result.filter(c => c.primary_type_id === typeId);
    }

    if (country) {
        result = result.filter(c => c.country?.toLowerCase().includes(country.toLowerCase()));
    }

    return result;
}
