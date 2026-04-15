export const API_CONFIG = {
  BASE_URL: 'https://jsonplaceholder.typicode.com',
  ENDPOINTS: {
    USERS: '/users',
  },
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
} as const;

export const THEME = {
  STORAGE_KEY: 'theme-preference',
} as const;

export const DEBOUNCE_DELAY = 300;
export const ITEMS_PER_PAGE = 10;
