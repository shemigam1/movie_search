function MovieCard({ movie, onClick }) {
    const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";

    return (
        <div
            className="bg-gray-800 rounded shadow cursor-pointer hover:shadow-lg transition"
            onClick={() => onClick(movie)}
        >
            {movie.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-64 object-cover rounded-t"
                />
            ) : (
                <img
                    src={defaultImage}
                    alt="No Image Available"
                    className="w-full h-64 object-cover rounded-t"
                />
            )}
            <div className="p-4">
                <h2 className="text-lg font-semibold text-center">{movie.title}</h2>
            </div>
        </div>
    );
}

export default MovieCard;