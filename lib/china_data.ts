export interface ChinaEcosystemCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    subcategories: {
        name: string;
        companies: string[];
    }[];
}

export const chinaEcosystemEn: ChinaEcosystemCategory[] = [
    {
        id: "whole-machine",
        title: "Whole-Machine Manufacturers",
        description: "Companies building the actual robots and autonomous vehicles (AGV/AMR/Forklifts).",
        icon: "Bot",
        subcategories: [
            {
                name: "Intelligent Forklifts",
                companies: [
                    "Zhejiang Zhongli Machinery",
                    "Zhejiang Hangcha Intelligent",
                    "Linde China Forklift",
                    "Heli Industrial Vehicle",
                    "Jungheinrich Forklift",
                    "Shaoguan BYD Industrial"
                ]
            },
            {
                name: "Mobile Robots (AMR/AGV)",
                companies: [
                    "Hangzhou Hikvision Robot",
                    "Beijing Jizhijia (Geek+)",
                    "Shenzhen Hairou Innovation (Hai Robotics)",
                    "Shanghai Kuaicang (Quicktron)",
                    "Standard Robot (Shenzhen)",
                    "Guozi Robot"
                ]
            },
            {
                name: "Specialized/Heavy Duty",
                companies: [
                    "Shenzhen Ruilangte (Explosion-proof)",
                    "Aegis Explosion-proof",
                    "Yunnan Kunchuan (Heavy Load)",
                    "Henan Weite Robot"
                ]
            },
            {
                name: "Service & Humanoid",
                companies: [
                    "Shenzhen UBTECH Technology",
                    "Beijing Orion Star Technology",
                    "Hangzhou Xiaowu Intelligent"
                ]
            }
        ]
    },
    {
        id: "components",
        title: "Core Components & Hardware",
        description: "The 'organs' of the robot: motors, batteries, and sensors.",
        icon: "Cpu",
        subcategories: [
            {
                name: "LiDAR & Vision",
                companies: [
                    "Shenzhen Suteng Juchuang (RoboSense)",
                    "Shanghai Tuyang Information",
                    "Shenzhen Lanwo Technology (Livox)",
                    "Lloyd's Sensor Technology"
                ]
            },
            {
                name: "Encoders & Controls",
                companies: [
                    "Kübler (Beijing) Automation",
                    "Shandong Keli Optoelectronic",
                    "Zhejiang Kecong Control"
                ]
            },
            {
                name: "Batteries",
                companies: [
                    "Fudi Battery (BYD)",
                    "Xingsheng Power",
                    "Zhuhai Penghui Energy",
                    "Yixing Fahm Industrial Battery"
                ]
            },
            {
                name: "Charging Solutions",
                companies: [
                    "Zhonghui Chuangzhi (Wireless Charging)",
                    "Guangdong Titan Intelligent Power",
                    "Enyida Power Technology"
                ]
            },
            {
                name: "Mechanical Transmission",
                companies: [
                    "Zhejiang Bomeng Precision Bearing",
                    "Zibo Newcastle Dart Planetary Reducer",
                    "Hubei Kefeng Intelligent Transmission",
                    "Jiangsu Wanda Special Bearing",
                    "Jiangsu Shenpai Universal Wheel",
                    "Zhongshan Xiangrong Caster",
                    "Quanzhou Zhuoye Manganese Steel Caster"
                ]
            }
        ]
    },
    {
        id: "intelligence",
        title: "Intelligence, Software & AI",
        description: "The 'brains' of the operation, focusing on navigation and fleet management.",
        icon: "BrainCircuit",
        subcategories: [
            {
                name: "Navigation & AI",
                companies: [
                    "Hinton Artificial Intelligence",
                    "Shanghai Vision Zongheng",
                    "Kudan Inc. (SLAM)",
                    "Shenzhen Institute of Artificial Intelligence and Robotics"
                ]
            },
            {
                name: "Computing Hardware",
                companies: [
                    "Intel (China)",
                    "Qualcomm Wireless",
                    "ADLINK Technology",
                    "Advantech Xingye Electronic",
                    "Shenzhen Zhiwei Intelligent"
                ]
            },
            {
                name: "Connectivity (5G/IoT)",
                companies: [
                    "ZTE Corporation",
                    "Huawei Technology",
                    "Shenzhen Hongdian Technology",
                    "Lierda Technology Group"
                ]
            }
        ]
    },
    {
        id: "integration",
        title: "Integration, Logistics & End-Users",
        description: "Companies deploying robots or providing full-scale automated warehouse designs.",
        icon: "Network",
        subcategories: [
            {
                name: "System Integrators",
                companies: [
                    "BlueSword Intelligent",
                    "Kunshan Tongri Intelligent",
                    "Shanxi Dongjie Intelligent Logistics",
                    "Dematic International Trade"
                ]
            },
            {
                name: "End-Users (Honorary Directors)",
                companies: [
                    "Foxconn (Manufacturing)",
                    "Yunda Express (Logistics)",
                    "BYD Automobile (Automotive)",
                    "Samsung Display (Electronics)",
                    "Sinotrans Logistics"
                ]
            },
            {
                name: "Testing & Certification",
                companies: [
                    "Rheinland Technical Supervision (TÜV)",
                    "Ward Testing (Guangdong)",
                    "Nande Certification (TÜV SÜD)"
                ]
            }
        ]
    }
];

