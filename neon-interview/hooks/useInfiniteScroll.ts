import { useCallback, useEffect, useRef, useState } from 'react';

interface UseInfiniteScrollProps {
  hasMore: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
}

export function useInfiniteScroll({
  hasMore,
  isLoading,
  onLoadMore,
}: UseInfiniteScrollProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [element, setElement] = useState<HTMLElement | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasMore && !isLoading) {
        onLoadMore();
      }
    },
    [hasMore, isLoading, onLoadMore]
  );

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (element) {
      observerRef.current.observe(element);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [element, handleIntersection]);

  return setElement;
}
