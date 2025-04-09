import React from 'react';
import {event as gaEvent} from '@/lib/gtag';

const TrackableButton: React.FC = () => {
    const handleClick = () => {
        // Fire a custom GA event on button click
        gaEvent({
            action: 'click',
            category: 'Button',
            label: 'Sign Up Button',
            value: 1,
        });
    };

    return (
        <button onClick={handleClick}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Sign Up
        </button>
    );
};

export default TrackableButton;
