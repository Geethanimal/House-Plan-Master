import { postRequest } from './utils';

export const login = data => postRequest('/login', data);
