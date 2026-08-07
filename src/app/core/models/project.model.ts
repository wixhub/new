export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  status: 'Live' | 'In Development' | 'Concept';
  badge: string;
  symbol: string;
}
