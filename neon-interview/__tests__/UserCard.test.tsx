import { render, screen } from '@testing-library/react';
import { UserCard } from '@/components/UserCard';
import { User } from '@/types/user';

const mockUser: User = {
  id: 1,
  name: 'John Doe',
  username: 'johndoe',
  email: 'john@example.com',
  phone: '123-456-7890',
  website: 'example.com',
  address: {
    street: 'Main St',
    suite: 'Apt 1',
    city: 'City',
    zipcode: '12345',
    geo: { lat: '0', lng: '0' },
  },
  company: {
    name: 'ACME Corp',
    catchPhrase: 'Innovation',
    bs: 'business',
  },
};

describe('UserCard', () => {
  it('renders user information correctly', () => {
    render(<UserCard user={mockUser} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('ACME Corp')).toBeInTheDocument();
  });

  it('renders as a link to user detail page', () => {
    render(<UserCard user={mockUser} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/users/1');
  });
});
