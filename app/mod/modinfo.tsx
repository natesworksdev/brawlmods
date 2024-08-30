'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { mods } from '@/app/mods';
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MarkdownRenderer from '@/components/ui/markdown';
import { DownloadIcon } from 'lucide-react';

export default function ModInfo() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [activeTab, setActiveTab] = useState('information');

    const modInfo = useMemo(() => {
        const mod = mods.find(mod => mod.id === id);
        if (!mod) return null;

        const hasVersions = mod.versions && mod.versions.length > 0;

        const availableTabs = ['information'];
        if (hasVersions) availableTabs.push('versions');

        return { mod, hasVersions, availableTabs };
    }, [id]);

    if (!modInfo) {
        return <div className="container mx-auto px-4 py-8">Mod not found for ID: {id}</div>;
    }

    const { mod, hasVersions, availableTabs } = modInfo;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap gap-2 mb-4">
                {mod.tags.map(tag => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                ))}
            </div>
            <h1 className="text-4xl font-bold mb-4">{mod.name}</h1>
            <p className="text-muted-foreground mb-8">{mod.shortDescription}</p>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="flex mb-4">
                    {availableTabs.map((tab) => (
                        <TabsTrigger key={tab} value={tab} className="flex-1">
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value="information">
                    <Card>
                        <CardContent className="pt-6">
                            <MarkdownRenderer markdown={mod.description || mod.shortDescription} />
                        </CardContent>
                    </Card>
                </TabsContent>
                {hasVersions && (
                    <TabsContent value="versions">
                        <Card>
                            <CardContent className="pt-6">
                                {mod.versions && mod.versions.map((version, index) => (
                                    <div key={index} className="mb-6 last:mb-0">
                                        <h3 className="text-2xl font-semibold mb-2">{version.version}</h3>
                                        {version.changelog ? (
                                            <MarkdownRenderer markdown={version.changelog} />
                                        ) : (
                                            <p className="text-muted-foreground">No changelog available for this version.</p>
                                        )}
                                        <div className="flex gap-2 mt-4">
                                            <Button asChild>
                                                <Link href={version.downloadLink}>
                                                    <DownloadIcon className="mr-2 h-4 w-4" />
                                                    Download
                                                </Link>
                                            </Button>
                                            {version.altDownload && (
                                                <Button variant="outline" asChild>
                                                    <Link href={version.altDownload}>
                                                        <DownloadIcon className="mr-2 h-4 w-4" />
                                                        Alt Download
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>
                )}
            </Tabs>
        </div>
    );
}
