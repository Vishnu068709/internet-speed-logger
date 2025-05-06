import React, { useEffect, useState } from 'react';
import { logSpeedTest } from '../services/speedTestService';

const SpeedLogger: React.FC = () => {
    const [speedData, setSpeedData] = useState<{ timestamp: string; download: number; upload: number }[]>([]);
    
    const fetchSpeed = async () => {
        const result = await logSpeedTest();
        if (result) {
            setSpeedData(prevData => [...prevData, { timestamp: new Date().toISOString(), ...result }]);
        }
    };

    useEffect(() => {
        fetchSpeed(); // Initial fetch
        const interval = setInterval(fetchSpeed, 3600000); // Fetch speed every hour

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div>
            <h2>Internet Speed Logger</h2>
            <ul>
                {speedData.map((data, index) => (
                    <li key={index}>
                        {data.timestamp}: Download: {data.download} Mbps, Upload: {data.upload} Mbps
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SpeedLogger;