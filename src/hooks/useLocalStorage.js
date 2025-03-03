import { useState, useEffect } from 'react';

/**
 * Custom hook for working with localStorage
 * @param {string} key - The localStorage key
 * @param {any} initialValue - The initial value if the key doesn't exist
 * @returns {[any, Function]} A stateful value and a function to update it
 */
export const useLocalStorage = (key, initialValue) => {
  // Get the initial value from localStorage or use the provided initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Update localStorage when the state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}; 