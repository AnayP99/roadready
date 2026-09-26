'use client';

import { useState, useMemo, useEffect } from 'react';

interface UseSearchOptions<T> {
  data: T[];
  searchFields: (keyof T)[];
  initialCategory?: string;
  categoryField?: keyof T;
  debounceMs?: number;
}

export function useSearch<T>({
  data,
  searchFields,
  initialCategory = 'all',
  categoryField,
  debounceMs = 250,
}: UseSearchOptions<T>) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceMs);
    return () => clearTimeout(handler);
  }, [query, debounceMs]);

  const filteredData = useMemo(() => {
    let result = data;

    // Filter by category if categoryField is provided and category isn't 'all'
    if (categoryField && selectedCategory !== 'all') {
      result = result.filter((item) => {
        const itemCat = String(item[categoryField]);
        return itemCat.toLowerCase() === selectedCategory.toLowerCase();
      });
    }

    // Filter by debounced query
    const trimmed = debouncedQuery.trim().toLowerCase();
    if (trimmed) {
      result = result.filter((item) =>
        searchFields.some((field) => {
          const val = item[field];
          if (val === null || val === undefined) return false;
          if (Array.isArray(val)) {
            return val.some((subVal) => String(subVal).toLowerCase().includes(trimmed));
          }
          return String(val).toLowerCase().includes(trimmed);
        })
      );
    }

    return result;
  }, [data, debouncedQuery, selectedCategory, categoryField, searchFields]);

  return {
    query,
    setQuery,
    debouncedQuery,
    selectedCategory,
    setSelectedCategory,
    filteredData,
    totalCount: data.length,
    filteredCount: filteredData.length,
  };
}
