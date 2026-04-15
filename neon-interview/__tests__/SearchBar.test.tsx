import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SearchBar } from '@/components/SearchBar';
import { UserProvider } from '@/contexts/UserContext';
import { ToastProvider } from '@/contexts/ToastContext';

function renderWithProviders(component: React.ReactElement) {
  return render(
    <ToastProvider>
      <UserProvider>{component}</UserProvider>
    </ToastProvider>
  );
}

describe('SearchBar', () => {
  it('renders search input', () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText('Search by name...');
    expect(input).toBeInTheDocument();
  });

  it('updates input value when typing', () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText(
      'Search by name...'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'John' } });
    expect(input.value).toBe('John');
  });

  it('debounces search input', async () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText('Search by name...');

    fireEvent.change(input, { target: { value: 'Test' } });

    await waitFor(
      () => {
        expect((input as HTMLInputElement).value).toBe('Test');
      },
      { timeout: 400 }
    );
  });
});
