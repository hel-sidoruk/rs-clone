export interface CommentInterface {
  id: number;
  kataId: string;
  username: string;
  text: string;
  rank: string;
  votes: number;
  createdAt: string;
  spoiler: boolean;
  label: 'Question' | 'Suggestion' | 'Issue' | null;
}
