'use client';

import {usePathname, useSearchParams} from 'next/navigation';
import {useEffect} from 'react';
import * as gtag from '@/lib/gtag';

const GoogleAnalytics = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = searchParams ? `${pathname}?${searchParams.toString()}` : pathname;
        gtag.pageview(url);
    }, [pathname, searchParams]);

    return null;
};

export default GoogleAnalytics;
