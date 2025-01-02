import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="max-w-2xl w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for schemes..."
          className="w-full px-4 py-3 pl-12 text-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
      </div>
      <p className="mt-2 text-md text-gray-500 text-center">
        Try searching for "education", "healthcare", or "employment"
      </p>
    </div>
  );
};

export default SearchBar;