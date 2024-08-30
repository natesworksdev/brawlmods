'use client';

import { useSearchParams } from 'next/navigation';
import { mods } from '@/app/mods';

export default function SearchBar() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const mod = mods.find(mod => mod.id === id);

    if (!mod) {
        return <>Mod not found for ID: {id}</>;
    }

    return (
        <div>
            <h1>{mod.name}</h1>
            <p>{mod.description}</p>
            <h3>Tags:</h3>
            <ul>
                {mod.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
            <h3>Versions:</h3>
            <ul>
                {mod.versions.map((version, index) => (
                    <li key={index}>
                        <strong>{version.version}</strong> - 
                        <a href={version.downloadLink}>Download</a>
                        {version.altDownload && (
                            <>
                                {' | '}
                                <a href={version.altDownload}>Alternate Download</a>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
