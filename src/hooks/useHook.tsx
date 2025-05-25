import { useState, useEffect } from "react";

// A mock custom hook that simulates loading and returns mock data after a delay
export function useMockData() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setData("Hello from useMockData!");
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return { data, loading };
}
