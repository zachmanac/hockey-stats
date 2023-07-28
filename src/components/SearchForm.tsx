import React from 'react';

const SearchForm = () => {

  return (
    <div className="flex items-center justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10">
        <div className="flex flex-col mr-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Search for Player Stats
          </label>
          <div className="flex flex-row space-x-2">
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Enter player's full name"
            />
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
};

export default SearchForm;