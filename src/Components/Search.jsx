import { useState } from "react";

export default function Search({ onSearch }) {
  const [searchText, setsearchText] = useState("");
  function handleOnchange(e) {
    setsearchText(e.target.value);
  }

  function handleOnclick(e) {
    e.preventDefault();
    onSearch(searchText);
  }


  return (
    <>
      <form>
        <div className="flex">
          <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
            <input
              onChange={handleOnchange}
              className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
              id="search-dropdown"
              placeholder="Search Book"
              required
              type="search"
              value={searchText}
            />
            <div className="absolute right-0 top-0 flex h-full items-center">
              <button
                onClick={handleOnclick}
                className="mr-1.5 cursor-pointer  flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                type="submit"
              >
                <svg
                  aria-hidden="true"
                  className="h-[14px] w-[14px]"
                  fill="none"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
