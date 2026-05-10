import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export const useStats = () => {
  const [stats, setStats] = useState<{ count: number } | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${API_URL}/stats`);
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const incrementViews = async () => {
    try {
      // Use sessionStorage to only count once per session
      const hasVisited = sessionStorage.getItem('hasVisited');
      if (!hasVisited) {
        await axios.post(`${API_URL}/stats/increment`);
        sessionStorage.setItem('hasVisited', 'true');
      }
    } catch (error) {
      console.error('Error incrementing views:', error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return { stats, loading, fetchStats, incrementViews };
};
