"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../i18n/routing";
import { Globe } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="text-white border-white/20 bg-white/5 hover:bg-white/10 hover:text-white">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Switch Language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black/90 border-white/10 text-white">
                <DropdownMenuItem
                    onClick={() => handleLanguageChange('en')}
                    className={locale === 'en' ? 'bg-white/10' : ''}
                >
                    English
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => handleLanguageChange('zh')}
                    className={locale === 'zh' ? 'bg-white/10' : ''}
                >
                    中文 (Chinese)
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