export const chinaEcosystemZh: ChinaEcosystemCategory[] = [ // Added Chinese data
    {
        id: "whole-machine",
        title: "整机制造商",
        description: "制造实际机器人和自动驾驶车辆（AGV/AMR/叉车）的公司。",
        icon: "Bot",
        subcategories: [
            {
                name: "智能叉车",
                companies: [
                    "浙江中力机械",
                    "浙江杭叉智能",
                    "林德（中国）叉车",
                    "合力工业车辆",
                    "永恒力叉车",
                    "韶关比亚迪实业"
                ]
            },
            {
                name: "移动机器人 (AMR/AGV)",
                companies: [
                    "杭州海康机器人",
                    "北京极智嘉 (Geek+)",
                    "深圳海柔创新 (Hai Robotics)",
                    "上海快仓智能 (Quicktron)",
                    "斯坦德机器人（深圳）",
                    "国自机器人"
                ]
            },
            {
                name: "特种/重载",
                companies: [
                    "深圳瑞郎特防爆",
                    "巡检机器人-依季斯防爆",
                    "云南昆船智能（重载）",
                    "河南卫特机器人"
                ]
            },
            {
                name: "服务与人形机器人",
                companies: [
                    "深圳优必选科技",
                    "北京猎户星空科技",
                    "杭州小五智能"
                ]
            }
        ]
    },
    {
        id: "components",
        title: "核心零部件与硬件",
        description: "机器人的“器官”：电机，电池和传感器。",
        icon: "Cpu",
        subcategories: [
            {
                name: "激光雷达与视觉",
                companies: [
                    "深圳速腾聚创 (RoboSense)",
                    "上海图漾信息",
                    "深圳览沃科技 (Livox)",
                    "劳易测传感科技"
                ]
            },
            {
                name: "编码器与控制器",
                companies: [
                    "库伯勒（北京）自动化",
                    "山东科力光电",
                    "浙江科聪控制"
                ]
            },
            {
                name: "电池电源",
                companies: [
                    "弗迪电池 (BYD)",
                    "星恒电源",
                    "珠海鹏辉能源",
                    "宜兴市法拉M工业电池"
                ]
            },
            {
                name: "充电解决方案",
                companies: [
                    "中惠创智无限（无线充电）",
                    "广东泰坦智能动力",
                    "恩亿达电源科技"
                ]
            },
            {
                name: "机械传动",
                companies: [
                    "浙江博蒙精密轴承",
                    "淄博纽卡特行星减速机",
                    "湖北科峰智能传动",
                    "江苏万达特种轴承",
                    "江苏申牌万向轮",
                    "中山向荣脚轮",
                    "泉州卓烨锰钢脚轮"
                ]
            }
        ]
    },
    {
        id: "intelligence",
        title: "智能、软件与AI",
        description: "运营的“大脑”，专注于导航和车队管理。",
        icon: "BrainCircuit",
        subcategories: [
            {
                name: "导航与AI",
                companies: [
                    "辛顿人工智能",
                    "上海视神纵横",
                    "Kudan Inc. (SLAM)",
                    "深圳市人工智能与机器人研究院"
                ]
            },
            {
                name: "计算硬件",
                companies: [
                    "英特尔（中国）",
                    "高通无线",
                    "凌华科技",
                    "研华兴业电子",
                    "深圳智微智能"
                ]
            },
            {
                name: "连接性 (5G/IoT)",
                companies: [
                    "中兴通讯",
                    "华为技术",
                    "深圳宏电技术",
                    "利尔达科技集团"
                ]
            }
        ]
    },
    {
        id: "integration",
        title: "集成、物流与终端用户",
        description: "部署机器人或提供全方位自动化仓库设计的公司。",
        icon: "Network",
        subcategories: [
            {
                name: "系统集成商",
                companies: [
                    "兰剑智能科技",
                    "昆山同日智能",
                    "山西东杰智能物流",
                    "德马泰克国际贸易"
                ]
            },
            {
                name: "终端用户 (名誉理事)",
                companies: [
                    "富士康 (制造)",
                    "韵达货运 (物流)",
                    "比亚迪汽车 (汽车)",
                    "三星视界 (电子)",
                    "中外运物流"
                ]
            },
            {
                name: "测试与认证",
                companies: [
                    "莱茵技术监督 (TÜV)",
                    "沃德检测（广东）",
                    "南德认证 (TÜV SÜD)"
                ]
            }
        ]
    }
];

// Default export can be kept for backward compatibility if needed, but explicit is better.
export const chinaEcosystem = chinaEcosystemEn;
