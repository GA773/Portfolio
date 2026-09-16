export type SkillCategory = 'languages' | 'frameworks' | 'databases' | 'tools';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Languages
  { id: 'java',       name: 'Java',        category: 'languages' },
  { id: 'javascript', name: 'JavaScript',  category: 'languages' },
  { id: 'html',       name: 'HTML',        category: 'languages' },
  { id: 'css',        name: 'CSS',         category: 'languages' },
  { id: 'sql',        name: 'SQL',         category: 'languages' },

  // Frameworks & Libraries
  { id: 'react',       name: 'React.js',     category: 'frameworks' },
  { id: 'nodejs',      name: 'Node.js',      category: 'frameworks' },
  { id: 'express',     name: 'Express.js',   category: 'frameworks' },
  { id: 'mongoose',    name: 'Mongoose',     category: 'frameworks' },
  { id: 'springboot',  name: 'Spring Boot',  category: 'frameworks' },

  // Databases
  { id: 'postgresql',  name: 'PostgreSQL',   category: 'databases' },
  { id: 'mysql',       name: 'MySQL',        category: 'databases' },
  { id: 'mongodb',     name: 'MongoDB',      category: 'databases' },

  // Tools
  { id: 'git',         name: 'Git',          category: 'tools' },
  { id: 'github',      name: 'GitHub',       category: 'tools' },
  { id: 'postman',     name: 'Postman',      category: 'tools' },
];

export const categoryLabels: Record<SkillCategory, string> = {
  languages:  'Languages',
  frameworks: 'Frameworks & Libraries',
  databases:  'Databases',
  tools:      'Tools',
};

export const categoryColors: Record<SkillCategory, string> = {
  languages:  '#6ee7b7',
  frameworks: '#93c5fd',
  databases:  '#c084fc',
  tools:      '#fbbf24',
};
