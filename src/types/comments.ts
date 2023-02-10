export interface CommentInterface {
  id: number;
  avatar: string;
  kataId: string;
  username: string;
  text: string;
  rank: string;
  votes: number;
  createdAt: string;
  spoiler: boolean;
  label: 'Question' | 'Suggestion' | 'Issue' | null;
}
