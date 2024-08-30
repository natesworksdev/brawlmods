import React, { Suspense } from 'react';
import ModInfo from './modinfo';

export default function ModPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ModInfo />
        </Suspense>
    );
}
