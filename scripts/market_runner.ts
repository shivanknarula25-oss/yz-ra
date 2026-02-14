
interface MarketIndex {
    name: string;
    value: number;
    change: number;
    trend: 'up' | 'down' | 'neutral';
}

const INDICES: MarketIndex[] = [
    { name: 'ICRA Robotics Select', value: 4250.32, change: +1.25, trend: 'up' },
    { name: 'China Robot Index', value: 1289.45, change: -0.42, trend: 'down' },
    { name: 'Global Automation ETF', value: 89.21, change: +0.05, trend: 'neutral' },
    { name: 'AI & Robotics', value: 3120.10, change: +2.89, trend: 'up' }
];

export const getMarketData = async () => {
    // Simulate real-time fluctuation
    return INDICES.map(idx => ({
        ...idx,
        value: parseFloat((idx.value + (Math.random() - 0.5) * 10).toFixed(2)),
        change: parseFloat((idx.change + (Math.random() - 0.5) * 0.5).toFixed(2))
    }));
};

// Start simulation loop if run directly
if (require.main === module) {
    console.log("AGI AGENT: Initiating Market Data Stream...");
    setInterval(async () => {
        const data = await getMarketData();
        console.clear();
        console.table(data);
        console.log(`Last Update: ${new Date().toLocaleTimeString()}`);
    }, 3000);
}
