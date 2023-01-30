import jwt_decode from 'jwt-decode';
import { AUTH_URL } from '.';

export class AccountAPI {
  static async registration() {
    // const { data } = await $host.post('api/user/registration', { email, password, role: 'ADMIN' });
    // localStorage.setItem('token', data.token);
    // return jwt_decode(data.token);
  }
  static async login() {
    // const { data } = await $host.post('api/user/login', { email, password });
    // localStorage.setItem('token', data.token);
    // return jwt_decode(data.token);
  }

  static async githubRegistration(code: string) {
    const url = `${AUTH_URL}/github-registration`;
    const data = await fetch(`${url}?code=${code}&option=registration`);
    const { token, message } = await data.json();
    if (!token) return { error: message };
    localStorage.setItem('token', token);
    return jwt_decode(token);
  }

  static async githubLogin(code: string) {
    const url = `${AUTH_URL}/github-login`;
    const data = await fetch(`${url}?code=${code}&option=login`);
    const { token, message } = await data.json();
    if (!token) return { error: message };
    localStorage.setItem('token', token);
    return jwt_decode(token);
  }

  static async check() {
    const data = await fetch(`${AUTH_URL}/check`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    const { token, message } = await data.json();
    if (!token) return { error: message };
    localStorage.setItem('token', token);
    return jwt_decode(token);
  }
}
