import { API_URL } from '.';
import { CommentInterface } from '../types';

interface NewComment {
  username: string;
  rank: string;
  text: string;
  label: 'Question' | 'Suggestion' | 'Issue' | null;
}

export class DiscussAPI {
  static async getComments(kataId: string): Promise<CommentInterface[]> {
    const response = await fetch(`${API_URL}/kata/${kataId}/dicsuss`);
    const data = await response.json();
    return data;
  }

  static async createComment(kataId: string, comment: NewComment): Promise<CommentInterface> {
    const response = await fetch(`${API_URL}/kata/${kataId}/dicsuss`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
    const data = await response.json();
    return data;
  }

  static async updateComment(
    kataId: string,
    commentId: number,
    updates: {
      votes?: number;
      spoiler?: boolean;
      text?: string;
    }
  ): Promise<{ status: string } | { error: string }> {
    if (!Object.keys(updates).length) return { error: 'No params to update' };
    const response = await fetch(`${API_URL}/kata/${kataId}/dicsuss/${commentId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    const data = await response.json();
    return data;
  }
}
