import { API_URL } from '.';
import { FollowerInterface } from '../types/followers';

const URL = `${API_URL}/followers`;

export class FollowersAPI {
  static async getFollowing(username: string): Promise<FollowerInterface[]> {
    const response = await fetch(`${URL}/${username}/following`);
    const following = await response.json();
    return following;
  }

  static async getFollowers(username: string): Promise<FollowerInterface[]> {
    const response = await fetch(`${URL}/${username}/followers`);
    const followers = await response.json();
    return followers;
  }

  static async create(
    user: Omit<FollowerInterface, 'id' | 'username'>
  ): Promise<{ follower?: FollowerInterface; message?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { message: 'No token found' };
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${savedToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const follower = await response.json();
    return { follower };
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

  static async checkIsFollowed(
    username: string
  ): Promise<{ isFollowed?: string | false; message?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { message: 'No token found' };
    const response = await fetch(`${URL}/check?follow=${username}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });
    const data = await response.json();
    return data;
  }
}
