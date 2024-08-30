'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { mods } from '@/app/mods';
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownRenderer from '@/components/ui/markdown';

export default function ModInfo() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [activeTab, setActiveTab] = useState('information');

    const modInfo = useMemo(() => {
        const mod = mods.find(mod => mod.id === id);
        if (!mod) return null;

        const hasScreenshots = mod.screenshots !== undefined && mod.screenshots.length > 0;
        const hasVersions = mod.versions && mod.versions.length > 0;

        const availableTabs = ['information'];
        if (hasScreenshots) availableTabs.push('screenshots');
        if (hasVersions) availableTabs.push('versions');

        return { mod, hasScreenshots, hasVersions, availableTabs };
    }, [id]);

    if (!modInfo) {
        return <div className="container mx-auto px-4 py-8">Mod not found for ID: {id}</div>;
    }

    const { mod, hasScreenshots, hasVersions, availableTabs } = modInfo;

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
                <TabsList className={`grid w-full grid-cols-${availableTabs.length}`}>
                    {availableTabs.map((tab) => (
                        <TabsTrigger key={tab} value={tab}>
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
                {hasScreenshots && (
                    <TabsContent value="screenshots">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {mod.screenshots && mod.screenshots.map((screenshot, index) => (
                                        <div key={index} className="relative aspect-video">
                                            <Image 
                                                src={screenshot} 
                                                alt={`Screenshot ${index + 1} of ${mod.name}`}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-lg"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                )}
                {hasVersions && (
                    <TabsContent value="versions">
                        <Card>
                            <CardContent className="pt-6">
                                {mod.versions && mod.versions.map((version, index) => (
                                    <div key={index} className="mb-6 last:mb-0">
                                        <h3 className="text-2xl font-semibold mb-2">Version {version.version}</h3>
                                        {version.changelog ? (
                                            <MarkdownRenderer markdown={version.changelog} />
                                        ) : (
                                            <p className="text-muted-foreground">No changelog available for this version.</p>
                                        )}
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
