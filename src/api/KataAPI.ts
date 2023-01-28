import { API_URL } from '.';
import { KataInterface } from '../types/kata';

export class KataAPI {
  static async fetchAllKata() {
    const response = await fetch(`${API_URL}/kata`);
    const data = await response.json();
    return data;
  }

  static async fetchOneKata(id: string) {
    const response = await fetch(`${API_URL}/kata/${id}`);
    const data = await response.json();
    return data;
  }

  static async createKata(kata: KataInterface) {
    const response = await fetch(`${API_URL}/kata/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(kata),
    });
    return response;
  }
}
