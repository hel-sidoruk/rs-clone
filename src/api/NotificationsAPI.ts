import { API_URL } from '.';
import { NotificationInterface } from '../types/notifications';

const URL = `${API_URL}/notifications`;

export class NotificationsAPI {
  static async getAll(): Promise<NotificationInterface[] | { message: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { message: 'No token found' };
    const response = await fetch(URL, {
      headers: { Authorization: `Bearer ${savedToken}` },
    });
    const data = await response.json();
    return data;
  }

  static async create(text: string): Promise<NotificationInterface | { message: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { message: 'No token found' };
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${savedToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    return data;
  }

  static async delete(id: string): Promise<{ status?: 'ok'; message?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { message: 'No token found' };
    const response = await fetch(`URL/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${savedToken}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
}
