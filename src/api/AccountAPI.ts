import { API_URL } from '.';
import { AccountInterface } from '../types/account';

export class AccountAPI {
  static async getInfo(): Promise<{ account?: AccountInterface; error?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { error: 'No token found' };
    const data = await fetch(`${API_URL}/account`, {
      headers: { Authorization: `Bearer ${savedToken}` },
    });
    const info = await data.json();
    if (info.message) return { error: info.message };
    return { account: info };
  }

  static async addTrainedKata(kataId: string): Promise<{ status?: string; error?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { error: 'No token found' };
    const data = await fetch(`${API_URL}/account/trained`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${savedToken}` },
      body: JSON.stringify({ kataId }),
    });
    const { status, message } = await data.json();
    if (message) return { error: message };
    return { status };
  }

  static async addSolvedKata(kataId: string): Promise<{ status?: string; error?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { error: 'No token found' };
    const data = await fetch(`${API_URL}/account/solved`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${savedToken}` },
      body: JSON.stringify({ kataId }),
    });
    const { status, message } = await data.json();
    if (message) return { error: message };
    return { status };
  }
}
