export const userName = () => localStorage.getItem('userName');
export const userExists = () => localStorage.getItem('bearerToken') !== null;
export const isAdmin = (user) => user.role === 'admin';
