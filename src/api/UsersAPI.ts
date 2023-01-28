import { API_URL } from '.';
import { UserInterface } from '../types/user';

export class UsersAPI {
  static async fetchAllUsers() {
    const response = await fetch(`${API_URL}/user`);
    const data = await response.json();
    return data;
  }

  static async fetchOneUser(id: string) {
    const response = await fetch(`${API_URL}/user/${id}`);
    const data = await response.json();
    return data;
  }

  static async createUser(user: UserInterface) {
    const response = await fetch(`${API_URL}/user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response;
  }

  static async updateUser(id: number, data: Partial<Omit<UserInterface, 'id' | 'username'>>) {
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
