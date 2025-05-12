import { useState } from "react";

export default function Sort() {
  const [sortvalue, setSortvalue] = useState("");

  const onHandleValue = (e) => {
    setSortvalue(e.target.value);
  };

  console.log(sortvalue);
  return (
    <>
      <div className="flex items-stretch space-x-3">
        <select
          className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
          id="sortBy"
          name="sortBy"
          onChange={onHandleValue}
        >
          <option value="">Sort</option>
          <option value="name_asc">Name (A-Z)</option>
          <option value="name_desc">Name (Z-A)</option>
          <option value="year_asc">Publication Year (Oldest)</option>
          <option value="year_desc">Publication Year (Newest)</option>
        </select>
      </div>
    </>
  );
}
