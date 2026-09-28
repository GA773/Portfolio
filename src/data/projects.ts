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
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'ai-stock-vision',
    githubUrl: 'https://github.com/GA773/AI-StockVision',
    title: 'AI StockVision',
    subtitle: 'Stock Forecasting & Portfolio Analysis',
    description:
      'An academic full-stack prototype for exploring historical stock data, comparing ML forecasts, and understanding portfolio risk.',
    longDescription:
      'AI StockVision pairs a React and TypeScript dashboard with Java Spring Boot REST APIs and PostgreSQL. Its forecasting pipeline combines LSTM, GRU, XGBoost, and FinBERT news sentiment, alongside technical indicators and portfolio risk analysis. It uses historical data, not live market feeds. Built as an academic prototype, it is not intended for investment or trading decisions.',
    features: [
      'Historical price charts with RSI, MACD, and moving averages',
      'Multimodal forecasts combining price models and news sentiment',
      'Portfolio allocation and risk analysis by investor risk profile',
    ],
    stack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'Postman'],
    status: 'active',
    year: '2024',
  },
];
