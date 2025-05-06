import React from 'react';
import { Line } from 'react-chartjs-2';

interface ChartProps {
    speedData: { time: string; speed: number }[];
}

const Chart: React.FC<ChartProps> = ({ speedData }) => {
    const data = {
        labels: speedData.map(dataPoint => dataPoint.time),
        datasets: [
            {
                label: 'Internet Speed (Mbps)',
                data: speedData.map(dataPoint => dataPoint.speed),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'hour',
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Internet Speed Over Time</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default Chart;