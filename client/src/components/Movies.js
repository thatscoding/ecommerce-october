import React from "react";

function Movies({ movies }) {
  console.log(movies);
  return (
    <div className="flex gap-8 py-8 flex-wrap justify-center">
      {movies?.map((m, index) => (
        <div className="w-60 h-60 rounded-xl shadow-xl mt-8" key={index}>
          <img src={m.img} alt={m.name} className="w-full h-40 rounded-xl" />
          <div className="px-2 py-2">
            <div className="flex justify-between">
              <h1>{m.name}</h1>
              <div className="rounded-xl bg-green-500 p-1 w-16 flex justify-center h-8">
                <span className="text-sm text-white font-bold">
                  {m.rating} ⭐
                </span>
              </div>
            </div>
            <span className="text-red-500 font-bold">{m.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movies;
