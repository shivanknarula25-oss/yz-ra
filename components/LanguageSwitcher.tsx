"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../i18n/routing";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
            <button
                onClick={() => handleLanguageChange('en')}
                className={`text-xs font-mono font-bold transition-colors ${locale === 'en' ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}
            >
                EN
            </button>
            <span className="text-slate-700 text-[10px]">|</span>
            <button
                onClick={() => handleLanguageChange('zh')}
                className={`text-xs font-mono font-bold transition-colors ${locale === 'zh' ? 'text-red-400' : 'text-slate-500 hover:text-white'}`}
            >
                CN
            </button>
        </div>
    );
}
