export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  stack: string[];
  tools: string[];
  status: 'active' | 'complete' | 'wip';
  year: string;
}

export const projects: Project[] = [
  {
    id: 'ai-stock-vision',
    title: 'AI Stock Vision',
    subtitle: 'AI-Powered Stock Analysis & Prediction',
    description:
      'A full-stack web application that delivers interactive stock market analysis and ML-based price prediction using GRU neural networks and live market data.',
    longDescription:
      'AI Stock Vision combines real-time stock data ingestion with a GRU (Gated Recurrent Unit) prediction model to generate forward-looking insights. The React.js frontend renders interactive charts and market dashboards while the Node.js/Express.js backend orchestrates data pipelines, model inference, and REST API endpoints.',
    features: [
      'Live stock market data ingestion and visualization',
      'GRU-based sequence model for price prediction',
      'Interactive market analysis dashboard',
      'REST API architecture with Express.js',
      'Real-time data updates',
      'Responsive chart interface',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'GRU Model'],
    tools: ['Git', 'GitHub', 'Postman'],
    status: 'active',
    year: '2024',
  },
];
