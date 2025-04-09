import Link from 'next/link';
import React, {ReactNode} from 'react';
import {event as gaEvent} from '@/lib/gtag';

interface TrackableLinkProps {
    href: string;
    children: ReactNode;
    eventLabel: string;

    // Allow passing additional props to the underlying anchor
    [x: string]: any;
}

const TrackableLink: React.FC<TrackableLinkProps> = ({href, children, eventLabel, ...props}) => {
    const handleClick = () => {
        // Fire a custom GA event on link click
        gaEvent({
            action: 'click',
            category: 'Link',
            label: eventLabel,
            value: 1,
        });
    };

    return (
        <Link href={href}
              onClick={handleClick} {...props}>
            {children}
        </Link>
    );
};

export default TrackableLink;
