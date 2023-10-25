import React from "react";
import Sort from "./Sort";

function Filter({ AllGenres, genre, setGenre }) {
  console.log(AllGenres);
  return (
    <div>
      <div className="flex gap-4 flex-wrap">
        {AllGenres.map((val, index) => (
          <div
            className={
              genre.includes(val)
                ? " bg-green-500 text-white  px-2 py-1 border-green-500 rounded"
                : " border px-2 py-1  border-green-500 rounded"
            }
            key={index}
            onClick={() =>
              setGenre((v) => {
                if (v.includes(val)) {
                  // If the genre is already selected, remove it
                  return v.filter((vv) => vv !== val);
                } else {
                  // If the genre is not selected, add it
                  return [...v, val];
                }
              })
            }
          >
            <div className="flex gap-4">
              <p>{val} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
