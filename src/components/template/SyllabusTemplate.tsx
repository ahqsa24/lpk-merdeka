import React from 'react';
import SyllabusTimeline from '../organisms/SyllabusTimeline';

const SyllabusTemplate = () => {
    return (
        <div className="w-full min-h-screen py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <SyllabusTimeline />
            </div>
        </div>
    );
};

export default SyllabusTemplate;
