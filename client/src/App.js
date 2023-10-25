import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";
import Sort from "./components/Sort";

const base_url = process.env.REACT_APP_API_URL;

function App() {
  const [data, setData] = useState({});
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [genre, setGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${
          sort.order
        }&genre=${genre.toString()}&search=${search}`;
        console.log(url);
        const { data: d } = await axios.get(url);

        setData(d);
        console.log(d);
      } catch (err) {
        console.log(err);
      }
    };
    getAllMovies();
  }, [page, sort, genre, search]);

  return (
    <div className="container lg:max-w-7xl mx-auto px-8">
      <div className="bg-red-300 flex justify-between  text-lg items-center mb-4">
        <h1 className="text-3xl">FilmyZilla</h1>
        <Search search={search} setSearch={(search) => setSearch(search)} />
      </div>
      <div className="">
        <h2>Total Movies : {data.total}</h2>
      </div>

      <div className="flex  gap-4">
        <div className="flex flex-3 flex-col mb-8">
          <Movies movies={data.movies ? data.movies : []} />
          <Pagination
            page={page}
            limit={data.limit ? data.limit : 0}
            total={data.total ? data.total : 0}
            setPage={(page) => setPage(page)}
          />
        </div>
        <span className="flex-2 border rounded p-8">
          <h1>Filter</h1>

          <Sort sort={sort} setSort={setSort} />
          <Filter
            AllGenres={data.genres ? data.genres : []}
            setGenre={setGenre}
            genre={genre}
          />
        </span>
      </div>
    </div>
  );
}

export default App;
