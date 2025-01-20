import React, { createContext, useContext, useState } from 'react';
import * as api from '../api/client';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  const handleError = (error) => {
    setError(error.response?.data?.message || 'An error occurred');
    setTimeout(() => setError(null), 5000);
  };

  const actions = {
    fetchUsers: async () => {
      try {
        const data = await api.fetchUsers();
        setUsers(data);
      } catch (err) {
        handleError(err);
      }
    },

    addUser: async (name) => {
      try {
        await api.addUser(name);
        actions.fetchUsers();
      } catch (err) {
        handleError(err);
      }
    },

    claimPoints: async (userId) => {
      try {
        const response = await api.claimPoints(userId);
        actions.fetchUsers();
        return response;
      } catch (err) {
        handleError(err);
      }
    },

    fetchLeaderboard: async () => {
      try {
        const data = await api.fetchLeaderboard();
        setLeaderboard(data);
      } catch (err) {
        handleError(err);
      }
    },

    fetchHistory: async () => {
      try {
        const data = await api.fetchHistory();
        setHistory(data);
      } catch (err) {
        handleError(err);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        users,
        leaderboard,
        history,
        error,
        setError,
        ...actions
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};