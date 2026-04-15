import { API_CONFIG } from '@/constants';

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

class ApiCache {
  private cache: Map<string, CacheEntry<unknown>> = new Map();

  set<T>(key: string, data: T): void {
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key) as CacheEntry<T> | undefined;
    if (!entry) return null;

    const isExpired = Date.now() - entry.timestamp > API_CONFIG.CACHE_DURATION;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  clear(): void {
    this.cache.clear();
  }
}

export const apiCache = new ApiCache();
