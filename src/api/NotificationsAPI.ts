import { API_URL } from '.';
import { NotificationInterface } from '../types/notifications';

const URL = `${API_URL}/notifications`;

export class NotificationsAPI {
  static async getAll(): Promise<{ notifications?: NotificationInterface[]; message?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { message: 'No token found' };
    const response = await fetch(URL, {
      headers: { Authorization: `Bearer ${savedToken}` },
    });
    const notifications = await response.json();
    return { notifications };
  }

  static async create(
    text: string
  ): Promise<{ notification?: NotificationInterface; message?: string }> {
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
    const notification = await response.json();
    return { notification };
  }

  static async delete(id: string): Promise<{ status?: 'ok'; message?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { message: 'No token found' };
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });
    const data = await response.json();
    return data;
  }
}
