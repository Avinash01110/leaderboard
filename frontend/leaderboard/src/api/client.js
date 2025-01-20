import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`
});

export const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const addUser = async (name) => {
  const response = await api.post('/users', { name });
  return response.data;
};

export const claimPoints = async (userId) => {
  const response = await api.post('/users/claim', { userId });
  return response.data;
};

export const fetchLeaderboard = async () => {
  const response = await api.get('/users/leaderboard');
  return response.data;
};

export const fetchHistory = async () => {
  const response = await api.get('/users/history');
  return response.data;
};

export default api;