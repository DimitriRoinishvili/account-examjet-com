import {GA_TRACKING_ID} from '@/config';

export const pageview = (url: string) => {
    if (typeof window.gtag !== 'function') return;
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};

type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value: number;
};

export const event = ({action, category, label, value}: GTagEvent) => {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
    });
};
