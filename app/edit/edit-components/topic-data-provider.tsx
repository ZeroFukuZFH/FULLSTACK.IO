"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import axios from 'axios';
import { PageProps } from "./pages-list";

// Create context type
type TopicDataContextType = {
  pages: PageProps[];
  setPages: (pages: PageProps[]) => void;
  loading: boolean;
  refreshPages: () => Promise<void>;
};

// Create context
const TopicContext = createContext<TopicDataContextType | undefined>(undefined);

// Custom hook to use the context
export function useTopicData() {
  const context = useContext(TopicContext);
  if (!context) {
    throw new Error('useTopicData must be used within a TopicDataProvider');
  }
  return context;
}

// Provider component
export default function TopicDataProvider({ children }: { children: ReactNode }) {
  const [pages, setPages] = useState<PageProps[]>([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch topics
  const fetchTopicData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3001/topics");
      setPages(response.data);
    } catch (error) {
      console.error('Failed to fetch topics:', error);
      setPages([]); 
    } finally {
        console.log('process exited')
    }
  };

  // Function to manually refresh
  const refreshPages = async () => {
    await fetchTopicData();
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchTopicData();
  }, []);

  // Context value
  const value = {
    pages,
    setPages,
    loading,
    refreshPages
  };

  return (
    <TopicContext.Provider value={value}>
      {children}
    </TopicContext.Provider>
  );
}