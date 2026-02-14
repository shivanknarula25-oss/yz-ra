"use client";

import { CompanyType } from "../../types";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

interface MemberFiltersProps {
    types: CompanyType[];
}

export function MemberFilters({ types }: MemberFiltersProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentTypeId = searchParams.get("type");

    const handleFilter = (typeId: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (typeId) {
            params.set("type", typeId);
        } else {
            params.delete("type");
        }
        router.push(`/members?${params.toString()}`);
    };

    return (
        <div className="flex flex-wrap gap-2 mb-8">
            <Button
                variant={!currentTypeId ? "default" : "outline"}
                onClick={() => handleFilter(null)}
                className={cn(
                    "rounded-full",
                    !currentTypeId && "bg-cyan-500 hover:bg-cyan-600 text-white border-0"
                )}
            >
                All Members
            </Button>

            {types.map((type) => (
                <Button
                    key={type.id}
                    variant={currentTypeId === type.id.toString() ? "default" : "outline"}
                    onClick={() => handleFilter(type.id.toString())}
                    className={cn(
                        "rounded-full border-white/10 hover:bg-white/10 hover:text-cyan-400",
                        currentTypeId === type.id.toString() && "bg-cyan-500 hover:bg-cyan-600 text-white border-0"
                    )}
                >
                    {type.name}
                </Button>
            ))}
        </div>
    );
}
