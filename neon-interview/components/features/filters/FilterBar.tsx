import { SearchBar } from './SearchBar';
import { CompanyFilter } from './CompanyFilter';

export function FilterBar() {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row">
      <div className="flex-1">
        <SearchBar />
      </div>
      <CompanyFilter />
    </div>
  );
}
