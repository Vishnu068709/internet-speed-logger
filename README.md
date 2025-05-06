# Internet Speed Logger

## Overview
The Internet Speed Logger is a React application that logs your internet speed at specified intervals (hourly or daily) using the speedtest CLI tool or API. It visualizes the results over time, providing insights into your internet performance.

## Features
- Logs internet speed at configurable intervals (hourly/daily).
- Visualizes speed test results using charts.
- Easy to set up and use.

## Project Structure
```
internet-speed-logger
├── public
│   ├── index.html          # Main HTML document
│   └── favicon.ico         # Favicon for the application
├── src
│   ├── components
│   │   ├── SpeedLogger.tsx # Component for logging internet speed
│   │   └── Chart.tsx       # Component for visualizing speed data
│   ├── services
│   │   └── speedTestService.ts # Service for interacting with speedtest CLI/API
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── styles
│       └── App.css         # CSS styles for the application
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
├── .gitignore               # Files and directories to ignore by Git
└── README.md                # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd internet-speed-logger
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Ensure you have the speedtest CLI tool installed. You can install it using:
   ```
   npm install -g speedtest-cli
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```

2. The application will log your internet speed at the specified intervals and display the results in a chart.

## Contributing
Feel free to submit issues or pull requests if you have suggestions or improvements.

## License
This project is licensed under the MIT License.