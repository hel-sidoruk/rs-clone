import { API_URL } from '.';
import { KataInterface } from '../types/kata';

export class KataAPI {
  static async getAll(page: number): Promise<{ rows: KataInterface[]; count: number }> {
    const response = await fetch(`${API_URL}/kata?page=${page}`);
    const data = await response.json();
    return data;
  }

  static async getOne(id: string): Promise<KataInterface> {
    const response = await fetch(`${API_URL}/kata/${id}`);
    const data = await response.json();
    return data;
  }

  static async create(kata: KataInterface): Promise<KataInterface> {
    const response = await fetch(`${API_URL}/kata/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(kata),
    });
    const data = await response.json();
    return data;
  }
}
