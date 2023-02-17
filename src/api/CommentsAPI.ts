import { API_URL } from '.';
import { CommentInterface, CommentLabel } from '../types/comments';

interface CommentUpdates {
  votes?: number;
  spoiler?: boolean;
  text?: string;
  label?: CommentLabel | null;
}

export class CommentsAPI {
  static async getComments(
    id: string,
    query?: string
  ): Promise<{ rows: CommentInterface[]; count: number }> {
    const response = await fetch(`${API_URL}/kata/${id}/discuss${query || ''}`);
    const data = await response.json();
    return data;
  }
  static async getUserComments(id: string): Promise<{ rows: CommentInterface[]; count: number }> {
    const response = await fetch(`${API_URL}/discuss/${id}`);
    const data = await response.json();
    return data;
  }

  static async create(
    id: string,
    comment: Omit<CommentInterface, 'id' | 'kataId' | 'votes' | 'createdAt' | 'spoiler'>
  ): Promise<CommentInterface> {
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

  static async update(id: string, commentId: number, comment: CommentUpdates) {
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

  static async delete(id: string, commentId: number): Promise<{ status?: 'ok'; message?: string }> {
    const response = await fetch(`${API_URL}/kata/${id}/discuss/${commentId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  }
}
