function Pagination({ page, totalPages, handlePageChange }) {
    return (
        <div className="flex justify-center mt-6 items-center space-x-4">
            <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className={`px-4 py-2 rounded ${page === 1
                        ? 'bg-gray-700 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
            >
                Prev
            </button>
            <span>
                Page {page} of {totalPages}
            </span>
            <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className={`px-4 py-2 rounded ${page === totalPages
                        ? 'bg-gray-700 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;