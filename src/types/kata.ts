export interface KataInterface {
  id: string;
  name: string;
  description: string;
  totalAttempts: number;
  totalCompleted: number;
  totalStars: number;
  slug: string;
  publishedAt: number;
  createdAt: number;
  rank: string;
  category: string;
  tags: string[];
  createdBy: string;
}
