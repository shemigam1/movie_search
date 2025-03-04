function SearchBar({ query, setQuery, handleSearch }) {
    return (
        <div className="flex justify-center items-centre mb-6 gap-3">
            <input
                type="text"
                className="border border-gray-700 bg-gray-800 text-white rounded-l px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[70%]"
                placeholder="Search for movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;