import { API_URL } from '.';
import { AccountInfo, AccountInterface } from '../types/account';
import axios from 'axios';

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

  static async delete(): Promise<{ status?: string; message?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { message: 'No token found' };
    const data = await fetch(`${API_URL}/account`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${savedToken}` },
    });
    const { status, message } = await data.json();
    if (message) return { message };
    return { status };
  }

  static async editInfo(info: FormData): Promise<{ data?: AccountInfo; error?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { error: 'No token found' };
    try {
      const { data } = await axios.patch(`${API_URL}/account/edit`, info, {
        headers: {
          'Content-type': 'multipart/form-data',
          Authorization: `Bearer ${savedToken}`,
        },
      });
      return { data };
    } catch (error) {
      return { error: `${error}` };
    }
  }

  static async addTrainedKata(kataId: string): Promise<{ status?: string; error?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { error: 'No token found' };
    const data = await fetch(`${API_URL}/account/trained`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${savedToken}`, 'Content-Type': 'application/json' },
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
      headers: { Authorization: `Bearer ${savedToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ kataId }),
    });
    const { status, message } = await data.json();
    if (message) return { error: message };
    return { status };
  }

  static async addForfeitedKata(kataId: string): Promise<{ status?: string; error?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { error: 'No token found' };
    const data = await fetch(`${API_URL}/account/forfeited`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${savedToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ kataId }),
    });
    const { status, message } = await data.json();
    if (message) return { error: message };
    return { status };
  }

  static async addStarredKata(
    kataId: string,
    stars: number
  ): Promise<{ status?: string; error?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { error: 'No token found' };
    const data = await fetch(`${API_URL}/account/starred`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${savedToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ kataId, stars }),
    });
    const { status, message } = await data.json();
    if (message) return { error: message };
    return { status };
  }
}
