import { API_URL } from '.';
import { SolutionInterface } from '../types';

export class SolutionsAPI {
  static async getSolutions(kataId: string, username?: string): Promise<SolutionInterface[]> {
    const response = await fetch(
      `${API_URL}/kata/${kataId}/solutions${username ? `?username=${username}` : ''}`
    );
    const data = await response.json();
    return data;
  }

  static async getUserSolutions(): Promise<{ solutions?: SolutionInterface[]; message?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { message: 'No token found' };
    const result = await fetch(`${API_URL}/solutions`, {
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });
    const data = await result.json();
    return { solutions: data };
  }

  static async addSolution(
    kataId: string,
    solution: { username: string; solution: string; name: string; rank: string }
  ): Promise<SolutionInterface> {
    const response = await fetch(`${API_URL}/kata/${kataId}/solutions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(solution),
    });
    const data = await response.json();
    return data;
  }

  static async updateSolution(
    kataId: string,
    solutionId: string,
    updates: { cleverVotes?: number; bestPracticesVotes?: number }
  ): Promise<{ status: string } | { error: string }> {
    if (!Object.keys(updates).length) return { error: 'No params to update' };
    const response = await fetch(`${API_URL}/kata/${kataId}/solutions/${solutionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    const data = await response.json();
    return data;
  }
}
