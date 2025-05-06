import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export const runSpeedTest = async () => {
    try {
        const { stdout } = await execPromise('speedtest --simple');
        const results = parseSpeedTestResults(stdout);
        return results;
    } catch (error) {
        console.error('Error running speed test:', error);
        throw error;
    }
};

const parseSpeedTestResults = (output: string) => {
    const lines = output.split('\n');
    const results = {
        download: 0,
        upload: 0,
        ping: 0,
    };

    lines.forEach(line => {
        if (line.includes('Download')) {
            results.download = parseFloat(line.split(' ')[1]);
        } else if (line.includes('Upload')) {
            results.upload = parseFloat(line.split(' ')[1]);
        } else if (line.includes('Ping')) {
            results.ping = parseFloat(line.split(' ')[1]);
        }
    });

    return results;
};