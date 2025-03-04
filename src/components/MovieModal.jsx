function MovieModal({ movie, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 w-11/12 md:w-1/2 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-300 hover:text-white text-2xl"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
                <p className="mb-2">
                    <strong>Release Date:</strong> {movie.release_date || 'N/A'}
                </p>
                <p className="mb-2">
                    <strong>Rating:</strong> {movie.vote_average || 'N/A'}
                </p>
                <p className="mb-2">
                    <strong>Overview:</strong> {movie.overview || 'No overview available.'}
                </p>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieModal;