import { API_URL } from '.';
import { CommentInterface } from '../types/comments';

interface CommentUpdates {
  votes?: number;
  spoiler?: boolean;
  text?: string;
}

export class CommentsAPI {
  static async getComments(id: string): Promise<CommentInterface[]> {
    const response = await fetch(`${API_URL}/kata/${id}/discuss`);
    const data = await response.json();
    return data;
  }

  static async createComment(
    id: string,
    comment: Omit<CommentInterface, 'id' | 'kataId' | 'votes' | 'createdAt' | 'spoiler'>
  ): Promise<CommentInterface[]> {
    const response = await fetch(`${API_URL}/kata/${id}/discuss`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
    const data = await response.json();
    return data;
  }

  static async updateComment(id: string, commentId: number, comment: CommentUpdates) {
    const response = await fetch(`${API_URL}/kata/${id}/discuss/${commentId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
    const data = await response.json();
    return data;
  }
}
