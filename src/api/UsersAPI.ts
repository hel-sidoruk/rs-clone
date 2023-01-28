import { API_URL } from '.';
import { UserInterface } from '../types/user';

export class UsersAPI {
  static async getAll(): Promise<UserInterface[]> {
    const response = await fetch(`${API_URL}/user`);
    const data = await response.json();
    return data;
  }

  static async getOne(id: string): Promise<UserInterface> {
    const response = await fetch(`${API_URL}/user/${id}`);
    const data = await response.json();
    return data;
  }

  static async create(user: UserInterface): Promise<UserInterface> {
    const response = await fetch(`${API_URL}/user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  }

  static async update(id: number, data: Partial<Omit<UserInterface, 'id' | 'username'>>) {
    const response = await fetch(`${API_URL}/user/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  }
}
