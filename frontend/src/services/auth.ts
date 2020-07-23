export const TOKEN_KEY = 'token';
export const getToken = () => localStorage.getItem('TOKEN_KEY');
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const login = (token: string, user: any) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem('user', JSON.stringify(user));
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem('user');
};
