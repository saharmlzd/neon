import { User } from '@/types/user';
import { API_CONFIG } from '@/constants';
import { apiCache } from './cache';

class ApiError extends Error {
  constructor(
    message: string,
    public status?: number
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchWithErrorHandling<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new ApiError('User not found', 404);
      }
      throw new ApiError(
        `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    if (!navigator.onLine) {
      throw new ApiError(
        'You are offline. Please check your internet connection.'
      );
    }
    throw new ApiError('Network error. Please check your connection.');
  }
}

export async function fetchUsers(): Promise<User[]> {
  const cacheKey = 'users';
  const cached = apiCache.get<User[]>(cacheKey);

  if (cached) {
    return cached;
  }

  const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.USERS}`;
  const users = await fetchWithErrorHandling<User[]>(url);

  apiCache.set(cacheKey, users);
  return users;
}

export async function fetchUserById(id: number): Promise<User> {
  const cacheKey = `user-${id}`;
  const cached = apiCache.get<User>(cacheKey);

  if (cached) {
    return cached;
  }

  const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.USERS}/${id}`;
  const user = await fetchWithErrorHandling<User>(url);

  apiCache.set(cacheKey, user);
  return user;
}
