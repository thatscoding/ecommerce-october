import React from "react";
import { LuArrowDownUp } from "react-icons/lu";

function Sort({ sort, setSort }) {
  console.log(sort);
  return (
    <div className="py-4  flex justify-between">
      <select
        name=""
        id=""
        className="border w-1/2"
        defaultValue={sort.sort}
        onChange={(e) => setSort({ sort: e.target.value, order: sort.order })}
      >
        <option value="year">Year</option>
        <option value="rating">Rating</option>
      </select>

      <div
        className=""
        onClick={() => {
          sort.order === "desc"
            ? setSort({ sort: sort.sort, order: "asc" })
            : setSort({ sort: sort.sort, order: "desc" });
        }}
      >
        <LuArrowDownUp size={30} />
      </div>
    </div>
  );
}

export default Sort;
