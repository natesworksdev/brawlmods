'use client';

import { useSearchParams } from 'next/navigation';
import { mods } from '@/app/mods';
import { Badge } from "@/components/ui/badge"
import MarkdownRenderer from '@/components/ui/markdown';

export default function SearchBar() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const mod = mods.find(mod => mod.id === id);

    if (!mod) {
        return <>Mod not found for ID: {id}</>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap gap-2 mb-4">
            {mod.tags.map(tag => (
                <Badge
                key={tag}
                variant="default"
                >
                {tag}
                </Badge>
            ))}
            </div>
            <h1 className="text-4xl font-bold mb-4">{mod.name}</h1>
            <p className="text-muted-foreground mb-8">{mod.shortDescription}</p>

            <MarkdownRenderer markdown={mod.description || mod.shortDescription} />
        </div>
    );
}
