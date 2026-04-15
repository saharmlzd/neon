#  neon User Dashboard

A modern, production-grade user dashboard built with Next.js 16, React 19, and TypeScript.


## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
cd neon-interview
npm run dev

# Run tests
npm test

# Run linter
npm run lint

# Format code
npm run format

# Build for production
npm run build

# Start production server
npm start
```

## Features

- ✅ User list with search and filtering
- ✅ Debounced search (300ms)
- ✅ Company-based filtering
- ✅ Infinite scroll pagination
- ✅ User detail pages with routing
- ✅ Dark mode support
- ✅ Toast notifications
- ✅ Error boundaries
- ✅ Skeleton loading states
- ✅ Empty states
- ✅ Data caching (5 min TTL)
- ✅ Responsive design
- ✅ Full TypeScript support
- ✅ SOLID principles
- ✅ Accessibility features
- ✅ Jest testing

## Tech Stack

- **Framework**: Next.js 16.2.3 (App Router)
- **UI**: React 19.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **State**: Context API
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier

## Project Structure

```
neon-app/
├── app/                    # Next.js App Router
│   ├── users/[id]/        # User detail page
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage (user list)
├── components/            # Reusable UI components
│   ├── CompanyFilter.tsx
│   ├── EmptyState.tsx
│   ├── ErrorBoundary.tsx
│   ├── ErrorState.tsx
│   ├── SearchBar.tsx
│   ├── Skeleton.tsx
│   ├── ThemeToggle.tsx
│   ├── ToastContainer.tsx
│   ├── UserCard.tsx
│   └── UserList.tsx
├── contexts/              # React Context providers
│   ├── ToastContext.tsx
│   └── UserContext.tsx
├── hooks/                 # Custom React hooks
│   ├── useDebounce.ts
│   ├── useInfiniteScroll.ts
│   └── useTheme.ts
├── services/              # API layer
│   ├── cache.ts
│   └── userService.ts
├── types/                 # TypeScript definitions
│   └── index.ts
├── constants/             # App constants
│   └── index.ts
└── __tests__/            # Jest tests
    ├── SearchBar.test.tsx
    └── UserCard.test.tsx
```

## Code Quality Standards

- ✅ No `any` type (enforced by ESLint)
- ✅ Max 100 lines per module
- ✅ Prettier formatting
- ✅ Comprehensive error handling
- ✅ Accessible markup (ARIA labels)
- ✅ Performance optimizations

## Key Features Explained

### State Management

Context API with three providers:

- **UserContext**: Manages users, filters, and search
- **ToastContext**: Handles notifications
- **Theme**: Managed via custom hook

### Performance

- Debounced search (300ms delay)
- Data caching (5-minute TTL)
- Infinite scroll pagination
- Optimized re-renders

### UX

- Skeleton loading states
- Error retry mechanism
- Toast notifications
- Empty state handling
- Dark mode toggle

### Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

## API Integration

Fetches data from: `https://jsonplaceholder.typicode.com/users`

Response is typed with full TypeScript interfaces.

## Testing

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch
```

## License

MIT
